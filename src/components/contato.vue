<template>
  <div id="fundo">
    <div class="menu-container">
      <v-switch v-model="model" hide-details true-value="Português" false-value="English" class="ml-3" style="position: absolute; top: 0; right: 0; margin-right: 35px;">
          <template #label>
            <span >{{ model }}</span>
          </template>
        </v-switch>

      <menu-horizontal></menu-horizontal>
    </div>
    <div id="principal">
      <div id="esquerda">
        <p id="p1">
          <span id="span1">{{ titulo }}</span><br /><br />
          <!--Gustavo Maciel Pimenta-->
          G. M. Pimenta -
          <a href="gustavomacielp432@gmail.com">gustavomacielp432@gmail.com</a>
          <br />
          <!--Júlio César O. Mendes-->
          J. C. O. Mendes -
          <a href="juliocomendes92@gmail.com">juliocomendes92@gmail.com</a>
          <br />
          <!--Maurilio B. Martins - -->
          M. B. Martins -
          <a href="mauriliosfc@gmail.com ">mauriliosfc@gmail.com </a>
          <br />
          <!--Flávio Henrique Batista de Souza - -->
          F. H. B. Souza -
          <a href="flabasouza@yahoo.com.br">flabasouza@yahoo.com.br</a><br />
          <!-- Braulio RGM Couto - -->
          B. R. Couto -
          <a href="coutobraulio@hotmail.com">coutobraulio@hotmail.com</a><br />
        </p>
      </div>
      <div id="traco"></div>
      <div id="direita">
        <img id="img1" src="../assets/Logo_Grupo_Transp_Grande.png" alt="NOIS" />
      </div>
    </div>
  </div>
</template>

<script>
import MenuHorizontal from './MenuHorizontal.vue';
export default {
  components: {
    MenuHorizontal
  },
  data() {
    return {
      model: 'English',
    };
  },
  computed: {
    titulo() {
      return this.model === 'Português' ? 'PROJETO ISC E-MAILS PARA CONTATO:' : 'NOIS ISS PROJECT CONTACT EMAILS:';
    },
  },
};
</script>

<style>
#fundo {
  position: relative;
  background-size: cover;
  widows: 100vh;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, #61d3db, #4a8df1);
}

#principal {
  margin-top: 50px;
  width: 100%;
  height: 100%;
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
  height: 570px;
  /*Altura da linha*/
  border-left: 2px solid rgb(255, 255, 255);
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
  color: rgb(255, 255, 255);
}

#comboboxContatos {
  width: 110px;
  height: 50px;
}

a {
  color: white;
}
</style>