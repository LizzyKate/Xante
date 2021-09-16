<template>
  <div>
    <h2 class="wrapper font-medium ma-headers">Compare coins</h2>
    <div class="wrapper mt-12">
      <table id="ma_table06" class="mb-24 lg:table hidden">
        <tr>
          <td rowspan="2" class="inter">
            <h5>
              Compare coins different <br />
              coins using varieties of <br />
              metrics
            </h5>
          </td>
          <td>
            <img class="w-12 h-12" src="/images/Group 30 (1).png" alt="" />
          </td>
          <td>
            <img class="w-12 h-12" src="/images/Group 30.png" alt="" />
          </td>
        </tr>
        <tr>
          <td>Bitcoin</td>
          <td>Ethereum</td>
        </tr>
        <tr>
          <td>
            <NuxtLink to="/metrics">
              <DGreenBtn text="Compare" />
            </NuxtLink>
          </td>
          <td>$15.0.B</td>
          <td>$15.0.B</td>
        </tr>
      </table>
    </div>

    <!-- ******************MOBILE ***************** -->

    <div class="mobile-cm-table lg:hidden block mb-24">
      <p class="text-sm mb-7">
        Compare coins different<br />
        coins using varieties of <br />
        metrics
      </p>

      <NuxtLink to="/metrics">
        <DGreenBtn text="Compare" />
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import DGreenBtn from "../Buttons/DGreenBtn.vue";
export default {
  name: "CompareMetricsTable",
  components: { DGreenBtn },
};
</script>

<style scoped>
#ma_table06 td {
  padding-left: 107px;
}
#ma_table06 tr {
  border: none;
}

.mobile-cm-table {
  /* width: 383px; */
  height: 364px;
  background: #0a132a;
  padding: 92px 32px;
}

@media screen and (max-width: 540px) {
  h2 {
    font-size: 18px;
  }
}
</style>