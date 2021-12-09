<template>
  <v-dialog v-model="dialog" width="70%">
    <v-container  v-if="chartData.length>5">
      <GChart type="LineChart" :data="chartData" :options="chartOptions"/>
    </v-container>
  </v-dialog>
</template>

<script>
import { GChart } from "vue-google-charts";
export default {
  name: "App",
  components: {
    GChart,
  },
  data() {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [["index", "value"]],
      chartOptions: {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017",
        },
      },
    };
  },
  watch: {
    dialog: function () {
      this.getDados();
    },
  },
  props: {
    dado: {
      type: Array,
      required: true,
      // default: 'Lucas'
    },
    dialog: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    getDados() {
      this.chartData = [["index", "value"]];
      for (let index = 0; index < this.dado.length; index++) {
        this.chartData.push([index, parseFloat(this.dado[index]*100)]);
      }
    },
  },
};
</script>
