<template>
  <div>
    <b-card bg-variant="light">
      <b-form @submit="onSubmit" @reset="onReset">
        <b-form-group  label="Risco cirúrgico" label-size="lg" label-class="font-weight-bold ">
          <div class="row">
            <b-form-group class="col-md-6" label="tipo_cuirurgia_especifica:">
              <b-form-select 
                v-model="form.tipo_cuirurgia_especifica" 
                :options="tce_options">
              </b-form-select>
            </b-form-group>

            <b-form-group class="col-md-6" label="tipo_cirurgia:">
              <b-form-select 
                v-model="form.tipo_cirurgia" 
                :options="Tipo_Cirurgia">
                </b-form-select>
            </b-form-group>
          
            <b-form-group class="col-md-6" label="hospital:">
              <b-form-select v-model="form.hospital" :options="Hospital"></b-form-select>
            </b-form-group>

            <b-form-group class="col-md-6" label="num_internacao:">
              <b-form-input 
                v-model="form.num_internacao" 
                id="nested-country" 
                type="number">
              </b-form-input>
            </b-form-group>

            <b-form-group class="col-md-6" label="idade_anos:">
              <b-form-input 
                v-model="form.idade_anos" 
                id="nested-country" 
                type="number">
              </b-form-input>
            </b-form-group>

            <b-form-group class="col-md-6" label="t_ate_cirurgia:">
              <b-form-input v-model="form.t_ate_cirurgia" id="nested-country" type="number"></b-form-input>
            </b-form-group>

            <b-form-group class="col-md-6" label="duracao_cirurgia:">
              <b-form-input v-model="form.duracao_cirurgia" id="nested-country" type="number"></b-form-input>
            </b-form-group>

            <b-form-group class="col-md-6" label="potencial_contaminacao:">
              <b-form-select v-model="form.potencial_contaminacao" :options="pc_options    "></b-form-select>
            </b-form-group>

            <b-form-group class="col-md-6" label="num_procedimentos:">
              <b-form-input v-model="form.num_procedimentos" id="nested-country" type="number"></b-form-input>
            </b-form-group>

            <b-form-group class="col-md-6" label="gravidade_asa:">
              <b-form-input v-model="form.gravidade_asa" type="number"></b-form-input>
            </b-form-group>

            <b-form-group class="col-md-6" label="num_profissionais_bloco:">
              <b-form-input v-model="form.num_profissionais_bloco" type="number"></b-form-input>
            </b-form-group>          
            <b-form-group class="col-md-6" >
              <!-- <b-form-input v-model="form.num_profissionais_bloco" type="number"></b-form-input> -->
            </b-form-group>          

            <b-form-group class="col-md-6" label="cirurgia_limpa:">
              <input type="checkbox" v-model="form.cirurgia_limpa" true-value="1" false-value="0" />
            </b-form-group>

            <b-form-group class="col-md-6" label="anestesia_geral:">
              <input type="checkbox" v-model="form.anestesia_geral" true-value="1" false-value="0" />
            </b-form-group>

            <b-form-group class="col-md-6" label="emergencia:">
              <input type="checkbox" v-model="form.emergencia" true-value="1" false-value="0" />
            </b-form-group>

            <b-form-group class="col-md-6" label="protese:">
              <input type="checkbox" v-model="form.protese" true-value="1" false-value="0" />
            </b-form-group>

            <b-form-group class="col-md-6" label="cirurgia_videolaparoscopica:">
              <input
                type="checkbox"
                v-model="form.cirurgia_videolaparoscopica"
                true-value="1"
                false-value="0"
              />
            </b-form-group>

            <b-form-group class="col-md-6" label="iric:">
              <input type="checkbox" v-model="form.iric" true-value="1" false-value="0" />
            </b-form-group>
          </div>
        </b-form-group>

        <b-button type="submit" variant="primary">Buscar</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      form: {
        tipo_cuirurgia_especifica: "",
        tipo_cirurgia: "",
        hospital: "",
        num_internacao: "",
        idade_anos: "",
        t_ate_cirurgia: "",
        duracao_cirurgia: "",
        potencial_contaminacao: "",
        num_procedimentos: "",
        gravidade_asa: "",
        num_profissionais_bloco: "",
        cirurgia_limpa: "0",
        anestesia_geral: "0",
        emergencia: "0",
        protese: "0",
        cirurgia_videolaparoscopica: "0",
        iric: "0"
      },
      tce_options: [
        { value: 1, text: "Laparotomia exploradora – videolaparoscópica" },
        { value: 2, text: "Laparotomia exploradora" },
        { value: 3, text: "Herniorrafia – videolaparoscópica" },
        { value: 4, text: "Herniorrafia" },
        { value: 5, text: "Colecistectomia – videolaparoscópica" },
        { value: 6, text: "Colecistectomia" },
        { value: 7, text: "Cirurgia de cólon – videolaparoscópica" },
        { value: 8, text: "Cirurgia de cólon" },
        { value: 9, text: "Apendicectomia – videolaparoscópica" },
        { value: 1, text: "Apendicectomia" },
        { value: "d", text: "This one is disabled", disabled: true }
      ],
      pc_options: [
        { value: 1, text: "Limpa" },
        { value: 2, text: "Contaminada" },
        { value: 3, text: "Infectada" },
        { value: 4, text: "Potencialmente Contaminada" }
      ],
      Tipo_Cirurgia: [
        { value: 1, text: "Apendicectomia" },
        { value: 2, text: "Laparotomia exploradora" },
        { value: 3, text: "Herniorrafia" },
        { value: 4, text: "Colecistectomia" },
        { value: 5, text: "Cirurgia de cólo" }
      ],
      Hospital: [
        { value: 1, text: "B" },
        { value: 2, text: "D" },
        { value: 3, text: "E" },
        { value: 4, text: "F" },
        { value: 5, text: "G" }
      ],
      boolena_options: [{ value: 0, text: "Não" }, { value: 1, text: "Sim" }]
    };
  },
  methods: {
    async onSubmit(evt) {
      await axios.post(`http://localhost:8080/buscar`, {
      //await axios.post(`http://3.130.179.162:8080/buscar`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json;charset=UTF-8"
        },
        body: this.form
      })
      .then(response => {
        alert("Possui IIC: "+response.data);
        console.log(response);
      })
      .catch(e => {
        alert(e);
        console.log(e);
      });
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
