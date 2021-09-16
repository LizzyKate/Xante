<template>
  <div class="metric-view">
    <div class="wrapper">
      <h2 class="ma-headers mb-7">Compare Coins</h2>
      <span class="text-sm mb-4">Select coins to compare</span>
      <div class="flex space-x-4 items-center mt-4">
        <div class="relative">
          <select
            name="coin"
            class="py-4 px-3 active-tab focus:outline-none"
            id="coin"
            style="width: 90px"
            v-model="coin"
            @change="add(coin)"
          >
            <option selected value>Coin</option>
            <option
              v-for="(name, i) in compareCoin"
              :key="i"
              :value="name.fullName"
            >
              {{ name.crypto }}
            </option>
          </select>

          <div class="absolute" style="top: 22px; right: 11px">
            <img src="/images/arrowdown.png" class="w-3" alt="" />
          </div>
        </div>
        <div
          class="w-full all-coin p-2"
          style=""
          :class="allCoin.length === 0 ? 'hidden' : ' flex'"
        >
          <div
            class="flex justify-between items-center p-2"
            v-for="(currency, k) in allCoin"
            :key="k"
            style="min-width: 113px; background: #151f38; border-radius: 3px"
          >
            <div>
              {{ currency }}
            </div>
            <button @click="removeCoin(k)">
              <img src="/images/delete.svg" alt="" />
            </button>
          </div>
          <div class="w-full text-right">
            <button id="dGreenBtn">Compare</button>
          </div>
        </div>
      </div>
    </div>

    <div class="table-div">
      <table class="metric-table">
        <tr>
          <th></th>
          <th>
            <div class="pt-8">
              <img
                class="lg:w-auto w-5"
                src="/images/Group 30 (1).png"
                alt=""
              />
              <span class="lg:block hidden mt-8">{{ coinOne.name }}</span>
            </div>
          </th>
          <th>
            <div class="pt-8">
              <img class="lg:w-auto w-5" src="/images/Group 30.png" alt="" />
              <span class="lg:block hidden mt-8">{{ coinTwo.name }}</span>
            </div>
          </th>
        </tr>
        <tbody>
          <tr>
            <td class="price">Price</td>
            <td>{{ coinOne.price }}</td>
            <td>{{ coinTwo.price }}</td>
          </tr>
          <tr>
            <td class="price">Market Cap</td>
            <td>{{ coinOne.marketCap }}</td>
            <td>{{ coinTwo.price }}</td>
          </tr>
          <tr>
            <td class="price">Trading Volume</td>
            <td>{{ coinOne.tradingVolume }}</td>
            <td>{{ coinTwo.tradingVolume }}</td>
          </tr>
          <tr>
            <td class="price">Available Supply</td>
            <td>{{ coinOne.availableSupply }}</td>
            <td>{{ coinTwo.availableSupply }}</td>
          </tr>
          <tr>
            <td class="price">All Time High</td>
            <td>{{ coinOne.allTimeHigh }}</td>
            <td>{{ coinTwo.allTimeHigh }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      coin: "",
      compareCoin: [
        {
          crypto: "BTC ",
          id: "BTC ",
          fullName: "Bitcoin",
        },
        {
          crypto: "ETH",
          id: "ETH",
          fullName: "Ethereum",
        },
      ],
      allCoin: [],
    };
  },

  computed: {
    coinOne() {
      return this.$store.state.metrics.coinOne;
    },
    coinTwo() {
      return this.$store.state.metrics.coinTwo;
    },
  },
  methods: {
    removeCoin(i) {
      this.allCoin.splice(i, 1);
    },
    add() {
      this.allCoin.push(this.coin);
    },
  },
};
</script>

<style scoped>
#dGreenBtn {
  width: 100px;
  height: 36px;
  background: #056237;
  border-radius: 4px;
  padding: 8px 16px;
}
.metric-view {
  margin-top: 154px;
  margin-bottom: 82px;
}
td {
  /* padding-left: 136px; */
}
.price {
  padding-left: 40px;
}
.table-div {
  margin: 80px 120px;
}
select {
  appearance: none;
}
select:focus {
  outline: none;
}
.all-coin {
  background: #0a1227;
  border-radius: 4px;
}

@media screen and (max-width: 540px) {
  td,
  th {
    padding: 20px !important;
  }
  .table-div {
    margin: 80px 0px !important;
  }
}
</style>
