<template>
  <div id="geral">
    <div id="painel">
      <img src="../assets/nois.png" alt="NOIS" />
      <h1>BEM VINDO, NOIS É FODA</h1>
      <!--<img v-bind:src="foto.url" v-bind:alt="foto.titulo">-->
    </div>
    <div id="meio"> 
      <div id="buttongeral">
        <br><br>br
        <v-card
          class="mx-auto"
          max-width="700"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">
                App
              </div>
              <v-list-item-title class="headline mb-1">
                Infection Predict
              </v-list-item-title>
              <v-list-item-subtitle>Infection Predict</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar
              tile
              size="80"
              color="grey"
            ></v-list-item-avatar>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item three-line>
            <v-list-item-content>    
              <div class="overline mb-4">
                <b>Artigo científico:</b> PATTERN RECOGNITION ALGORITHMS FOR THE SURVEY OF CRITICAL PROBABILITY OF INFECTION IN SURGICAL SITES
                <br><b>Congresso: Decennial 2020</b>
                <br><b>ANO:</b> 2020  
              </div>
            </v-list-item-content>
          </v-list-item>

          <v-card-actions>
            <v-btn
              outlined
              rounded
              text
            >
              Artigo científico
            </v-btn>
            <v-btn
              outlined
              rounded
              text
            >
              Baixe agora
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </div>
    <div id="rodape">
      <div class="imagem1">
        <img src="../assets/n.png" alt="NOIS" />
      </div>
      <div class="copyright">
        Copyright© 2021 Nois, Todos os direitos reservados.
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Apps",
}
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
  background: rgb(51, 51, 51);
  position: absolute;
  bottom: 0;
  box-shadow: 0px 0px 1px rgb(95, 95, 95);
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