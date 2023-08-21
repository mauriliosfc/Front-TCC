<template>
  <div>
    <menu-horizontal v-if="isVerticalMenu" />
    <div class="grid-container" :class="{ 'grid-container-vertical': isVerticalMenu }">
      <div class="menu-container" :class="{ 'menu-container-vertical': isVerticalMenu }">
        <v-switch v-model="model" hide-details true-value="Português" false-value="English" class="ml-3" style="position: absolute; top: 0; right: 0; margin-right: 35px;">
          <template #label>
            <span >{{ model }}</span>
          </template>
        </v-switch>
        <menu-horizontal v-if="!isVerticalMenu" />
      </div>
      <div class="content" :class="{ 'content-vertical': isVerticalMenu }" >
        <div class="image-container">
          <img src="../assets//retang1.png" alt="Imagem">
          <div class="centered-text">
            <h5 :style="{ color: '#6427cc' }">{{ bemVindo }}</h5>
            <h3 :style="{ color: '#4BC3CC' }">{{ titulo1 }}</h3>
            <p class="pimg" :class="{ 'grid-container-vertical': isVerticalMenu }" :style="`font-size: ${fontSize}vw`">{{
              descricao1 }}</p>
          </div>
        </div>
      </div>
      <div cclass="content" :style="{ display: isVerticalMenu ? 'none' : 'flex' }"  ><img src="../assets/bisturi.png" /></div>
      <div class="content" :style="{ display: isVerticalMenu ? 'none' : 'flex' }" ><img src="../assets/ren.png" /></div>
      <div class="content" :class="{ 'content-vertical': isVerticalMenu }" >
        <div class="image-container">
          <img src="../assets//retang2.png" alt="Imagem">
          <div class="centered-text">
            <h3 :style="{ color: '#4BC3CC' }">{{ titulo2 }}</h3>
            <!--<p class="pimg" :style="`font-size: ${fontSize}vw`"></p>-->
            <p class="pimg" :class="{ 'grid-container-vertical': isVerticalMenu }" :style="`font-size: ${fontSize}vw`">{{
              descricao2 }}</p>
          </div>
        </div>
      </div>
      <div class="content" :class="{ 'content-vertical': isVerticalMenu }">
        <div class="image-container">
          <img src="../assets//retang3.png" alt="Imagem">
          <div class="centered-text">
            <h3 :style="{ color: '#4BC3CC' }">{{ titulo3 }}</h3>
            <p class="pimg" :class="{ 'grid-container-vertical': isVerticalMenu }" :style="`font-size: ${fontSize}vw`">{{
              descricao3 }}</p>
          </div>
        </div>
      </div>
      <div class="content" v-if="!isVerticalMenu"><img src="../assets/cel.png" /></div>
      <div>
      </div>
    </div>

    <div class="centered-video">
      <div>
        <h1 :style="{ color: '#262626', marginBottom: '20px' }">{{ tituloVideo }}</h1>
      </div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/EKrTlyWpd24" frameborder="0"
        allowfullscreen></iframe>
    </div>

    <div class="footer">
      <p class="footer-text">Copyright © 2013-2022. Todos os direitos reservados.</p>
    </div>

  </div>
</template>

