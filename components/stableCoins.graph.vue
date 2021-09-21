<template>
  <div>
    <canvas id="coins" class="mt-4 w-full p-4"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import coinsData from '../public/stable.coins'

export default {
  data() {
    return {
      coinsData,
    }
  },
  mounted() {
    const ctx = document.getElementById('coins')
    ctx.style.backgroundColor = '#0A1227'
    ctx.style.borderRadius = '4px'
    ctx.style.width = '100%'
    // eslint-disable-next-line no-new
    new Chart(ctx, this.coinsData)
  },
}
</script>

<style>
</style>