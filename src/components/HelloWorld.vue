<template>
  <div>
  <b-card sm-5 bg-variant="light">
    <b-form @submit.prevent="onSubmit($event)"  @reset="onReset">
    <b-form-group
      label="Risco cirúrgico"
      label-size="lg"
      label-class="font-weight-bold "
    >
      <b-form-group        
        label="tipo_cuirurgia_especifica:"        
      >
        <b-form-select v-model="form.tipo_cuirurgia_especifica" :options="tce_options"></b-form-select>
      </b-form-group>

      <b-form-group
        label="tipo_cirurgia:"
      >
        <b-form-select v-model="form.tipo_cirurgia" :options="Tipo_Cirurgia"></b-form-select>
      </b-form-group>

      <b-form-group
        label="hospital:"
      >
        <b-form-select v-model="form.hospital" :options="Hospital"></b-form-select>
      </b-form-group>

      <b-form-group
        label="num_internacao:"
      >
        <b-form-input v-model="form.num_internacao" id="nested-country" type='number'></b-form-input>
      </b-form-group>

      <b-form-group
        label="idade_anos:"
      >
        <b-form-input v-model="form.idade_anos" id="nested-country" type='number'></b-form-input>
      </b-form-group>

      <b-form-group
        label="t_ate_cirurgia:"
      >
        <b-form-input v-model="form.t_ate_cirurgia" id="nested-country" type='number' ></b-form-input>
      </b-form-group>

      <b-form-group
        label="duracao_cirurgia:"
      >
        <b-form-input v-model="form.duracao_cirurgia" id="nested-country" type='number'></b-form-input>
      </b-form-group>

      <b-form-group
        label="potencial_contaminacao:"
      >
        <b-form-select v-model="form.potencial_contaminacao" :options="pc_options    "></b-form-select>
      </b-form-group>

      <!-- <b-form-group

        label="duracao_cirurgia:"


      >
        <b-form-input v-model="form.hospital" id="nested-country" type='number'></b-form-input>
      </b-form-group> -->

      <b-form-group
        label="cirurgia_limpa:"
      >
         <input
          type="checkbox"
          v-model="form.cirurgia_limpa"
          true-value="1"
          false-value="0"
        >
      </b-form-group>

      <b-form-group
        label="anestesia_geral:"
      >
         <input
          type="checkbox"
          v-model="form.anestesia_geral"
          true-value="1"
          false-value="0"
        >
      </b-form-group>

      <b-form-group
        label="emergencia:"
      >
        <input
          type="checkbox"
          v-model="form.emergencia"
          true-value="1"
          false-value="0"
        >
      </b-form-group>

      <b-form-group
        label="gravidade_asa:"
      >
         <input
          type="checkbox"
          v-model="form.gravidade_asa"
          true-value="1"
          false-value="0"
        >
      </b-form-group>

      <b-form-group
        label="protese:"
      >
         <input
          type="checkbox"
          v-model="form.protese"
          true-value="1"
          false-value="0"
        >
      </b-form-group>

      <b-form-group
        label="cirurgia_videolaparoscopica:"
      >
        <input
          type="checkbox"
          v-model="form.cirurgia_videolaparoscopica"
          true-value="1"
          false-value="0"
        >
      </b-form-group>

      <b-form-group
        label="iric:"
      >
        <input
          type="checkbox"
          v-model="form.iric"
          true-value="1"
          false-value="0"
        >
      </b-form-group>

      <b-form-group
        label="num_procedimentos:"
      >
        <b-form-input v-model="form.num_procedimentos" id="nested-country" type='number'></b-form-input>
      </b-form-group>
      <!-- <b-form-group

        label="mais_de_um_proc:"


      >
        <b-form-input v-model="form.hospital" id="nested-country"></b-form-input>
      </b-form-group> -->
    </b-form-group>
    <button type="submit">Adiciona 1</button>
    <!-- <b-button type="submit" variant="primary">Submit</b-button> -->
    <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </b-card>
