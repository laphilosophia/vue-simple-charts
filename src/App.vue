<template>
  <div id="app">
    <canvas id="election"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import electionDatas from './static/chart-data'

export default {
  name: 'app',
  data () {
    return {
      electionDatas: electionDatas
    }
  },
  methods: {
    createChart (chartId, chartData) {
      const ctx = document.getElementById(chartId)
      const electionChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options
      })
    }
  },
  mounted () {
    this.createChart('election', this.electionDatas)
  }
}
</script>

<style lang="scss">

</style>
