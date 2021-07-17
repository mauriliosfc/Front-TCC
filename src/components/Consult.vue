<template>
  <v-app>
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="12" md="12">
          <v-card class="elevation-12">
            <v-toolbar color="success" dark flat>
              <v-toolbar-title class="flex text-center">{{
                text.CRC
              }}</v-toolbar-title>
              <div id="combobox_consult">
                <v-combobox
                  @change="setLanguage()"
                  v-model="language"
                  :items="languages"
                  label="Language"
                  :auto-select-first="true"
                  v-on:change="onChange"
                ></v-combobox>
              </div>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-row align="center" justify="center">
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-select
                      v-model="form.tipo_cuirurgia_especifica"
                      :items="text_tce.tce_options"
                      menu-props="auto"
                      :label="text.TCP"
                    ></v-select>
                  </v-col>
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-text-field
                      :label="text.NDI"
                      min=0
                      v-model="form.num_internacao"
                      name="num_internacao"
                      type="number"
                    />
                  </v-col>
                </v-row>
                <v-row align="center" justify="center">
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-text-field
                      :label="text.IDD"
                      min=0
                      v-model="form.idade_anos"
                      name="idade_anos"
                      type="number"
                    />
                  </v-col>
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-text-field
                      :label="text.TAC"
                      min=0
                      v-model="form.t_ate_cirurgia"
                      name="t_ate_cirurgia"
                      type="number"
                    />
                  </v-col>
                </v-row>
                <v-row align="center" justify="center">
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-text-field
                      :label="text.NP"
                      min=0
                      v-model="form.num_procedimentos"
                      name="num_procedimentos"
                      type="number"
                    />
                  </v-col>
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-text-field
                      :label="text.GA"
                      min=1
                      max=5
                      v-model="form.gravidade_asa"
                      name="gravidade_asa"
                      type="number"
                    />
                  </v-col>
                </v-row>
                <v-row align="center" justify="center">
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-text-field
                      :label="text.DC"
                      min=0
                      v-model="form.duracao_cirurgia"
                      name="duracao_cirurgia"
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
                      :label="text.CL"
                    ></v-checkbox>
                  </v-col>
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-checkbox
                      false-value="0"
                      true-value="1"
                      v-model="form.anestesia_geral"
                      :label="text.AG"
                    ></v-checkbox>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-checkbox
                      false-value="0"
                      true-value="1"
                      v-model="form.emergencia"
                      :label="text.EM"
                    ></v-checkbox>
                  </v-col>
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-checkbox
                      false-value="0"
                      true-value="1"
                      v-model="form.protese"
                      :label="text.PRO"
                    ></v-checkbox>
                  </v-col>
                </v-row>
                <v-row>
                </v-row>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn color="warning" @click="onReset">RESET</v-btn>
              <v-btn color="success" @click="onSubmit">{{ text.CON }}</v-btn>
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
      languages: ["Portuguese", "English"],
      pt: {
        CRC: "CONSULTA RISCO CIRURGICO",
        TCP: "TIPO CIRURGIA ESPECÍFICA",
        NDI: "NÚMERO DE INTERNAÇÕES",
        IDD: "IDADE",
        TAC: "TEMPO ATÉ A CIRURGIA",
        DC: "DURAÇÃO DA CIRURGIA",
        NP: "NÚMERO DE PROCEDIMENTOS",
        GA: "GRAVIDADE ASA",
        CL: "CIRURGIA LIMPA",
        EM: "EMERGÊNCIA",
        AG: "ANESTESIA GERAL",
        PRO: "PROTESE",
        CON: "CONSULTAR",
      },
      eng: {
        CRC: "SURGICAL RISK CONSULTATION",
        TCP: "SPECIFIC SURGERY TYPE",
        NDI: "NUMBER OF ADMISSIONS",
        IDD: "AGE",
        TAC: "TIME UNTIL SURGERY",
        DC: "DURATION OF SURGERY",
        NP: "NUMBER OF PROCEDURES",
        GA: "ASA",
        CL: "CLEAN SURGERY",
        EM: "EMERGENCY",
        AG: "GENERAL ANESTHESIA",
        PRO: "PROSTHESIS",
        CON: "CONSULT",
      },
      text: {},
      form: {
        tipo_cuirurgia_especifica: "",
        num_internacao: "",
        idade_anos: "",
        t_ate_cirurgia: "",
        duracao_cirurgia: "",
        cirurgia_limpa: "0",
        anestesia_geral: "0",
        emergencia: "0",
        gravidade_asa: "",
        protese: "0",
        num_procedimentos: "",
        primeira_internacao: "",
        acima_70_anos: "",
        T_Ate_Maior_4: "",
        Duracao_Acima_Duas_Horas: "",
        ASA_Maior_2: "",
        Mais_de_Um_Proc: "",
        Acima_4_Profissionais: "",
      },
      tce_options_pt: {
        tce_options: [
          { value: 1, text: "Laparotomia Exploradora – Videolaparoscópica" },
          { value: 2, text: "Laparotomia Exploradora" },
          { value: 3, text: "Herniorrafia – Videolaparoscópica" },
          { value: 4, text: "Herniorrafia" },
          { value: 5, text: "Colecistectomia – Videolaparoscópica" },
          { value: 6, text: "Colecistectomia" },
          { value: 7, text: "Histerectomia – Videolaparoscópica" },
          { value: 8, text: "Histerectomia" },
          { value: 9, text: "Apendicectomia – Videolaparoscópica" },
          { value: 1, text: "Apendicectomia" },
          { value: "d", text: "This one is disabled", disabled: true },
        ],
      },
      tce_options_eng: {
        tce_options: [
          { value: 1, text: "Exploratory Laparotomy - Videolaparoscopic" },
          { value: 2, text: "Exploratory Laparotomy" },
          { value: 3, text: "Herniorrhaphy - Videolaparoscopic" },
          { value: 4, text: "Herniorrhaphy" },
          { value: 5, text: "Cholecystectomy - Videolaparoscopic" },
          { value: 6, text: "Cholecystectomy" },
          { value: 7, text: "Hysterectomy - Videolaparoscopic" },
          { value: 8, text: "Hysterectomy" },
          { value: 9, text: "Appendectomy - Videolaparoscopic" },
          { value: 1, text: "Appendectomy" },
          { value: "d", text: "This one is disabled", disabled: true },
        ],
      },
      text_tce: {},
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
        this.text_tce = this.tce_options_eng;
      } else {
        this.text = this.pt;
        this.text_tce = this.tce_options_pt;
      }
    },
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
      //   .post(`http://localhost:5001/buscar`, {
      await axios
        .post(`https://api.infectioninsurgicalsites.com/buscar`, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json;charset=UTF-8",
          },
          body: this.form,
        })
        .then((response) => {
          alert(
            "Probabilidade de infecção: " +
              parseFloat(response.data).toFixed(4) * 100 +
              "%"
          );
          this.$awn.success("Sucesso");
        })
        .catch((e) => {
          console.log(e);
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
    },
  },
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
#toolbar_consult {
  text-align: right;
}
#combobox_consult {
  width: 110px;
  height: 35px;
  position: absolute;
  right: 0 px;
}
</style>
