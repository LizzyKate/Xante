<template>
  <div>
    <h2 class="ma-headers lg:mb-12 mb-6 lg:mt-20 mt-16 lg:mx-0 mx-6">
      Top 10 Liquidity Provisers
    </h2>
    <div class="">
      <table class="top10">
        <tr>
          <th>Name</th>
          <th>Rates</th>
        </tr>
        <tbody>
          <tr>
            <td class="flex items-center lg:gap-3 gap-8">
              <img
                class="lg:w-auto w-10 lg:w-auto h-10"
                src="~/assets/images/Group 30 (3).png"
                alt=""
              />
              Provider name
            </td>
            <td>12%</td>
          </tr>
          <tr>
            <td class="flex items-center lg:gap-3 gap-8">
              <img
                class="lg:w-auto w-10 lg:w-auto h-10"
                src="~/assets/images/Group 30 (4).png"
                alt=""
              />
              Provider name
            </td>
            <td>12%</td>
          </tr>
          <tr>
            <td class="flex items-center lg:gap-3 gap-8">
              <img
                class="lg:w-auto w-10 lg:w-auto h-10"
                src="~/assets/images/Group 30 (5).png"
                alt=""
              />
              Provider name
            </td>
            <td>13%</td>
          </tr>
          <tr>
            <td class="flex items-center lg:gap-3 gap-8">
              <img
                class="lg:w-auto w-10 lg:w-auto h-10"
                src="~/assets/images/Group 30 (3).png"
                alt=""
              />
              Provider name
            </td>
            <td>14%</td>
          </tr>
          <tr>
            <td class="flex items-center lg:gap-3 gap-8">
              <img
                class="lg:w-auto w-10 lg:w-auto h-10"
                src="~/assets/images/Group 30 (4).png"
                alt=""
              />
              Provider name
            </td>
            <td>18%</td>
          </tr>
        </tbody>
      </table>
      <div class="w-full text-center lg:block hidden">
        <button class="show-btn font-semi-bold lg:p-9 p-2">Show All</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Top10",
};
</script>

<style scoped>
.top10 td,
th {
  padding-top: 27.5px;
  padding-bottom: 27.5px;
  padding-left: 66px;
}

@media screen and (max-width: 768px) {
  td,
  th {
    padding-top: 28px !important;
    padding-bottom: 28px !important;
    padding-left: 25px !important;
    font-size: 12px;
  }
}
</style>