<template>
  <div class="">
    <h2 class="wrapper ma-headers lg:mb-14 mb-6 lg:mt-40 mt-32">
      Stable Coin Analysis
    </h2>
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
      <div class="flex items-end gap-2">
        <tab class="active-tab">USDT</tab>
        <tab>USDC</tab>
        <tab>BUSD</tab>
        <button class="arrow-btn">
          <img src="~/assets/images/Arrowdown.png" alt="" />
        </button>
        <span class="text-xs">More coins</span>
      </div>

      <div class="lg:flex hidden items-center lg:mt-0 mt-4">
        <span class="lg:text-sm small-text font-light mr-3">USDT</span>
        <h5 class="inter lg:text-2xl text-sm">$1.00</h5>
      </div>
    </div>

    <div class="wrapper">
      <div>
        <stable-coins-graph-vue />
      </div>
      <table class="sc-table lg:table hidden">
        <tr>
          <th>Name</th>
          <th>Chain</th>
          <th>Borrow APY</th>
          <th>Lend APY</th>
        </tr>

        <tbody>
          <tr v-for="(coin, a) in stableCoins" :key="a">
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

    <!-- *********************MOBILE****************** -->

    <div class="mt-11 lg:hidden block mb-20">
      <div class="mobile-sc-table" v-for="(coin, b) in stableCoins" :key="b">
        <div class="flex items-center gap-3 mb-5">
          <img :src="`/images/${coin.img}`" alt="" class="w-10 h-10" />
          {{ coin.name }}
        </div>

        <div class="flex items-center justify-between mb-4">
          <span>Chain</span>
          <span>{{ coin.chain }}</span>
        </div>

        <div class="flex items-center justify-between mb-4">
          <span>Borrow APY</span>
          <span>{{ coin.borrow_apy }}</span>
        </div>

        <div class="flex items-center justify-between mb-4">
          <span>Lend APY</span>
          <span>{{ coin.lend_apy }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import stableCoinsGraphVue from "~/components/stableCoins.graph.vue";

export default {
  components: {
    stableCoinsGraphVue,
  },

  data() {
    return {};
  },

  computed: {
    stableCoins() {
      return this.$store.state.stable_coins.stableCoins;
    },
  },
};
</script>

<style scoped>
th,
td {
  padding: 16px 66px !important;
}
.sc-table {
  margin-top: 2px;
  margin-bottom: 50px;
}

.mobile-sc-table {
  background: #0a132a;
  margin-top: 4px;
  padding: 16px 24px 29px 24px;
}
</style>