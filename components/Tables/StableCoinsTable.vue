<template>
  <div class="">
    <h2 class="wrapper ma-headers lg:mb-14 mb-6">Stable Coin Analysis</h2>
    <div
      class="
        wrapper
        w-full
        mb-6
        flex
        lg:flex-row
        flex-col
        lg:items-end
        items-start
        justify-between
      "
    >
      <div class="flex items-end space-x-2 relative dropdown">
        <button
          v-for="(select, g) in allStableCoins"
          :key="g"
          class="py-4 px-3"
          :class="stableCoin === select ? 'active-tab' : ' '"
          @click="chooseCoin(select)"
        >
          {{ select }}
        </button>

        <button class="arrow-btn" @click="toggle($event, 'fourth_dropdown')">
          <img src="/images/down.png" alt="" />
        </button>
        <span class="text-xs lg:block hidden">More coins</span>
        <div
          class="coin flex flex-col"
          :class="isvisible['fourth_dropdown'] ? 'fade-in' : 'hidden'"
        >
          <p
            v-for="(list, e) in coins"
            :key="Math.random() * e"
            @click="selectCoin(list)"
          >
            {{ list }}
          </p>
        </div>
      </div>

      <div class="flex items-center lg:mt-0 mt-4">
        <span class="lg:text-sm small-text font-light mr-3">USDT</span>
        <h5 class="inter lg:text-2xl text-sm">$1.00</h5>
      </div>
    </div>

    <div class="new-wrapper">
      <stable-coins-graph-vue />
    </div>

    <div class="wrapper">
      <table class="xl:table hidden">
        <tr>
          <th>Name</th>
          <th>Chain</th>
          <th>Borrow APY</th>
          <th>Lend APY</th>
        </tr>

        <tbody>
          <tr
            v-for="(coin, i) in stableCoins"
            :key="i"
            class="stable-cointable"
          >
            <td class="flex items-center gap-3">
              <img :src="`/images/${coin.img}`" alt="" />
              {{ coin.name }}
            </td>
            <td>{{ coin.chain }}</td>
            <td>{{ coin.borrow_apy }}</td>
            <td>{{ coin.lend_apy }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="wrapper s-btn-holder w-full text-center">
      <NuxtLink to="/stable_coins">
        <button class="show-btn font-semi-bold lg:p-9 p-2">Show All</button>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import stableCoinsGraphVue from '../stableCoins.graph.vue'

export default {
  name: 'StableCoinTable',
  components: { stableCoinsGraphVue },
  data() {
    return {
      allStableCoins: ['USDL', 'USDT', 'USDF'],
      stableCoin: '',
      visible: false,
      coins: ['USDF', 'USDC', 'BUSD'],
    }
  },

  computed: {
    stableCoins() {
      return this.$store.state.stable_coins.stableCoins.slice(0, 3)
    },
    isvisible() {
      return this.$store.state.drop
    },
  },
  mounted() {
    this.stableCoin = this.allStableCoins[0]
  },
  methods: {
    chooseCoin(option) {
      this.stableCoin = option
    },
    showCoin() {
      this.visible = !this.visible
    },
    selectCoin(value) {
      if (!this.allStableCoins.includes(value)) {
        this.allStableCoins.push(value)
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
th,
td {
  padding: 16px 66px !important;
}
.coin {
  background: #1f2b4a;
  min-width: 134px;
  border-radius: 3px;
  position: absolute;
  z-index: 50;
  top: 63px;
  right: 0px;
}
.new-wrapper {
  padding: 0 68px;
}
.coin p {
  padding: 12px 16px;
}
.coin p:hover {
  background: #056237;
}
@media screen and (max-width: 540px) {
  .s-btn-holder,
  .sc-graph {
    padding: 0px !important;
  }
}
@media screen and (max-width: 1200px) {
  .new-wrapper {
    padding: 0px 0px;
  }
}
</style>
