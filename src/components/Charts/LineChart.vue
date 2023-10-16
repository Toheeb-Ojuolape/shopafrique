<template>
  <v-card flat>
    <div class="d-flex justify-space-between">
      <h2>{{ title }}</h2>
    </div>
    <v-container>
      <line-chart :chart-data="datacollection" :options="options"></line-chart>
    </v-container>
  </v-card>
</template>

<script>
import LineChart from "./LineChart.js";
export default {
  name: "ChartComponent",
  components: {
    LineChart,
  },
  data() {
    return {
      chartOptions: {
        responsive: true,
        legend: {
          display: false,
        },
        tooltips: {
          titleFontSize: 20,
          bodyFontSize: 25,
        },
        scales: {
          xAxes: [],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
      },
    };
  },
  props: {
    title: {
      type: String,
    },
    datacollection: {
      type: [Object, Array],
    },
  },
};
</script>



<style scoped>
.chartStyle {
  border-radius: 8px;
  margin: 60px 40px 0px 0px;
}
</style>