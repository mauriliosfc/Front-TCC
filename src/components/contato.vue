<template>
  <div id="fundo">
    <div id="principal">
      <div id="esquerda">
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
        <p id="p1">
          <span id="span1">{{ text.titulo }}</span
          ><br /><br />
          Gustavo Maciel Pimenta -
          <a href="gustavomacielp432@gmail.com">gustavomacielp432@gmail.com</a>
          <br />
          Júlio César O. Mendes -
          <a href="juliocomendes92@gmail.com">juliocomendes92@gmail.com</a>
          <br />
          Maurilio B. Martins -
          <a href="mauriliosfc@gmail.com ">mauriliosfc@gmail.com </a>
          <br />
          Flávio Henrique Batista de Souza -
          <a href="flabasouza@yahoo.com.br">flabasouza@yahoo.com.br</a><br />
          Braulio RGM Couto -
          <a href="coutobraulio@hotmail.com">coutobraulio@hotmail.com</a><br />
        </p>
      </div>
      <div id="traco"></div>
      <div id="direita">
        <img
          id="img1"
          src="../assets/Logo_Grupo_Transp_Grande.png"
          alt="NOIS"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      language: 'English',
      languages: ['Português', 'English'],
      pt: {
        titulo: 'PROJETO ISC E-MAILS PARA CONTATO:',
      },
      eng: {
        titulo: 'ISC PROJECT CONTACT EMAILS:',
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
#fundo {
  position: relative;
  background-image: url(../assets/celebro.png);
  background-size: cover;
  widows: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
#principal {
  background-color: rgb(219, 226, 255);
  width: 90%;
  height: 90%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
#esquerda {
  position: relative;
  float: left;
  width: 45%;
  height: 90%;
  margin: 10px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
#direita {
  position: relative;
  float: right;
  width: 45%;
  height: 90%;
  margin: 10px;
}
#traco {
  height: 570px; /*Altura da linha*/
  border-left: 2px solid black;
  display: flex;
  display: block;
  margin: 0 auto;
  opacity: 0.2;
}
#img1 {
  position: relative;
  opacity: 0.4;
  top: 50%;
  transform: translateY(-50%);
}
#p1 {
  font-family: "Courier New", Courier, monospace;
  font-size: 14px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  color: rgb(41, 41, 41);
}
#span1 {
  font-family: "Courier New", Courier, monospace;
  font-size: 25px;
  color: rgb(41, 41, 41);
}
#comboboxContatos {
  width: 110px;
  height: 50px;
}
</style>