<script>
import MenuHorizontal from './MenuHorizontal.vue';
export default {
  data() {
    return {
      isVerticalMenu: false,
      fontSize: 1,
      model: 'English',
    };
  },
  computed: {
    bemVindo() {
      return this.model === 'Português' ? 'Bem vindo á grupo NOIS' : 'Welcome to NOIS Group';
    },
    titulo1() {
      return this.model === 'Português' ? 'Descritivo da Ferramenta' : 'Tool Description';
    },
    descricao1() {
      return this.model === 'Português' ? 'A estrutura disposta representa uma ferramenta que possui um modelo preditivo para infecções em sítios cirúrgicos (ISC). Atualmente contamos com uma gama de cirurgias que foram estudados ao longo de dois anos em hospitais de Belo Horizonte. Ao acessar um formulário, o usuário pode inserir os dados da cirurgia e o modelo prediz a possibilidade de ISC e o percentual de certeza. Afirmamos que apresentamos uma ferramenta de CONSULTA, pois não fornecemos nenhum diagnóstico, sob nenhuma circunstância.' : 'The application provides a predictive model for surgical site infections (SSI). The application has as references a range of surgeries that were studied over two years in hospitals in Belo Horizonte. Trought the access of a main form, the user can enter the surgery data and the model predicts the possibility of SSI and the percentage of certainty. We affirm that we present a CONSULTATION tool, as we do not provide any diagnosis under any circumstances.';
    },
    titulo2() {
      return this.model === 'Português' ? 'Proposta da Ferramenta"' : 'Application Proposal';
    },
    descricao2() {
      return this.model === 'Português' ? 'O Software visa ajudar a comunidade médica a otimizar o grau de certeza nos casos de ISC.Esta aplicação suporta uma série de cirurgias através das análises previamente inseridas nos algoritmos de predição utilizados.Nossa principal proposta é levar ao nosso sistema consultas com a gama de cirurgias apresentadas, por meio de variáveis selecionadas, para auxiliar na tomada de decisão médica.Deixe nosso contato.Se sua instituição deseja uma versão de nossa solução para a realidade de seu ambiente, desenhamos soluções customizadas.' : 'The Software aims to help the medical community to optimize the degree of certainty in cases of SSI. This application supports a range of surgeries through the analyzes previously inserted in the used prediction algorithms. Our main proposals is to provide queries to our system with the range of surgeries presented, through selected variables, to aid in medical decision-making. Leave our contact. If your institution wants a version of our solution for the reality of your environment, we design customized solutions.';
    },
    titulo3() {
      return this.model === 'Português' ? 'Conteúdo Científico' : 'Scientific Content';
    },
    descricao3() {
      return this.model === 'Português' ? 'Nossa ferramenta não se baseia somente em dados, mas no rigor científico que este tipo de demanda requer. Várias publicações, em congressos europeus e norte americanos renomados, como: IDWEEK, Decennial SHEA, ICPIC, além de revistas como: OFID (Open Forum Infections Diseases), Infection Control & Hospital Epidemiology (Cambridge Core), Antimicrobial Resistance & Infection Control; demonstram o aprimoramento da ferramenta que visa contribuir com uma gestão médica com suporte de ferramentas de predição' : 'The Project has a reputable scientifical history. Various publications, in European and North American congresses, such as IDWeek, Decennial Shea, ECCMID (European Congress of Clinical Microbiology & Infectious Diseases), ICPIC, as well as magazines such as: OFID (Open Forum Infections Diseases), Infection Control & Hospital Epidemi They demonstrate the improvement of the tool that aims to contribute to medical management with support for prediction tools..';
    },
    tituloVideo() {
      return this.model === 'Português' ? 'Conheça nossa ferramenta' : 'Meet our tool';
    },

  },
  components: {
    MenuHorizontal,
  },
  methods: {
    checkScreenWidth() {
      this.isVerticalMenu = window.innerWidth <= 930;
      this.fontSize = this.isVerticalMenu ? 2 : 1;
    },
  },
  mounted() {
    this.checkScreenWidth();
    window.addEventListener("resize", this.checkScreenWidth);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkScreenWidth);
  },
};
</script>

<style>
.grid-container {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  position: relative;
  color: black;
}

.grid-container-vertical {
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
}

.menu-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

.content {
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content-vertical{
  height: 10%;
}

.content img {
  max-width: 100%;
  max-height: 100%;
}

.image-container {
  position: relative;
  top: 0%;
}

.centered-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.pimg {
  color: rgb(255, 255, 255);
}

.pimg {
  color: rgb(255, 255, 255);
}

.centered-video {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 600px;
}

.centered-video iframe {
  width: 100%;
  height: 100%;
}

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, #2C7AED, #4BC3CC);
  color: white;
  height: 60px;
  margin-top: 30px;
}

.footer-text {
  font-size: 14px;
  color: white;
}</style>