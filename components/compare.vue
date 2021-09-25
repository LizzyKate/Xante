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
        <div class="mt-10 mb-16">
          <div class="mb-3">
            <button class="compare-filter-option active-filter md:col-span-3">
              All Markets
            </button>
          </div>
          <div class="flex items-center space-x-3 mb-3">
            <div>
              <button class="compare-filter-option">Centralized</button>
            </div>
            <div>
              <button class="compare-filter-option">Decentralized</button>
            </div>
          </div>
          <div class="flex items-center space-x-2">
            <div class="">
              <button class="compare-filter-option">Stable coins</button>
            </div>
            <!-- <select
              id=""
              v-model="category"
              class="compare-filter-option focus:outline-none"
            >
              <option selected value>Categories</option>
              <option
                v-for="(name, l) in chooseCategory"
                :key="l"
                :value="name.id"
              >
                {{ name.code }}
              </option>
            </select> -->
            <div class="relative _category w-1/2 dropdown">
              <div
                class="flex justify-between items-center"
                @click="toggle($event, 'visible')"
              >
                <span>{{ value }}</span>
                <img
                  src="/images/arrowdown.png"
                  style="width: 7%"
                  alt="drop down"
                />
              </div>

              <div
                :class="isvisible['visible'] ? 'fade-in' : 'hidden'"
                class="dropdown-content"
              >
                <ul>
                  <li
                    v-for="(item, f) in list"
                    :key="f"
                    class=""
                    @click="select(item)"
                  >
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- <select id="" class="compare-filter-option" name="titleList">
            <option value="0">Title list</option>
          </select> -->
        </div>

        <div class="linknsearch-grid xl:w-1/2 w-full">
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

          <form
            class="search-box md:mr-0 mr-4 relative cursor-pointer dropdown"
            @click="toggle($event, 'search_dropdown')"
          >
            <div class="flex items-center w-full">
              <img
                class="md:mr-3 mr-2 w-3 h-3"
                src="/images/search.png"
                alt=""
              />
              <input
                v-model="result"
                type="text"
                class="
                  bg-transparent
                  focus:outline-none
                  md:text-sm
                  text-xs
                  w-full
                "
                placeholder="Search Coin"
              />
            </div>
            <img src="/images/shape.png" alt="" />
            <div
              :class="isvisible['search_dropdown'] ? 'fade-in' : 'hidden'"
              class="dropdown-content-two"
            >
              <ul>
                <li
                  v-for="(item, h) in allCoin"
                  :key="h"
                  class=""
                  @click="showResult(item)"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="mb-16 wrapper" style="">
      <table id="compare-table" class="lg:table hidden">
        <tr class="">
          <th>Platforms</th>
          <th>Category</th>
          <th>Locked value</th>
          <th
            v-for="(coinType, i) in allCentralisedCoins"
            :key="i"
            class="text-center"
          >
            <div class="flex flex-col items-center">
              <div class="mb-7 flex flex-col items-center">
                <img
                  :src="`/images/${coinType.img}`"
                  class="w-1/2 mb-4"
                  alt=""
                />
                <span class="text-sm">{{ coinType.coin }}</span>
              </div>
              <span>APY</span>
            </div>
          </th>
        </tr>

        <tbody>
          <tr v-for="(marketCoin, a) in allCoins" :key="a" class="">
            <td class="platform-col">
              <img :src="`/images/${marketCoin.img}`" alt="" />
              {{ marketCoin.platform }}
            </td>
            <td>
              <div class="coin_category-grid">
                <div
                  v-for="(marketCategory, j) in marketCoin.category"
                  :key="j"
                  class="coin-category"
                >
                  {{ marketCategory }}
                </div>
              </div>
            </td>
            <td class="lockvalue-col">
              <div>{{ marketCoin.lockedValue }}</div>
              <div class="lockvalue-percent">
                {{ marketCoin.lockedValuePercent }}
              </div>
            </td>
            <td
              v-for="(marketAllCoin, k) in marketCoin.allCoins"
              :key="k"
              class="text-center"
            >
              {{ marketAllCoin.APY }}
            </td>
            <td class="block">
              <a id="mobile-green-btn" href="#">Go to site</a>
            </td>
            <!-- <td class="lg:block xl:hidden">
              <a id="mobile-green-btn" href="#">Go </a>
            </td> -->
          </tr>
        </tbody>
      </table>

      <!-- *****MOBILE VIEW -->

      <!-- *****MOBILE VIEW -->

      <div
        v-for="(mobileCoin, j) in allCoins"
        :key="j"
        class="mobile-table lg:hidden block"
      >
        <div class="flex items-start justify-between">
          <div class="flex space-x-2 w-3/4 items-start mb-6">
            <div class="w-10">
              <img
                :src="`/images/${mobileCoin.img}`"
                alt=""
                class="mr-2 w-full"
              />
            </div>

            <div class="">
              <div class="lg:mr-5 mr-3">
                <span>{{ mobileCoin.platform }}</span>
                <div class="lockvalue-col">
                  {{ mobileCoin.lockedValue
                  }}<span class="lockvalue-percent">{{
                    mobileCoin.lockedValuePercent
                  }}</span>
                </div>
                <div class="coin_category-grid __reduce">
                  <span
                    v-for="(mobileCategory, i) in mobileCoin.category"
                    :key="i"
                    class="coin-category"
                  >
                    {{ mobileCategory }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="block w-1/4">
            <a id="mobile-green-btn" href="#">Go to site</a>
          </div>
        </div>

        <table class="mobile-d-table">
          <tr>
            <th></th>
            <th v-for="(img, g) in mobileCoin.allCoins" :key="g" class="w-3">
              <img :src="`/images/${img.img}`" alt="" class="w-6" />
              <span class="text-sm">{{ img.name }}</span>
            </th>
          </tr>

          <tr class="mb-4 __mobileCompare">
            <td class="w-2/5">Lend APY</td>
            <td v-for="(apy, x) in mobileCoin.allCoins" :key="x">
              {{ apy.lendApy }}
            </td>
          </tr>

          <tr class="mb-4 __mobileCompare">
            <td class="w-2/5">Borrow APY</td>
            <td v-for="(apy, y) in mobileCoin.allCoins" :key="y">
              {{ apy.borrowApy }}
            </td>
          </tr>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      lending: true,
      borrowing: false,
      category: '',
      result: '',
      chooseCategory: [
        {
          code: 'DEX',
          id: 'Dex',
        },
        {
          code: 'HEX',
          id: 'Hex',
        },
        {
          code: 'DEX',
          id: 'Dex',
        },
        {
          code: 'HEX',
          id: 'Hex',
        },
      ],
      coin: false,
      allCoin: ['BTC', 'ETH', 'KCS'],

      value: 'Category',
      list: ['DEX', 'HEX', 'DEC'],
    }
  },
  computed: {
    allCentralisedCoins() {
      return this.$store.state.market.allCentralisedCoins
    },
    allDecentralisedCoins() {
      return this.$store.state.market.allDecentralisedCoins
    },
    allCoins() {
      return this.$store.state.market.coins
    },
    isvisible() {
      return this.$store.state.drop
    },
  },

  methods: {
    toggleLend() {
      this.lending = true
      this.borrowing = false
    },
    toggleBorrow() {
      this.lending = false
      this.borrowing = true
    },
    toggle(event, key) {
      event.stopPropagation()
      const t = this.$store.state.drop[key]
      this.$store.commit('drop/visibility', { value: !t, key })
    },
    select(option) {
      this.value = option
      if (this.value === option) {
        this.$store.commit('drop/visibility', false)
      }
    },
    showCoin() {
      this.coin = !this.coin
    },
    showResult(i) {
      this.result = i
    },
  },
}
</script>

