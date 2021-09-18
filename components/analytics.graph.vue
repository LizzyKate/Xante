<template>
  <div>
    <canvas id="analytics" class="mt-4 w-full p-4"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import analyticsData from '../public/analytics'

export default {
  data() {
    return {
      marketData: analyticsData,
    }
  },
  mounted() {
    const ctx = document.getElementById('analytics')
    ctx.style.backgroundColor = '#0A1227'
    ctx.style.borderRadius = '4px'
    // eslint-disable-next-line no-new
    new Chart(ctx, this.marketData)
  },
}
</script>

<style>
</style>