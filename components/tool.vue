<template>
  <div class="mt-20 lg:ml-56 ml-6 lg:mr-4 mr-6 pt-20">
    <h2 class="inter-h2 mb-8">APY Calculator</h2>
    <div class="apycalBox">
      <div class="md:flex hidden items-center gap-4 mb-20">
        <div class="coin-frame active flex items-center gap-2">
          <img src="../assets/images/eth.png" alt="" />
          <p class="text-sm">ETH</p>
        </div>
        <div class="coin-frame flex items-center gap-2">
          <img src="../assets/images/btc.png" alt="" />
          <p class="text-sm">BTC</p>
        </div>
        <div class="coin-frame flex items-center gap-2">
          <img src="../assets/images/kcs.png" alt="" />
          <p class="text-sm">KCS</p>
        </div>
      </div>

      <div class="flex md:flex-row flex-col items-center">
        <form class="">
          <div class="md:px-0 px-4 py-4 flex flex-col items-start gap-2">
            <label for="amount">Amount</label>
            <div class="apyInput flex items-center">
              <select
                class="inter bg-transparent focus:outline-none mr-6"
                name=""
                id=""
              >
                <option class="inter" value="USD">USD</option>
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
                class="inter bg-transparent focus:outline-none mr-6"
                name=""
                id=""
              >
                <option class="inter" value="day">Day</option>
              </select>
            </div>

            <div class="apyInput mt-10">
              <select
                class="inter bg-transparent focus:outline-none mr-6"
                name=""
                id=""
              >
                <option class="inter" value="day">Day</option>
              </select>
            </div>
          </div>
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
export default {};
</script>

<style>
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
  padding: 12.5px 20px;
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