<template>
  <v-dialog v-model="dialog" width="70%">
    <v-card class="elevation-12">
      <v-toolbar color="primary" dark flat>
        <v-toolbar-title class="flex text-center"> Result </v-toolbar-title>              
      </v-toolbar>
      <v-card-text>
        <br>
        <h2 style="color: black;"> Based on the analysis of the algorithm, the risk of a surgical infection for this patient is {{ data }} % .</h2>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn  color="red darken-2" class="mr-4" @click="closeWindow()">Close</v-btn>        
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "App",  
  data() {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [["index", "value"]],
      data: null,
      chartOptions: {
        hAxis: { title: "AXIS Y", titleTextStyle: { color: "#333" } },
        vAxis: { title: "AXIS X", titleTextStyle: { color: "#333" } },
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
      type: Number,
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
      this.data = (this.dado * 100).toFixed(2);
      console.log(this.data);
    },
    closeWindow() {
      this.dialog = false;
      location.reload();
    }
  }  
};
</script>
