<template>
    <div class="">
        <table id="coin_table" class="mt-4 w-full">
            <tr>
                <th>Platform</th>
                <th>Category</th>
                <th>Locked Value</th>
                <th>Lend APY</th>
                <th>Borrow APY</th>
                <th>Lend APY</th>
                <th>Borrow APY</th>
                <th></th>
            </tr>

            <tbody>
            <tr class="">
                <td>
                    <img src="~/assets/images/Aave.png" alt="">
                    Aave</td>
                <td class="coin_category-grid">
                    <div class="coin-category">DEX</div>
                    <div class="coin-category">AMM</div>
                    <div class="coin-category col-span-2">Synthetic Assets</div>
                </td>
                <td>$10.30</td>
                <td>$23.5%</td>
                <td>$23.5%</td>
                <td>$23.5%</td>
                <td>$23.5%</td>
                <td><LGreenBtn /></td>
            </tr>

            <tr class="">
                <td>
                    <img src="~/assets/images/Binance.png" alt="">
                    Binance</td>
                <td class="coin_category-grid">
                    <div class="coin-category">DEX</div>
                </td>
                <td>$10.30</td>
                <td>$23.5%</td>
                <td>$23.5%</td>
                <td>$23.5%</td>
                <td>$23.5%</td>
                <td><LGreenBtn /></td>
            </tr>

             <tr class="">
                <td>
                    <img src="~/assets/images/Compound.png" alt="">
                    Compound</td>
                <td class="coin_category-grid">
                    <div class="coin-category">DEX</div>
                    <div class="coin-category">DEX</div>
                </td>
                <td>$10.30</td>
                <td>$23.5%</td>
                <td>$23.5%</td>
                <td>$23.5%</td>
                <td>$23.5%</td>
                <td><LGreenBtn /></td>
            </tr>


             <tr class="">
                <td>
                    <img src="~/assets/images/Binance.png" alt="">
                    Binance</td>
                <td class="coin_category-grid">
                    <div class="coin-category">DEX</div>
                    <div class="coin-category">AMM</div>
                    <div class="coin-category col-span-2">Synthetic Assets</div>
                </td>
                <td>$10.30</td>
                <td>$23.5%</td>
                <td>$23.5%</td>
                <td>$23.5%</td>
                <td>$23.5%</td>
                <td><LGreenBtn /></td>
            </tr>

            <tr class="">
                <td>
                    <img src="~/assets/images/Aave.png" alt="">
                    Aave</td>
                <td class="coin_category-grid">
                    <div class="coin-category">DEX</div>
                </td>
                <td>$10.30</td>
                <td>$23.5%</td>
                <td>$23.5%</td>
                <td>$23.5%</td>
                <td>$23.5%</td>
                <td><LGreenBtn /></td>
            </tr>
            </tbody>
        </table>

         <div class="w-full text-center">
            <button class="show-btn font-semi-bold p-9">Show All</button>
        </div>
    </div>
</template>

<script>
import LGreenBtn from '../Buttons/LGreenBtn.vue'

export default {
  components: {LGreenBtn  },
    name: 'Coins'

}
</script>

<style scoped>

td,
th {
   /* padding: 18px 33px; */
   padding: 19px 20px;
}

</style>