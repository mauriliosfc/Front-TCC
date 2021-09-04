<template>
  <div id="geral">
    <div id="painel">
      <div id="combobox">
       <v-combobox @change="setLanguage()" 
          v-model='language'
          :items='languages'
          label='Language'
          :auto-select-first='true'
          v-on:change='onChange'
        ></v-combobox>
      </div>    
      <img src="../assets/nois.png" alt="NOIS" />
      <h1>{{text.welcome}}</h1>
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
                Direciona SUS
              </v-list-item-title>
              <v-list-item-subtitle>Direciona SUS</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar
              tile
              size="80"
              color="grey"
            ><img src="../assets/direcionaSus.png" alt="John"></v-list-item-avatar>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item three-line>
            <v-list-item-content>    
              <div class="overline mb-4">
                <b>{{text.article}}:</b> {{text.descricao}}
                <br><b>{{text.revista}}: Diamond Scientific Publishing</b>
                <br><b>{{text.year}}:</b> 2021  
                <br><b>DOi:</b><a href="https://doi.org/10.1093/ofid/ofaa439.1068" target="_blank">https://doi.org/10.1093/ofid/ofaa439.1068</a>
              </div>
            </v-list-item-content>
          </v-list-item>

          <v-card-actions>
            <v-btn
              outlined
              rounded
              text
              href="https://www.dpublication.com/abstract-of-11th-restconf/19-119"
              target="_blank"
            >
              {{ text.artigo }}
            </v-btn>
            <v-btn
              outlined
              rounded
              text
              href="https://play.google.com/store/apps/details?id=br.com.example.aplicativosus&hl=pt"
              target="_blank"
            >
              {{ text.download }}
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
        <span>{{ text.copyright }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Apps",
  beforeMount(){    
    this.setStorage();
    this.setLanguage();
  },
  data() {
    return {
      language: '',
      languages: [        
        'Portuguese',
        'English'
      ],      
      pt : { 
        article: 'Artigo científico',
        revista: 'JORNAL',
        year: 'ANO',
        welcome: 'BEM-VINDO AO GRUPO NOIS',
        descricao: "O Direciona SUS é um aplicativo destinado ao auxílio de pacientes direcionando-os aos serviços de atendimento do SUS de acordo com seus sintomas.",
        download: 'BAIXE AGORA',
        artigo: 'ARTIGO CIENTÍFICO',
        copyright: "Copyright© 2021 Nois, Todos os direitos reservados."
      }, 
      eng : { 
        article: 'Scientific article',
        revista: 'JOURNA',
        year: 'Year',
        welcome: 'WELCOME TO GROUP NOIS',
        descricao: "DIRECIONA SUS IS AN APPLICATION DESIGNED TO HELP PATIENTS BY DIRECTING THEM TO SUS CARE SERVICES ACCORDING TO THEIR SYMPTOMS.",
        download: 'DOWNLOAD',
        artigo: 'SCIENTIFIC ARTICLE',
        copyright: "Copyright © 2021 Nois, All rights reserved."
      },      
      text: {},
    }
  },
  methods: {    
    setStorage() {
      if(sessionStorage.getItem('language') == null){
        sessionStorage.setItem('language', 'English');        
      }
      this.language = sessionStorage.getItem('language');
    },
    setLanguage() {
      sessionStorage.setItem('language', this.language);            
      if(sessionStorage.getItem('language') == "English"){
        this.text = this.eng;
      }else{
        this.text = this.pt;
      }
    },
  }
}
</script>

<style>
template {
  background: red;
}
h1 {
  color: #3072b9;
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
#combobox{
  width: 110px;
  height: 50px;
  position: absolute;
  right: 0 px;
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