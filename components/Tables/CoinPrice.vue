<template>
    <div>
    <div class="wrapper">
        <h2 class="ma-headers font-medium lg:mb-0 mb-28">Coin Price</h2>
        <p class="px-4 py-4 my-7 w-24 rounded lg:block hidden" style="background: #281e5d">
            BTC
        </p>
    </div>

    <div class="wrapper lg:block hidden">
        <table class="">
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Market Cap</th>
                <th>Last 7d</th>
            </tr>

            <tr class="border-b border-gray-700">
                <td class="flex items-center gap-3">
                    <img src="./images/Group 30.png" alt="">
                    Tether</td>
                <td>Bsc</td>
                <td>$15.0 B</td>
                <td>$15.0 B</td>
            </tr>

            <tr class="border-b border-gray-700">
                <td class="flex items-center gap-3">
                    <img class="" src="./images/Group 30 (1).png" alt="">
                    USD Coin</td>
                <td>Bsc</td>
                <td>$15.0 B</td>
                <td>$15.0 B</td>
            </tr>

            <tr class="border-b border-gray-700">
                <td class="flex items-center gap-3">
                    <img src="./images/Group 30 (2).png" alt="">
                    Binance USD</td>
                <td>Bsc</td>
                <td>$15.0 B</td>
                <td>$15.0 B</td>
            </tr>
        </table>
        <div class="w-full text-center">
            <button class="show-btn font-semi-bold p-9">Show All</button>
        </div>
    </div>


    <graph class="lg:hidden block"></graph>
  </div>
</template>

<script>
import Graph from '../Graph.vue'
export default {
  components: { Graph },

}
</script>

<style scoped>
    th,td {
        padding-left: 66px;
        padding-top: 16px;
        padding-bottom: 16px;
        }

</style>