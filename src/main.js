import Vue from 'vue'
import vuetify from './plugins/vuetify';
import router from './router'
import App from './App.vue'
import * as firebase from "firebase";


Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyAiidAoYhftBa2S5Rj4tqP5UOO2bbR9GfM",
  authDomain: "infectionprediction.firebaseapp.com",
  databaseURL: "https://infectionprediction.firebaseio.com",
  projectId: "infectionprediction",
  storageBucket: "infectionprediction.appspot.com",
  messagingSenderId: "1088378245091",
  appId: "1:1088378245091:web:5ee65a500a98e085581ad6",
  measurementId: "G-66Q4SCE0MV"
};

firebase.initializeApp(firebaseConfig)

new Vue({
  vuetify,
  router,
  firebase,
  render: h => h(App)
}).$mount('#app')
