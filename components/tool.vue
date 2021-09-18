<template>
  <div class="mt-20 lg:ml-56 ml-6 lg:mr-4 mr-6 pt-20">
    <h2 class="inter-h2 mb-8">APY Calculator</h2>
    <div class="apycalBox">
      <div class="md:flex hidden items-center gap-4 mb-20">
        <button
          :class="value === 'ETH' ? 'active' : ''"
          class="coin-frame flex items-center gap-2"
          @click="select('ETH')"
        >
          <img src="/images/eth.png" alt="" />
          <span class="text-sm">ETH</span>
        </button>
        <button
          :class="value === 'BTC' ? 'active' : ''"
          class="coin-frame flex items-center gap-2"
          @click="select('BTC')"
        >
          <img src="/images/btc.png" alt="" />
          <span class="text-sm">BTC</span>
        </button>
        <button
          class="coin-frame flex items-center gap-2"
          :class="value === 'KCS' ? 'active' : ''"
          @click="select('KCS')"
        >
          <img src="/images/kcs.png" alt="" />
          <span class="text-sm">KCS</span>
        </button>
      </div>

      <div class="flex md:flex-row flex-col items-center">
        <form class="">
          <div class="md:px-0 px-4 py-4 flex flex-col items-start gap-2">
            <label for="amount">Amount</label>
            <div class="apyInput flex items-center">
              <select
                id=""
                v-model="currency"
                class="
                  inter
                  bg-transparent
                  focus:outline-none
                  mr-6
                  cursor-pointer
                "
                name=""
              >
                <option selected value disabled>Currency</option>
                <option
                  v-for="(name, i) in money"
                  :key="i"
                  :value="name.id"
                  class="INTER"
                >
                  {{ name.currency }}
                </option>
              </select>

              <input
                class="bg-transparent focus:outline-none"
                type="text"
                placeholder="Enter Amount"
              />
            </div>

            <label class="mt-5" for="duration">Duration</label>
            <div class="apyInput">
              <select
                id=""
                v-model="day"
                class="
                  inter
                  bg-transparent
                  focus:outline-none
                  mr-6
                  cursor-pointer
                "
                name=""
              >
                <option selected value disabled>Day</option>
                <option
                  v-for="(no, b) in days"
                  :key="b"
                  :value="no.id"
                  class="INTER"
                >
                  {{ no.number }}
                </option>
              </select>
              <input
                v-model="day"
                class="bg-transparent focus:outline-none"
                type="text"
                placeholder=""
              />
            </div>

            <!-- <div class="apyInput mt-10">
              <select
                class="inter bg-transparent focus:outline-none mr-6"
                name=""
                id=""
              >
                <option class="inter" value="day">Day</option>
              </select>
            </div> -->
          </div>
          <button id="calculate" class="mt-3">Calculate</button>
        </form>

        <div class="vert-rect mx-20 md:block hidden"></div>

        <div class="text-center md:mt-0 mt-8">
          <span class="font-semi-bold text-xl sharp-sans">APY calculator</span>
          <hr
            class="mt-4 mb-6"
            style="border: 1px solid #1f2b4a; height: 1px; width: 230px"
          />
          <div
            class="
              flex
              md:flex-col
              flex-row
              md:items-center
              items-start
              justify-center
              md:my-14
            "
          >
            <div class="md:mr-0 mr-5">
              <p class="mb-5">10% APY on ETH</p>
              <p>10% APY on ETH</p>
            </div>
            <div>
              <p>You’ll earn</p>
              <h3 class="mt-2 font-semibold">USD12,000</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currency: '',
      money: [
        {
          currency: 'USD ',
          id: 'USD ',
        },
        {
          currency: 'Naira ',
          id: 'Naira',
        },
        {
          currency: 'Kobo ',
          id: 'Kobo',
        },
      ],
      day: '',
      days: [
        {
          number: 1,
          id: 1,
        },
        {
          number: 2,
          id: 2,
        },
        {
          number: 3,
          id: 3,
        },
        {
          number: 4,
          id: 4,
        },
      ],

      value: 'ETH',
    }
  },
  mounted() {},
  methods: {
    select(coin) {
      console.log(coin)
      this.value = coin
    },
  },
}
</script>

<style>
#calculate {
  width: 100%;

  background: #056237;
  border-radius: 4px;
  padding: 8px 16px;
}
#tools-view {
  /* width: 100%; */
  background: #151f38;
}

.apycalBox {
  height: 542px;
  width: 892px;
  margin-bottom: 204px;
  border-radius: 4px;
  background: #0a1227;
  padding: 32px 85px;
}

.coin-frame {
  height: 40px;
  width: 76px;
  border-radius: 2px;
  padding: 8px;
}

.coin-frame.active {
  background: #1f2b4a;
}

.apyInput {
  height: 44px;
  width: 317px;
  border-radius: 4px;
  background: #1f2b4a;
  padding: 12.5px 10px;
}

.vert-rect {
  height: 270px;
  width: 1px;
  background: #1f2b4a;
}

@media screen and (max-width: 768px) {
}

@media screen and (max-width: 500px) {
  .apycalBox {
    height: auto;
    width: 100%;
    padding: 20px 15px;
  }
}
</style>