<style scoped>
.__reduce {
  flex-wrap: wrap !important;
}
.dropdown-content {
  position: absolute;
  width: 100%;
  background: #1f2b4a;
  z-index: 1;
  top: 29px;
  left: 0px;
  border-radius: 3px;
}
.dropdown-content-two {
  position: absolute;
  width: 100%;
  background: #1f2b4a;
  z-index: 1;
  top: 54px;
  left: 0px;
  border-radius: 3px;
}
.dropdown-content ul li,
.dropdown-content-two ul li {
  float: none;
  color: white;
  font-family: 'Mulish';
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content ul li:hover,
.dropdown-content-two ul li:hover {
  background: #056237;
}
#mobile-green-btn {
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
#coinType {
  padding-right: 20px !important;
  padding-left: 20px !important;
}

.mobile-table {
  background: #0a132a;
  font-size: 14px !important;
  padding: 21px 24px;
  width: 100%;
  margin-bottom: 10px;
  /* overflow-x: scroll; */
}
::-webkit-scrollbar {
  display: none;
}
.coin_category-grid {
  width: 160px;
}
.__mobileCompare {
  height: 40px !important;
}
.__mobileCompare td {
  padding-right: 13px !important;
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
._category {
  background: #1f2b4a;
  border-radius: 2px;
  padding: 4px 8px;
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
  width: 80%;
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
@media screen and (max-width: 350px) {
  #mobile-green-btn {
    padding: 7px 3px !important;
  }
}
@media screen and (max-width: 430px) {
  #mobile-green-btn {
    font-size: 11px;
    line-height: 15px;
    /* width: 85px; */
  }
  .linknsearch-grid {
    display: block !important;
  }
  .search-box {
    margin-top: 16px !important;
  }
}
@media screen and (max-width: 768px) {
  #mobile-green-btn {
    padding: 7px 9px;
  }
  td,
  th {
    font-size: 14px !important;
  }

  .linknsearch-grid {
    /* display: grid; */
    /* flex-direction: flex; */
    grid-template-columns: 50% 50%;
    align-items: end;
    justify-items: baseline;
    margin-bottom: 44px;
  }

  .compare-filters {
    width: 30%;
  }
  .linknsearch-grid {
    justify-items: start;
  }
}

@media screen and (max-width: 1024px) {
  .search-box {
    width: 100%;
  }
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
    margin: 100px 24px 0 24px;
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