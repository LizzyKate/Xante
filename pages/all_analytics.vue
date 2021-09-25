<template>
  <div class="" @click="hideT">
    <header-vue />
    <div
      class="wrapper mt-40 lg:flex block items-center justify-between wrapper"
    >
      <div class="flex items-start">
        <div
          class="xl:h-14 h-12 flex items-center gap-2 xl:mr-4"
          style="background: #1f2b4a"
        >
          <button
            class="xl:py-3 py-1 px-5 m-1"
            :class="firstConditional ? 'toggle' : ''"
            @click="toggleFirst()"
          >
            Locked values
          </button>
          <button
            class="xl:py-3 py-1 px-5"
            :class="secondConditional ? 'toggle' : ''"
            @click="toggleSecond()"
          >
            Stable coin analysis
          </button>
          <!-- <plus-icon class="m-1" /> -->
        </div>
        <!-- <div class="provider-dropdown relative xl:block hidden">
          <div class="" @click="toggle()">
            <div class="py-4 px-5 rounded p-dropdown">
              <span>{{ value }}</span>
              <img
                src="/images/arrowdown.png"
                style="width: 7%"
                alt="drop down"
              />
            </div>

            <div
              :class="visible ? 'fade-in' : 'hidden'"
              class="p-dropdown-content text-white p-2"
            >
              <ul>
                <li
                  v-for="(item, f) in list"
                  :key="f"
                  class="e-dv"
                  @click="select(item)"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div> -->
        <div class="provider-dropdown relative xl:block hidden dropdown">
          <div class="" @click="toggle($event, 'fifth_dropdown')">
            <div class="py-4 px-5 rounded p-dropdown">
              <span>{{ value }}</span>
              <img
                src="/images/arrowdown.png"
                style="width: 7%"
                alt="drop down"
              />
            </div>

            <div
              :class="isvisible['fifth_dropdown'] ? 'fade-in' : 'hidden'"
              class="p-dropdown-content text-white p-2"
            >
              <ul>
                <li
                  v-for="(item, f) in list"
                  :key="f"
                  class="e-dv"
                  @click="select(item)"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:flex hidden space-x-4 items-center gap-2">
        <button
          v-for="(select, j) in category"
          :key="j"
          class="py-4 px-6"
          :class="[categoryValue === select ? 'active-tab' : ' ']"
          @click="chooseCategory(select)"
        >
          {{ select }}
        </button>
      </div>
    </div>

    <div class="mt-5 lg:flex block items-center justify-between wrapper">
      <div class="lg:flex hidden items-center gap-2">
        <button
          v-for="(select, j) in category"
          :key="j"
          class="py-4 px-6"
          :class="[categoryValue === select ? 'active-tab' : ' ']"
          @click="chooseCategory(select)"
        >
          {{ select }}
        </button>
      </div>
      <div
        class="
          wrapper
          lg:mt-10
          mt-20
          mb-4
          flex
          items-end
          lg:justify-start
          justify-end
          lg:gap-12
        "
      >
        <div>
          <div class="flex items-center gap-2">
            <Color theme="yellow" />
            <h5 class="inter lg:text-2xl text-xs">$92.88B</h5>
          </div>
          <span class="small-text ml-4 lg:text-sm font-thin"
            >Gross value locked</span
          >
        </div>
        <div>
          <div class="flex items-center gap-2">
            <Color theme="green" />
            <h5 class="inter lg:text-2xl text-xs">$92.88B</h5>
          </div>
          <span class="small-text ml-4 lg:text-sm font-thin"
            >Net value locked</span
          >
        </div>
      </div>
    </div>
    <div class="new-wrapper">
      <analytics-graph-vue />
    </div>
    <div class="wrapper">
      <table class="w-full mb-6 xl:table hidden">
        <tr>
          <th>Name</th>
          <th>Chain</th>
          <th>Category</th>
          <th>Locked value</th>
        </tr>

        <tbody>
          <tr v-for="(analytics, i) in marketAnalytics" :key="i" class="">
            <td class="flex items-center gap-3">
              <img :src="`/images/${analytics.img}`" alt="" />
              {{ analytics.name }}
            </td>
            <td>{{ analytics.chain }}</td>
            <td>
              <div class="coin_category-grid">
                <div
                  v-for="(category, j) in analytics.category"
                  :key="j"
                  class="coin-category"
                >
                  {{ category }}
                </div>
              </div>
            </td>
            <td>{{ analytics.locked_value }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- *****************MOBILe -->

    <div class="mb-11">
      <div
        v-for="(analytics, p) in marketAnalytics"
        :key="p"
        class="mobile-a-table xl:hidden block"
      >
        <div class="flex items-center gap-3 mb-5">
          <img :src="analytics.img" alt="" class="w-10 h-10" />
          {{ analytics.name }}
        </div>

        <div class="flex items-center justify-between mb-4">
          <span>Chain</span>
          <span>{{ analytics.chain }}</span>
        </div>

        <div class="flex items-center justify-between mb-4">
          <span>Category</span>
          <span>{{ analytics.category }}</span>
        </div>

        <div class="flex items-center justify-between">
          <span>Locked Value</span>
          <span>{{ analytics.locked_value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import analyticsGraphVue from '~/components/analytics.graph.vue'
import Color from '~/components/Color.vue'
import HeaderVue from '~/components/Header.vue'

export default {
  name: 'Analytics',
  components: {
    Color,
    analyticsGraphVue,
    HeaderVue,
  },
  data() {
    return {
      firstConditional: true,
      secondConditional: false,
      category: ['ALL', 'DEFI', 'NFT', 'HECO'],
      categoryValue: 'All',
      value: 'Top 10 Providers',
      list: [
        'Top 10 Borrow Rates',
        'Top 10 Provider',
        'Compare Provider',
        'Coin Price',
      ],
    }
  },

  computed: {
    marketAnalytics() {
      return this.$store.state.analytics.marketAnalytics
    },
    isvisible() {
      return this.$store.state.drop
    },
  },
  mounted() {
    this.categoryValue = this.category[0]
  },
  methods: {
    toggleFirst() {
      this.firstConditional = true
      if (this.firstConditional === true) {
        this.secondConditional = false
      }
    },
    toggleSecond() {
      this.secondConditional = true
      if (this.secondConditional === true) {
        this.firstConditional = false
      }
    },
    chooseCategory(option) {
      this.categoryValue = option
    },
    hideT(event) {
      event.cancelBubble = true
      // close all open dropdowns
      const t = document.querySelector('.dropdown')
      const body = document.querySelector('body')
      if (body.contains(t)) {
        this.$store.commit('drop/dropAllVisibility')
      }
    },
    toggle(event, key) {
      event.stopPropagation()
      const t = this.$store.state.drop[key]
      this.$store.commit('drop/visibility', { value: !t, key })
    },
  },
}
</script>

<style scoped>
.toggle {
  background: #056237;
  border-radius: 4px;
  transition: 0.3s ease;
}
table {
  margin-top: 2px;
}

td,
th {
  padding: 16px 69px;
}

.mobile-a-table {
  background: #0a132a;
  margin-top: 4px;
  padding: 16px 24px 29px 24px;
}

.active {
  background: #056237;
  border-radius: 4px;
}

.lsca {
  padding: 12px 20px;
}
.new-wrapper {
  padding: 0px 68px;
}

@media screen and (max-width: 768px) {
  h5 {
    font-size: 12px !important;
  }

  .small-text {
    font-size: 9px;
  }

  p {
    font-size: 12px;
  }
}

@media screen and (max-width: 280px) {
  p {
    font-size: 10px;
  }

  h5 {
    font-size: 10px !important;
  }

  .small-text {
    font-size: 7px;
  }
  .active {
    background: #281e5d;
  }

  .lsca {
    padding: 11px 13.5px;
  }
}
@media screen and (max-width: 1200px) {
  .new-wrapper {
    padding: 0px 0px;
  }
}
</style>