</div>
</template>

<script>
import axios from 'axios'
import $ from "jquery";

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      form: {
        "acima_4_profissionais": 0,
        "acima_70_anos": 0,
        "anestesia_geral": 1,
        "asa_maior_2": 0,
        "cirurgia_limpa": 0,
        "cirurgia_videolaparoscopica": 1,
        "duracao_acima_duas_horas": 1,
        "duracao_cirurgia": 235,
        "emergencia": 0,
        "gravidade_asa": 2,
        "hospital": 4,
        "idade_anos": 42,
        "iric": 0,
        "mais_de_um_proc": 0,
        "num_internacao": 1,
        "num_procedimentos": 1,
        "num_profissionais_bloco": 2,
        "potencial_contaminacao": 4,
        "primeira_internacao": 1,
        "protese": 1,
        "t_ate_cirurgia": 0,
        "t_ate_maior_4": 0,
        "tipo_cirurgia": 2,
        "tipo_cuirurgia_especifica": 1
      },
      tce_options: [
        { value: 1, text: 'Laparotomia exploradora – videolaparoscópica' },
        { value: 2, text: 'Laparotomia exploradora' },
        { value: 3, text: 'Herniorrafia – videolaparoscópica' },
        { value: 4, text: 'Herniorrafia' },
        { value: 5, text: 'Colecistectomia – videolaparoscópica' },
        { value: 6, text: 'Colecistectomia' },
        { value: 7, text: 'Cirurgia de cólon – videolaparoscópica' },
        { value: 8, text: 'Cirurgia de cólon' },
        { value: 9, text: 'Apendicectomia – videolaparoscópica' },
        { value: 1, text: 'Apendicectomia' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ],
      pc_options: [
        { value: 1, text: 'Limpa' },
        { value: 2, text: 'Contaminada' },
        { value: 3, text: 'Infectada' },
        { value: 4, text: 'Potencialmente Contaminada' }
      ],
      Tipo_Cirurgia: [
        { value: 1, text: 'Apendicectomia' },
        { value: 2, text: 'Laparotomia exploradora' },
        { value: 3, text: 'Herniorrafia' },
        { value: 4, text: 'Colecistectomia' },
        { value: 5, text: 'Cirurgia de cólo' }
      ],
      Hospital: [
        {value: 1, text: 'B'},
        {value: 2, text: 'D'},
        {value: 3, text: 'E'},
        {value: 4, text: 'F'},
        {value: 5, text: 'G'}
      ],
      boolena_options: [
        {value: 0, text: 'Não'},
        {value: 1, text: 'Sim'}
      ]
    }
  },
  methods: {
    async onSubmit(){
      
      let dados = {
        "acima_4_profissionais": 0,
        "acima_70_anos": 0,
        "anestesia_geral": 1,
        "asa_maior_2": 0,
        "cirurgia_limpa": 0,
        "cirurgia_videolaparoscopica": 1,
        "duracao_acima_duas_horas": 1,
        "duracao_cirurgia": 235,
        "emergencia": 0,
        "gravidade_asa": 2,
        "hospital": 4,
        "idade_anos": 42,
        "iric": 0,
        "mais_de_um_proc": 0,
        "num_internacao": 1,
        "num_procedimentos": 1,
        "num_profissionais_bloco": 2,
        "potencial_contaminacao": 4,
        "primeira_internacao": 1,
        "protese": 1,
        "t_ate_cirurgia": 0,
        "t_ate_maior_4": 0,
        "tipo_cirurgia": 2,
        "tipo_cuirurgia_especifica": 1
      }

      let data = await axios.post(`http://localhost:5000/buscar`, {
        headers: {
          'Access-Control-Allow-Credentials':true
        },
        body: this.form        
      })
      console.log(data)
      alert(data.data)
    },
    onReset( evt ){
      evt.preventDefault()
      // Reset our form values 
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
