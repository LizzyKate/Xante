<template>
  <section>
    <div class="compare-view">
      <h2 class="sharp-sans font-bold" style="width: 687px">
        Compare Centralised and Decentralised Cryptocurrency Financial Markets.
      </h2>
      <p class="mt-2 md:block hidden">
        Compare the best lend and borrow rate for your <br />
        crypto assets across Defi protocols and Providers.
      </p>

      <div class="lg:flex block items-center justify-between">
        <div class="compare-filters grid-cols-3 mt-10 mb-16">
          <p class="compare-filter-option active-filter md:col-span-3">
            All Markets
          </p>
          <p class="compare-filter-option">Centralized</p>
          <p class="compare-filter-option md:col-span-2">Decentralized</p>
          <p class="compare-filter-option">Stable coins</p>
          <select class="compare-filter-option" name="categories" id="">
            <option value="0">Categories</option>
          </select>
          <select class="compare-filter-option" name="titleList" id="">
            <option value="0">Title list</option>
          </select>
        </div>

        <div class="linknsearch-grid">
          <div class="cls lg:mb-6">
            <button
              :class="lending ? 'lend' : ' '"
              class="cl md:px-7 px-3 md:py-2 py-1 rounded-3xl"
              @click="toggleLend()"
            >
              Lending
            </button>
            <button
              :class="borrowing ? 'lend' : ''"
              class="cl md:px-7 px-3 md:py-2 py-1 rounded-3xl"
              @click="toggleBorrow()"
            >
              Borrowing
            </button>
          </div>

          <form class="search-box md:mr-0 mr-4">
            <div class="flex items-center">
              <img
                class="md:mr-3 mr-2 w-3 h-3"
                src="assets/images/search.png"
                alt=""
              />
              <input
                type="text"
                class="bg-transparent focus:outline-none md:text-sm text-xs"
                placeholder="Search Coin"
              />
            </div>
            <img src="assets/images/shape.png" alt="" />
          </form>
        </div>
      </div>
    </div>
    <div class="wrapper mb-16">
      <table id="compare-table" class="lg:table hidden">
        <tr class="">
          <th>Platforms</th>
          <th>Category</th>
          <th>Locked value</th>
          <th
            class="text-center"
            v-for="(coin, i) in allCentralisedCoins"
            :key="i"
          >
            <div class="flex flex-col items-center">
              <div class="mb-7 flex flex-col items-center">
                <img :src="`/images/${coin.img}`" class="w-1/2 mb-4" alt="" />
                <span class="text-sm">ETH</span>
              </div>
              <span>APY</span>
            </div>
          </th>
        </tr>

        <tbody>
          <tr class="" v-for="(coin, i) in allCoins" :key="i">
            <td class="platform-col">
              <img :src="`/images/${coin.img}`" alt="" />
              {{ coin.platform }}
            </td>
            <td>
              <div class="coin_category-grid">
                <div
                  class="coin-category"
                  v-for="(category, j) in coin.category"
                  :key="j"
                >
                  {{ category }}
                </div>
              </div>
            </td>
            <td class="lockvalue-col">
              <div>{{ coin.lockedValue }}</div>
              <div class="lockvalue-percent">{{ coin.lockedValuePercent }}</div>
            </td>
            <td
              class="text-center"
              v-for="(allCoin, k) in coin.allCoins"
              :key="k"
            >
              {{ allCoin.APY }}
            </td>

            <td>
              <a href="#" id="l-green-btn">Go to site</a>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- *****MOBILE VIEW -->

      <!-- <div
        class="mobile-table lg:hidden block"
        v-for="(coin, j) in coins"
        :key="j"
      >
        <div class="flex items-start justify-between">
          <div class="flex items-start mb-6">
            <img :src="coin.img" alt="" class="mr-2" />

            <div class="">
              <div class="lg:mr-5 mr-3">
                <span>{{ coin.platform }}</span>
                <div class="lockvalue-col">
                  {{ coin.locked_value
                  }}<span class="lockvalue-percent">+14.81%</span>
                </div>
                <div class="coin_category-grid">
                  <span
                    class="coin-category"
                    v-for="(category, i) in coin.categories"
                    :key="i"
                  >
                    {{ category }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <LGreenBtn />
        </div>

        <table class="mobile-d-table">
          <tr>
            <th></th>
            <th>
              <img src="~/assets/images/eth.png" alt="" />
              <span class="text-sm">ETH</span>
            </th>
            <th>
              <img src="~/assets/images/btc.png" alt="" />
              <span class="text-sm">BCH</span>
            </th>
            <th>
              <img src="~/assets/images/kcs.png" alt="" />
              <span class="text-sm">KCS</span>
            </th>
          </tr>

          <tr class="mb-4">
            <td>Lend APY</td>
            <td>{{ coin.ETH_APY }}</td>
            <td>{{ coin.BCH_APY }}</td>
            <td>{{ coin.KCS_APY }}</td>
          </tr>

          <tr class="mb-4">
            <td>Borrow APY</td>
            <td>{{ coin.ETH_APY }}</td>
            <td>{{ coin.BCH_APY }}</td>
            <td>{{ coin.KCS_APY }}</td>
          </tr>
        </table>
      </div> -->
    </div>
  </section>
</template>

<script>
import LGreenBtn from "~/components/Buttons/LGreenBtn.vue";
export default {
  components: { LGreenBtn },

  data() {
    return {
      lending: true,
      borrowing: false,
    };
  },
  computed: {
    allCentralisedCoins() {
      return this.$store.state.market.allCentralisedCoins;
    },
    allDecentralisedCoins() {
      return this.$store.state.market.allDecentralisedCoins;
    },
    allCoins() {
      return this.$store.state.market.coins;
    },
  },

  methods: {
    toggleLend() {
      this.lending = true;
      this.borrowing = false;
    },
    toggleBorrow() {
      this.lending = false;
      this.borrowing = true;
    },
  },
};
</script>

<style scoped>
#l-green-btn {
  padding: 8px 16px;
  /* width: 112.1px; */
  background: #a2ffe8;
  color: #004b39;
  border-radius: 24px;
}

