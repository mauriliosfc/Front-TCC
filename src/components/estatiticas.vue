<template>
  <div id="app">
    <div id="comboboxContatos">
      <v-combobox
        @change="setLanguage()"
        v-model="language"
        :items="languages"
        label="Language"
        :auto-select-first="true"
        v-on:change="onChange"
      ></v-combobox>
    </div>
    <v-app id="inspire">
      <v-container fluid>
        <div class="text-h6 mb-1">{{ text.estatisticas }}</div>
        <v-row justify="space-around">
          <v-col cols="5">
            <div class="subheading pt-4">{{ text.grafico }} 1</div>
            <v-img
              src="../assets/grupo1.jpeg"
            ></v-img>
            <div class="subheading pt-4">{{ text.grafico }} 3</div>
            <v-img
              src="../assets/grupo3.jpeg"
            ></v-img>
          </v-col>

          <v-col cols="5">
            <div class="subheading">{{ text.grafico }} 2</div>
            <v-img
              src="../assets/grupo2.jpeg"
              contain
            ></v-img>
            <div class="subheading pt-4">{{ text.grafico }} 4</div>
            <v-img
              src="../assets/grupo4.jpeg"
              contain
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      language: "",
      languages: ["Português", "English"],
      pt: {
        estatiticas: "ESTATÍSTICAS E DADOS",
        grafico: "Gráfico",
      },
      eng: {
        estatiticas: "STATISTICS AND DATA",
        grafico: "Graphic",
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
  },
};
</script>

<style>
</style>