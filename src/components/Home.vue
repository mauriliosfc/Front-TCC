<template>
  <div id="geral">
    <div id="painel">
      <img src="../assets/nois.png" alt="NOIS" />
      <h1>BEM VINDO, NOIS É FODA</h1>
      <!--<img v-bind:src="foto.url" v-bind:alt="foto.titulo">-->
    </div>
    <div id="meio">
      <div id="buttongeral">
        <button class="button1"><span>FERRAMENTA DA ISC</span></button>
        <button class="button2"><span>APLICATIVOS CIENTIFICOS</span></button>
      </div>
    </div>
    <div id="rodape">
      <div class="imagem1">
        <img src="../assets/n.png" alt="NOIS" />
      </div>
      <div class="copyright">
        Copyright © 2013-2020 Rock Content. Todos os direitos reservados.
      </div>
    </div>
  </div>
</template>

<script>
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
  color: rgb(212, 212, 212);
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
a{
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
  
}
</style>