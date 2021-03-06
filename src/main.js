import Vue from 'vue'
import vuetify from './plugins/vuetify';
import router from './router'
import App from './App.vue'
import * as firebase from "firebase";
import store from "./store";
import VueAWN from "vue-awesome-notifications"
import VueHorizontalTimeline from "vue-horizontal-timeline";

Vue.use(VueHorizontalTimeline);

let options = {
  labels: {
    success: "Sucesso",
    warning: "Aviso",
    alert: "Erro",
    info: "Info",
    confirm: "É necessário confirmar"
  },
  modal: {
    confirm: "É necessário confirmar",
    okLabel: "Sim",
    cancelLabel: "Não"
  },
  position: "top-right",
  animationDuration: 200,
  maxNotifications: 5
}

Vue.use(VueAWN, options);

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

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
