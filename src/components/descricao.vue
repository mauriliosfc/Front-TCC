<template>
  <div id="geral">
    <div id="painel">
      <button @click="goTuLogin" class="btnLogin">
        <span>LOGIN</span>
      </button>
      <img src="../assets/nois.png" alt="NOIS" />
      <h1>BEM VINDO, NOIS É FODA</h1>
      <!--<img v-bind:src="foto.url" v-bind:alt="foto.titulo">-->
    </div>
    <div id="meio">
      <div id="conteudo">

        <div class="coluna1">
          <h1>Descritivo da Ferramenta</h1>
          <p>
            A estrutura disposta representa uma ferramenta que possui um modelo
            preditivo para infecções em sítios cirúrgicos (ISC). Atualmente
            contamos com uma gama de cirurgias que foram estudados ao longo de
            dois anos em hospitais de Belo Horizonte. Ao acessar um formulário,
            o usuário pode inserir os dados da cirurgia e o modelo prediz a
            possibilidade de ISC e o percentual de certeza. Afirmamos que
            apresentamos uma ferramenta de CONSULTA, pois não fornecemos nenhum
            diagnóstico, sob nenhuma circunstância.
          </p>
        </div>
        <div class="coluna2">
          <h1>Proposta da Ferramenta</h1>
          <p>
            o foco de nossa ferramenta é auxiliar a comunidade médica para
            otimização do grau de certeza em casos de ISC. Conseguimos
            apresentar uma certa gama de cirurgias através das análises
            previamente inseridas nos algoritmos de predição utilizados. Temos
            duas propostas: 1 - Disponibilizar gratuitamente consultas ao nosso
            sistema com a gama de cirurgias apresentadas, mediante variáveis
            selecionadas, para auxílio à tomada de decisão médica. 2 - Deixar
            nosso contato. Caso sua instituição deseje uma versão de nossa
            solução para a realidade de seu ambiente, projetamos soluções
            personalizadas.
          </p>
        </div>
        <div class="coluna3">
          <h1>Teor Científico</h1>
          <p>
            Nossa ferramenta não se baseia somente em dados, mas no rigor
            científico que este tipo de demanda requer. Várias publicações, em
            congressos europeus e norte americanos renomados, como: IDWEEK,
            Decennial SHEA, ICPIC, além de revistas como: OFID (Open Forum
            Infections Diseases), Infection Control & Hospital Epidemiology
            (Cambridge Core), Antimicrobial Resistance & Infection Control;
            demonstram o aprimoramento da ferramenta que visa contribuir com uma
            gestão médica com suporte de ferramentas de predição.
          </p>
        </div>
      </div>
    </div>
    <div id="rodape">
      <div class="imagem1">
        <img src="../assets/n.png" alt="NOIS" />
      </div>
      <div class="copyright">
        Copyright© 2021 Nois, Todos os direitos reservados.
      </div>
      <button @click="goTuDescription" class="btartigo1">
        <span>ARTIGOS</span>
      </button>
      <button @click="goTuContato" class="btcontatos">
        <span>CONTATOS</span>
      </button>
      <button @click="goTuEstatiticas" class="btestatiticas">
        <span>DADOS E ESTATÍSTICAS</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
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
#painel {
  width: 100%;
  height: 150px;
  background: white;
  box-shadow: 0px 0.1px 5px rgb(95, 95, 95);
  position: fixed;
  z-index: 9999;
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
.btnLogin{
  background-color: #005fc4;
  width: 210px;
  height: 45px;
  border-radius: 5px;
  font-size: 2em;
  color: #fff;
  opacity: 0.8;
  filter: alpha(opacity=90);
  font-size: 15px;
  color: white;
  position: absolute;
  bottom: 0;
  z-index: 50;
  top: 5%;
  right: 0;
  float: right;
  margin-right: 5px;
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
  background-image: url(../assets/celebro.png);
  background-size: cover;
}
#rodape {
  width: 100%;
  background: rgb(51, 51, 51);
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

.btartigo1 {
  background-color: #3072b9;
  width: 210px;
  height: 45px;
  border-radius: 5px;
  font-size: 2em;
  color: #fff;
  opacity: 0.8;
  filter: alpha(opacity=90);
  font-size: 15px;
  color: white;
  position: absolute;
  bottom: 0;
  z-index: 50;
  top: 11%;
  right: 215px;
  float: right;
  margin-right: 5px;
}
.btcontatos {
  background-color: #fa4747;
  width: 210px;
  height: 45px;
  border-radius: 5px;
  font-size: 2em;
  color: #fff;
  opacity: 0.8;
  filter: alpha(opacity=90);
  font-size: 15px;
  color: white;
  position: absolute;
  bottom: 0;
  z-index: 50;
  top: 11%;
  right: 0;
  float: right;
  margin-right: 5px;
}
.btestatiticas {
  background-color: #696969;
  width: 210px;
  height: 45px;
  border-radius: 5px;
  font-size: 2em;
  color: #fff;
  opacity: 0.8;
  filter: alpha(opacity=90);
  font-size: 15px;
  color: white;
  position: absolute;
  bottom: 0;
  z-index: 50;
  top: 11%;
  right: 430px;
  float: right;
  margin-right: 5px;
}
.copyright {
  text-align: center;
  color: white;
  font-size: 10px;
}
</style>

