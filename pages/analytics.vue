<template>
  <section>
    <div class="lg:mt-44 mt-11">
      <analytics-table-vue />
    </div>
    <div class="lg:mt-44 mt-11">
      <stable-coins-table-vue />
    </div>
    <div id="ma_tops" class="w-full">
      <div class="lg:w-1/2 w-full">
        <top-10-vue />
      </div>

      <div class="lg:w-1/2 w-full">
        <top-20-vue />
      </div>
    </div>
    <div class="lg:mb-12 mb-4 lg:mt-28 mt-8">
      <compare-metrics-table-vue />
    </div>
    <div class="wrapper lg:block hidden">
      <coins-vue />
    </div>
    <div class="marketCoinPrice-sect lg:mt-28 mt-12">
      <coin-price-vue />
    </div>
    <div class="wrapper mb-12">
      <div class="rect_14 mt-24">
        <div class="bg_11">
          <img src="/images/Group 11.png" alt="" />
        </div>
        <div>
          <h5>
            Get access to<br />
            deeper market insight<br />
            when you join us
          </h5>
          <nuxt-link to="/Contact_Us">
            <d-green-btn-vue class="mt-6" text="Join Now" />
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DGreenBtnVue from "~/components/Buttons/DGreenBtn.vue";

import AnalyticsTableVue from "~/components/Tables/AnalyticsTable.vue";
import CoinPriceVue from "~/components/Tables/CoinPrice.vue";
import CoinsVue from "~/components/Tables/Coins.vue";
import CompareMetricsTableVue from "~/components/Tables/CompareMetricsTable.vue";
import StableCoinsTableVue from "~/components/Tables/StableCoinsTable.vue";
import Top10Vue from "~/components/Tables/Top10.vue";
import Top20Vue from "~/components/Tables/Top20.vue";

export default {
  components: {
    AnalyticsTableVue,
    StableCoinsTableVue,
    Top10Vue,
    Top20Vue,
    CompareMetricsTableVue,
    CoinsVue,
    CoinPriceVue,
    DGreenBtnVue,
  },
};
</script>

<style scoped>
#market-view {
  margin-top: 150px !important;
  margin-bottom: 130px !important;
}

table {
  margin-top: 2px;
}

.bg_11 {
  height: 273px;
  width: 326px;
  border-radius: 10px;
  background: #151f38;
  padding: 27px 30px;
  margin-right: 345px;
}

.rect_14 {
  width: 100%;
  height: 352px;
  padding: 39px 66px;
  background: #0a132b;
  display: flex;
  align-items: center;
}

#ma_tops {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 32px;
  padding: 0px 68px;
}

.stable-coin-table td,
th {
  padding: 16px 66px;
}

@media screen and (max-width: 1024px) {
  #ma_tops {
    padding: 0 24px;
    gap: 32px;
  }
}

@media screen and (max-width: 768px) {
  #ma_tops {
    display: block;
    padding: 0;
    gap: 0px;
  }

  .rect_14 {
    display: none;
  }
}
</style>