<template>
  <div>
    <h2 class="wrapper ma-headers mt-20">Market Analytics</h2>

    <div
      class="wrapper mt-12 lg:flex block items-center justify-between wrapper"
    >
      <div class="flex items-start">
        <div
          class="h-14 flex items-center gap-2 mr-4"
          style="background: #1f2b4a"
        >
          <button
            class="py-3 px-5 m-1"
            @click="toggleFirst()"
            :class="firstConditional ? 'toggle' : ''"
          >
            Locked values
          </button>
          <button
            class="py-3 px-5"
            @click="toggleSecond()"
            :class="secondConditional ? 'toggle' : ''"
          >
            Stable coin analysis
          </button>
          <!-- <plus-icon class="m-1" /> -->
        </div>
        <provider-dropdown-vue />
      </div>

      <div class="lg:flex hidden space-x-4 items-center gap-2">
        <button
          @click="chooseCategory(select)"
          class="py-4 px-6"
          :class="[categoryValue === select ? 'active-tab' : ' ']"
          v-for="(select, j) in category"
          :key="j"
        >
          {{ select }}
        </button>
      </div>
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

    <div class="wrapper">
      <div>
        <locked-analytics-graph-vue />
      </div>
      <table class="lg:table hidden w-full">
        <tr>
          <th>Name</th>
          <th>Chain</th>
          <th>Category</th>
          <th>Locked value</th>
        </tr>

        <tbody>
          <tr class="" v-for="(analytics, i) in marketAnalytics" :key="i">
            <td class="flex items-center gap-4">
              <img :src="`/images/${analytics.img}`" alt="" />
              {{ analytics.name }}
            </td>
            <td>{{ analytics.chain }}</td>
            <td>
              <div class="coin_category-grid">
                <div
                  class="coin-category"
                  v-for="(category, j) in analytics.category"
                  :key="j"
                >
                  {{ category }}
                </div>
              </div>
            </td>
            <td>{{ analytics.locked_value }}</td>
          </tr>
        </tbody>
      </table>
      <div class="lg:block hidden w-full text-center">
        <NuxtLink to="/all_analytics">
          <button class="show-btn font-semi-bold lg:p-9 p-2">Show All</button>
        </NuxtLink>
      </div>
    </div>

    <div class="mt-11 lg:hidden block">
      <div
        class="mobile-ma-table"
        v-for="(analytics, b) in marketAnalytics"
        :key="b"
      >
        <div class="flex items-center gap-3 mb-5">
          <img :src="`/images/${analytics.img}`" alt="" class="w-10 h-10" />
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

        <div class="flex items-center justify-between mb-4">
          <span>Locked Value</span>
          <span>{{ analytics.locked_value }}</span>
        </div>
      </div>
      <div class="w-full text-center">
        <NuxtLink to="/all_analytics">
          <button class="show-btn font-semi-bold lg:p-9 p-2">Show All</button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import lockedAnalyticsGraphVue from "../analytics.graph.vue";

import ProviderDropdownVue from "../ProviderDropdown.vue";

export default {
  name: "AnalyticsTable",
  components: {
    ProviderDropdownVue,
    lockedAnalyticsGraphVue,
  },
  data() {
    return {
      firstConditional: true,
      secondConditional: false,
      category: ["ALL", "DEFI", "NFT", "HECO"],
      categoryValue: "All",
    };
  },

  computed: {
    marketAnalytics() {
      return this.$store.state.analytics.marketAnalytics.slice(0, 3);
    },
  },
  methods: {
    toggleFirst() {
      this.firstConditional = true;
      if (this.firstConditional === true) {
        this.secondConditional = false;
      }
    },
    toggleSecond() {
      this.secondConditional = true;
      if (this.secondConditional === true) {
        this.firstConditional = false;
      }
    },
    chooseCategory(option) {
      this.categoryValue = option;
    },
  },
  mounted() {
    this.categoryValue = this.category[0];
  },
};
</script>

<style scoped>
table {
  margin-top: 2px;
}

th,
td {
  padding: 16px 66px;
}

.mobile-ma-table {
  padding: 16px 24px 29px 24px;
  background: #0a132a;
  margin-bottom: 4px;
}

.toggle {
  background: #056237;
  border-radius: 4px;
  transition: 0.3s ease-in;
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
}
</style>
