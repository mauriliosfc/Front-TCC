<template>
  <div>
    <menu-horizontal v-if="isVerticalMenu" />
    <div class="grid-container" :class="{ 'grid-container-vertical': isVerticalMenu }">
      <div class="menu-container" :class="{ 'menu-container-vertical': isVerticalMenu }">
        <menu-horizontal v-if="!isVerticalMenu" />
      </div>
      <div class="content">
        <div class="image-container">
          <img src="../assets//retang1.png" alt="Imagem">
          <div class="centered-text">
            <h5 :style="{ color: '#6427cc' }">Bem vindo á grupo NOIS</h5>
            <h3 :style="{ color: '#4BC3CC' }">Descritivo da Ferramenta</h3>
            <p class="pimg" :class="{ 'grid-container-vertical': isVerticalMenu }" :style="`font-size: ${fontSize}vw`">
              Atualmente contamos com uma gama de
              cirurgias que foram estudados ao longo de dois anos em
              hospitais de Belo Horizonte. Ao acessar um formulário, o usuário pode inserir os dados da cirurgia e o
              modelo
              prediz a possibilidade de ISC e o percentual de certeza. Afirmamos que apresentamos uma ferramenta de
              CONSULTA, pois não fornecemos nenhum diagnóstico, sob nenhuma circunstância.</p>
          </div>
        </div>
      </div>
      <div class="content"><img src="../assets/bisturi.png" /></div>
      <div class="content"><img src="../assets/ren.png" /></div>
      <div class="content">
        <div class="image-container">
          <img src="../assets//retang2.png" alt="Imagem">
          <div class="centered-text">
            <h3 :style="{ color: '#4BC3CC' }">Proposta da Ferramenta</h3>
            <p class="pimg" :style="`font-size: ${fontSize}vw`">O Software visa ajudar a comunidade médica a otimizar o grau de certeza nos casos de ISC. Esta
              aplicação suporta uma série de cirurgias através das análises previamente inseridas nos algoritmos de
              predição utilizados.Nossa principal proposta é levar ao nosso sistema consultas com a gama de cirurgias
              apresentadas, por meio de variáveis selecionadas, para auxiliar na tomada de decisão médica.Deixe nosso
              contato. Se sua instituição deseja uma versão de nossa solução para a realidade de seu ambiente, desenhamos
              soluções customizadas.</p>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="image-container">
          <img src="../assets//retang3.png" alt="Imagem">
          <div class="centered-text">
            <h3 :style="{ color: '#4BC3CC' }" >Conteúdo Científico</h3>
            <p class="pimg" :style="`font-size: ${fontSize}vw`">Nossa ferramenta não se baseia somente em dados, mas no rigor científico que este tipo de
              demanda requer. Várias publicações, em congressos europeus e norte americanos renomados, como: IDWEEK,
              Decennial SHEA, ICPIC, além de revistas como: OFID (Open Forum Infections Diseases), Infection Control &
              Hospital Epidemiology (Cambridge Core), Antimicrobial Resistance & Infection Control; demonstram o
              aprimoramento da ferramenta que visa contribuir com uma gestão médica com suporte de ferramentas de predição
            </p>
          </div>
        </div>
      </div>
      <div class="content"><img src="../assets/cel.png" /></div>
      <div>
      </div>
    </div>

    <div class="centered-video">
      <div>
        <h1 :style="{ color: '#262626', marginBottom: '20px' }">Conheça nossa ferramenta</h1>
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
    };
  },
  components: {
    MenuHorizontal,
  },
  methods: {
    checkScreenWidth() {
      this.isVerticalMenu = window.innerWidth <= 758;
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
}
</style>