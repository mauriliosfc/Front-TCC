<template>
  <div id="geral">
    <div id="painel">
      <div id="combobox">
        <v-combobox
          @change="setLanguage()"
          v-model="language"
          :items="languages"
          label="Language"
          :auto-select-first="true"
          v-on:change="onChange"
        ></v-combobox>
      </div>
      <img src="../assets/nois.png" alt="NOIS" />
      <h1>{{ text.welcome }}</h1>
      <!--<img v-bind:src="foto.url" v-bind:alt="foto.titulo">-->
    </div>
    <div id="meio">
      <div id="buttongeral">
        <button @click="goTuDescription" class="button1">
          <span>{{ text.tools }}</span>
        </button>
        <button @click="goToApps" class="button2">
          <span>{{ text.app }}</span>
        </button>
      </div>
    </div>
    <div id="rodape">
      <div class="imagem1">
        <img src="../assets/n.png" alt="NOIS" />
      </div>
      <div class="copyright">
        <span>{{ text.copyright }}</span>
      </div>
    </div>
  </div>
</template>
var store = require('store')
<script>
export default {
  data() {
    return {
      language: "",
      languages: ["Português", "English"],
      pt: {
        tools: "FERRAMENTA ISC",
        app: "APLICATIVOS CIENTIFICOS",
        welcome: "BEM-VINDO AO GRUPO NOIS",
        copyright: "Copyright© 2021 Nois, Todos os direitos reservados.",
      },
      eng: {
        tools: "ISS APPLICATION",
        app: "SCIENTIFIC APPLICATIONS",
        welcome: "WELCOME TO THE NOIS GROUP",
        copyright: "Copyright © 2021 Nois, All rights reserved.",
      },
      text: {},
    };
  },
  beforeMount() {
    this.setStorage();
    this.setLanguage();
  },
  methods: {
    setStorage() {
      if (sessionStorage.getItem("language") == null) {
        sessionStorage.setItem("language", "English");
      }
      this.language = sessionStorage.getItem("language");
    },
    setLanguage() {
      sessionStorage.setItem("language", this.language);
      if (sessionStorage.getItem("language") == "English") {
        this.text = this.eng;
      } else {
        this.text = this.pt;
      }
    },
    goTuDescription() {
      this.$router.replace({
        name: "descricao",
      });
    },
    goToApps() {
      this.$router.replace({
        name: "apps",
      });
    },
  },
};
</script>

<style>
template {
  background: red;
}
h1 {
  color: #3072b9;
}
#painel {
  width: 100%;
  height: 13 130px;
  background: white;
  box-shadow: 0px 0.1px 5px rgb(95, 95, 95);
  position: absolute;
}
#combobox {
  width: 110px;
  height: 35px;
  position: absolute;
  right: 0 px;
}
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
h1 {
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
.meio {
  position: absolute;
  background: #426d9b;
}

#buttongeral {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.button1 {
  background-color: #68e764;
  width: 450px;
  height: 250px;
  border-radius: 5px;
  opacity: 1;
  float: right;
  margin: 10px;
  font-size: 2em;
  color: #fff;
  background-color: #68e764;
  border-bottom: 2px solid #68e764;
  opacity: 0.8;
  filter: alpha(opacity=90);
}
.button2 {
  width: 450px;
  height: 250px;
  border-radius: 5px;
  float: right;
  margin: 10px;
  font-size: 2em;
  color: #fff;
  position: relative;
  overflow: hidden;
  background-color: #3498db;
  border-bottom: 2px solid #3498db;
  /*Below are two new line which enable opacity*/
  opacity: 0.8;
  filter: alpha(opacity=90);
}

#geral {
  position: relative;
  background-image: url(../assets/celebro.png);
  background-size: cover;
}
#rodape {
  width: 100%;
  background: #424242;
  bottom: 0;
  box-shadow: 0px 0px 1px rgb(95, 95, 95);
  position: fixed;
  z-index: 9999;
}
a {
  margin: 10px;
}
a:link {
  color: green;
  text-decoration: none;
}
.imagem1 {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 05px;
}
.copyright {
  text-align: center;
  color: white;
  font-size: 10px;
}
</style>