td {
  padding: 19px 20px;
  /* text-align: center; */
}

th {
  padding: 19px 20px;
  vertical-align: bottom;
  /* text-align: center; */
}

.mobile-table {
  background: #0a132a;
  font-size: 14px !important;
  padding: 21px 24px;
  width: 100%;
  margin-bottom: 4px;
}

.coin_category-grid {
  width: 160px;
}
.lend {
  background: #056237;
  transition: 0.3s ease-in;
}
.compare-view {
  margin: 160px 68px 0px 68px;
}

.compare-filters {
  width: 20%;
  display: grid;
  grid-template-columns: 50% 50% 50%;
  gap: 8px;
}
.compare-filter-option {
  padding: 4px 8px;
  background: #1f2b4a;
  border-radius: 2px;
  max-width: 118px;
  cursor: pointer;
}

.cls {
  background: #0a1227;
  border-radius: 24px;
  display: flex;
  align-items: center;
}

a.nuxt-link-exact-active {
  background-color: #056237;
}

.search-box {
  width: 377px;
  height: 52px;
  background: #0a1227;
  border-radius: 4px;
  padding: 18.5px 22.67px 18.5px 18.5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.linknsearch-grid {
  display: grid;
  flex-direction: row;
  justify-items: end;
}
@media screen and (max-width: 400px) {
  #l-green-btn {
    font-size: 12px;
    line-height: 15px;
    /* width: 85px; */
  }
}
@media screen and (max-width: 768px) {
  td,
  th {
    font-size: 14px !important;
  }

  .linknsearch-grid {
    display: grid;
    flex-direction: flex;
    grid-template-columns: 50% 50%;
    align-items: end;
    justify-items: baseline;
    margin-bottom: 44px;
  }

  .compare-filters {
    width: 30%;
  }
}

@media screen and (max-width: 1024px) {
  .compare-filters {
    width: 30%;
  }

  .compare-view {
    margin: 160px 24px 0 24px;
  }

  .cls {
    width: 250px;
  }
}

@media screen and (max-width: 540px) {
  .compare-view {
    margin: 100px 24px;
  }

  h2 {
    font-size: 18px !important;
    line-height: 29.27px;
    width: 319px !important;
  }

  .compare-filters {
    width: 100%;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .search-box {
    width: 100%;
    height: 39px;
    padding: 12px 13px;
    order: 1;
  }

  .cl {
    font-size: 12px !important;
  }

  .linknsearch-grid {
    display: grid;
    flex-direction: column;
    grid-template-columns: 50% 50%;
    align-items: end;
    justify-content: space-between;
  }

  .linknsearch-grid :nth-child(2) {
    order: 1;
  }

  .cls {
    width: 150px;
    height: fit-content !important;
  }
}
</style>