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
      <div id="logo">
        <img src="../assets/nois.png" alt="NOIS" />
        <h1>{{ text.welcome }}</h1>
      </div>
      <div id="btnmenu">
        <button @click="goTuLogin" class="btnLogin">
        <span class="pisca">LOGIN<br> Access the Application</span>
        </button>
        <button @click="goTuDescription" class="btartigo1">
          <span>{{ text.artigos }}</span>
        </button>
        <button @click="goTuContato" class="btcontatos">
          <span>{{ text.contatos }}</span>
        </button>
        <button @click="goTuEstatiticas" class="btestatiticas">
          <span>{{ text.estatisticas }}</span>
        </button>
      </div>
      <!--<img v-bind:src="foto.url" v-bind:alt="foto.titulo">-->
    </div>
    <div id="meio">
      <div id="conteudo">
        <div class="coluna1">
          <h1>{{ text.titulo2 }}</h1>
          <p>
            {{ text.texto2 }}
          </p>
        </div>
        <div class="coluna2">
          <h1>{{ text.titulo1 }}</h1>
          <p>
            {{ text.texto1 }}
          </p>
        </div>
        <div class="coluna3">
          <h1>{{ text.titulo3 }}</h1>
          <p>
            {{ text.texto3 }}
          </p>
        </div>
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
  data() {
    return {
      language: "",
      languages: ["Português", "English"],
      pt: {
        welcome: "BEM-VINDO AO GRUPO NOIS",
        titulo1: "Descritivo da Ferramenta",
        titulo2: "Proposta da Ferramenta",
        titulo3: "Conteúdo Científico",
        texto1:
          "A estrutura disposta representa uma ferramenta que possui um modelo preditivo para infecções em sítios cirúrgicos (ISC). Atualmente contamos com uma gama de cirurgias que foram estudados ao longo de dois anos em hospitais de Belo Horizonte. Ao acessar um formulário, o usuário pode inserir os dados da cirurgia e o modelo prediz a possibilidade de ISC e o percentual de certeza. Afirmamos que apresentamos uma ferramenta de CONSULTA, pois não fornecemos nenhum diagnóstico, sob nenhuma circunstância.",
        texto2:
          "O Software visa ajudar a comunidade médica a otimizar o grau de certeza nos casos de ISC. Esta aplicação suporta uma série de cirurgias através das análises previamente inseridas nos algoritmos de predição utilizados.Nossa principal proposta é levar ao nosso sistema consultas com a gama de cirurgias apresentadas, por meio de variáveis selecionadas, para auxiliar na tomada de decisão médica.Deixe nosso contato. Se sua instituição deseja uma versão de nossa solução para a realidade de seu ambiente, desenhamos soluções customizadas.",
        texto3:
          "Nossa ferramenta não se baseia somente em dados, mas no rigor científico que este tipo de demanda requer. Várias publicações, em congressos europeus e norte americanos renomados, como: IDWEEK, Decennial SHEA, ICPIC, além de revistas como: OFID (Open Forum Infections Diseases), Infection Control & Hospital Epidemiology (Cambridge Core), Antimicrobial Resistance & Infection Control; demonstram o aprimoramento da ferramenta que visa contribuir com uma gestão médica com suporte de ferramentas de predição",
        estatisticas: "ESTATÍSTICAS E DADOS",
        artigos: "ARTIGOS",
        contatos: "CONTATOS",
        copyright: "Copyright© 2021 Nois, Todos os direitos reservados.",
      },
      eng: {
        welcome: "WELCOME TO THE NOIS GROUP",
        titulo1: "Application Description",
        titulo2: "Application Proposal",
        titulo3: "Scientific Content",
        texto1:
          "The application provides a predictive model for surgical site infections (SSI). The application has as references a range of surgeries that were studied over two years in hospitals in Belo Horizonte. Trought the access of a main form, the user can enter the surgery data and the model predicts the possibility of SSI and the percentage of certainty. We affirm that we present a CONSULTATION tool, as we do not provide any diagnosis under any circumstances.",
        texto2:
          "The Software aims to help the medical community to optimize the degree of certainty in cases of SSI. This application supports a range of surgeries through the analyzes previously inserted in the used prediction algorithms. Our main proposals is to provide queries to our system with the range of surgeries presented, through selected variables, to aid in medical decision-making. Leave our contact. If your institution wants a version of our solution for the reality of your environment, we design customized solutions.",
        texto3:
          "The Project has a reputable scientifical history. Various publications, in European and North American congresses, such as IDWeek, Decennial Shea, ECCMID (European Congress of Clinical Microbiology & Infectious Diseases), ICPIC, as well as magazines such as: OFID (Open Forum Infections Diseases), Infection Control & Hospital Epidemi They demonstrate the improvement of the tool that aims to contribute to medical management with support for prediction tools..",
        estatisticas: "STATISTICS AND DATA",
        artigos: "ARTICLES",
        contatos: "CONTACTS",
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
        name: "timeline",
      });
    },
    goTuContato() {
      this.$router.replace({
        name: "contato",
      });
    },
    goTuEstatiticas() {
      this.$router.replace({
        name: "Estatiticas",
      });
    },
    goTuLogin() {
      this.$router.replace({
        name: "login",
      });
    },
  },
};
</script>

