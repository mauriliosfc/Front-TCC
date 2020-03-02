<template>
  <v-app>
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="12" md="12">
          <v-card class="elevation-12">
            <v-toolbar color="success" dark flat>
              <v-toolbar-title>Consulta Risco Cirurgico</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-row align="center" justify="center">
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-select
                      v-model="form.tipo_cuirurgia_especifica"
                      :items="tce_options"
                      menu-props="auto"
                      label="Tipo Cirurgia Especifica"
                    ></v-select>
                  </v-col>
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-select
                      v-model="form.tipo_cirurgia"
                      :items="Tipo_Cirurgia"
                      menu-props="auto"
                      label="Tipo Cirurgia"
                    ></v-select>
                  </v-col>
                </v-row>
                <v-row align="center" justify="center">
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-select
                      v-model="form.hospital"
                      :items="Hospital"
                      menu-props="auto"
                      label="Hospital"
                    ></v-select>
                  </v-col>
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-text-field
                      label="Numero de Internacões"
                      v-model="form.num_internacao"
                      name="num_internacao"
                      type="number"
                    />
                  </v-col>
                </v-row>
                <v-row align="center" justify="center">
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-text-field
                      label="Idade"
                      v-model="form.idade_anos"
                      name="idade_anos"
                      type="number"
                    />
                  </v-col>
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-text-field
                      label="t_ate_cirurgia"
                      v-model="form.t_ate_cirurgia"
                      name="t_ate_cirurgia"
                      type="number"
                    />
                  </v-col>
                </v-row>
                <v-row align="center" justify="center">
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-text-field
                      label="duracao_cirurgia"
                      v-model="form.duracao_cirurgia"
                      name="duracao_cirurgia"
                      type="number"
                    />
                  </v-col>
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-select
                      v-model="form.potencial_contaminacao"
                      :items="pc_options"
                      menu-props="auto"
                      label="Potencial contaminacao"
                    ></v-select>
                  </v-col>
                </v-row>
                <v-row align="center" justify="center">
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-text-field
                      label="Num procedimentos"
                      v-model="form.num_procedimentos"
                      name="num_procedimentos"
                      type="number"
                    />
                  </v-col>
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-text-field
                      label="Gravidade asa"
                      v-model="form.gravidade_asa"
                      name="gravidade_asa"
                      type="number"
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-text-field
                      label="Num profissionais nobloco"
                      v-model="form.num_profissionais_bloco"
                      name="num_profissionais_bloco"
                      type="number"
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-checkbox
                      false-value="0"
                      true-value="1"
                      v-model="form.cirurgia_limpa"
                      :label="`cirurgia_limpa`"
                    ></v-checkbox>
                  </v-col>
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-checkbox
                      false-value="0"
                      true-value="1"
                      v-model="form.anestesia_geral"
                      :label="`anestesia_geral`"
                    ></v-checkbox>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-checkbox
                      false-value="0"
                      true-value="1"
                      v-model="form.emergencia"
                      :label="`emergencia`"
                    ></v-checkbox>
                  </v-col>
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-checkbox
                      false-value="0"
                      true-value="1"
                      v-model="form.protese"
                      :label="`protese`"
                    ></v-checkbox>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-checkbox
                      false-value="0"
                      true-value="1"
                      v-model="form.cirurgia_videolaparoscopica"
                      :label="`cirurgia_videolaparoscopica`"
                    ></v-checkbox>
                  </v-col>
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-checkbox
                      false-value="0"
                      true-value="1"
                      v-model="form.iric"
                      :label="`protese`"
                    ></v-checkbox>
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn color="warning" @click="onReset">Reset</v-btn>
              <v-btn color="success" @click="onSubmit">Consultar</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  name: "Consult",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      form: {
        tipo_cuirurgia_especifica: "",
        tipo_cirurgia: "",
        hospital: "",
        num_internacao: "",
        primeira_internacao: "",
        idade_anos: "",
        acima_70_anos: "",
        t_ate_cirurgia: "",
        T_Ate_Maior_4: "",
        duracao_cirurgia: "",
        Duracao_Acima_Duas_Horas: "",
        potencial_contaminacao: "",
        cirurgia_limpa: "0",
        anestesia_geral: "0",
        emergencia: "0",
        gravidade_asa: "",
        ASA_Maior_2: "",
        protese: "0",
        cirurgia_videolaparoscopica: "0",
        iric: "0",
        num_procedimentos: "",
        Mais_de_Um_Proc: "",
        num_profissionais_bloco: "",
        Acima_4_Profissionais: ""
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
      boolena_options: [
        { value: 0, text: "Não" },
        { value: 1, text: "Sim" }
      ]
    };
  },
  methods: {
    validaCampos() {
      if (Number(this.form.num_internacao) == 1) {
        this.form.primeira_internacao = "1";
      } else {
        this.form.primeira_internacao = "0";
      }

      if (Number(this.form.idade_anos) >= 70) {
        this.form.acima_70_anos = "1";
      } else {
        this.form.acima_70_anos = "0";
      }

      if (Number(this.form.t_ate_cirurgia) > 4) {
        this.form.T_Ate_Maior_4 = "1";
      } else {
        this.form.T_Ate_Maior_4 = "0";
      }

      if (Number(this.form.duracao_cirurgia) > 2) {
        this.form.Duracao_Acima_Duas_Horas = "1";
      } else {
        this.form.Duracao_Acima_Duas_Horas = "0";
      }

      if (Number(this.form.gravidade_asa) > 2) {
        this.form.ASA_Maior_2 = "1";
      } else {
        this.form.ASA_Maior_2 = "0";
      }

      if (Number(this.form.num_procedimentos) > 1) {
        this.form.Mais_de_Um_Proc = "1";
      } else {
        this.form.Mais_de_Um_Proc = "0";
      }

      if (Number(this.form.num_profissionais_bloco) > 4) {
        this.form.Acima_4_Profissionais = "1";
      } else {
        this.form.Acima_4_Profissionais = "0";
      }
    },
    async onSubmit() {
      this.validaCampos();
      console.log(this.form);
      // await axios
      //   .post(`http://localhost:8080/buscar`, {
      await axios
        .post(`http://52.44.99.70:5001/buscar`, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json;charset=UTF-8"
          },
          body: this.form
        })
        .then(response => {
          alert(
            "Probabilidade de infecção: " +
              parseFloat(response.data).toFixed(4) * 100 +
              "%"
          );
          this.$awn.success("Sucesso");
        })
        .catch(e => {
          alert(e);
          this.$awn.alert("Erro");
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