<style>
h1 {
  color: #3072b9;
}
h2 {
  color: #e4e4e4;
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
  color: #3072b9;
}
.meio {
  position: absolute;
  align-items: center;
  display: table;
}

#conteudo {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  display: table-cell;
  vertical-align: middle;
}

#geral {
  position: relative;
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
.coluna1 {
  top: 0px;
  width: 98%;
  text-align: justify;
  position: relative;
  font-size: 13px;
  background-color: rgb(219, 226, 255);
  border-radius: 10px;
  margin: 10px;
  padding: 5px;
  opacity: 0.9;
}
.coluna2 {
  width: 98%;
  text-align: justify;
  position: relative;
  font-size: 13px;
  background-color: rgb(219, 226, 255);
  border-radius: 10px;
  margin: 10px;
  padding: 5px;
  opacity: 0.9;
}
.coluna3 {
  width: 98%;
  text-align: justify;
  position: relative;
  font-size: 13px;
  background-color: rgb(219, 226, 255);
  border-radius: 10px;
  margin: 10px;
  padding: 5px;
  opacity: 0.9;
}
p {
  margin: 15px;
  color: black;
}
.btestatiticas {
  background-color: #696969;
  width: 9%;
  height: 45px;
  border-radius: 5px;
  color: #fff;
  opacity: 0.8;
  filter: alpha(opacity=90);
  color: white;
  top: 2%;
  right: 645px;
  float: right;
  margin-left: 5px;
  font-size: 300%; 
}
.btartigo1 {
  background-color: #44df6a;
  width: 9%;
  height: 45px;
  border-radius: 5px;
  color: #fff;
  opacity: 0.8;
  filter: alpha(opacity=90);
  color: white;
  right: 430px;
  float: right;
  margin-left: 5px;
  font-size: 300%; 
}
.btcontatos {
  background-color: #fa4747;
  width: 9%;
  height: 45px;
  border-radius: 5px;
  color: #fff;
  opacity: 0.8;
  filter: alpha(opacity=90);
  color: white;
  right: 215px;
  float: right;
  margin-left: 5px;
  font-size: 300%; 
}
.btnLogin {
  background-color: #005fc4;
  width: 9%;
  height: 45px;
  border-radius: 5px;
  color: #fff;
  opacity: 0.8;
  filter: alpha(opacity=90);
  color: white;
  right: 0;
  float: right;
  margin-left: 5px;
  font-size: 300%; 
}
#btnmenu{
  top: 2%;
  position: absolute;
  width: 100%;
  float: right;
  font-size: 30%;
}
.copyright {
  text-align: center;
  color: white;
  font-size: 10px;
}
.pisca {
  animation: blinker 1s linear infinite;
}
@keyframes blinker {
  100% {
    opacity: 100;
    color: rgb(255, 0, 0);
  }
}
</style>

