<template>
  <v-app>
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="12" md="12">
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
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
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-row align="center" justify="center">
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-select
                      v-model="form.Tipo_Cirurgia_Especifica"
                      :items="text_tce.tce_options"
                      menu-props="auto"
                      :label="text.TCP"
                      :rules="[(v) => !!v || 'Item is required']"
                      required
                    ></v-select>
                  </v-col>
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-text-field
                      :label="text.NDI"
                      min="0"
                      v-model="form.Num_Internacao"
                      name="Num_Internacao"
                      type="number"
                      :rules="[(v) => !!v || 'Item is required']"
                      required
                    />
                  </v-col>
                </v-row>
                <v-row align="center" justify="center">
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-text-field
                      :label="text.IDD"
                      min="0"
                      v-model="form.Idade_Anos"
                      name="Idade_Anos"
                      type="number"
                      :rules="[(v) => !!v || 'Item is required']"
                      required
                    />
                  </v-col>
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-text-field
                      :label="text.TAC"
                      min="0"
                      v-model="form.T_Ate_Cirurgia"
                      name="T_Ate_Cirurgia"
                      type="number"
                      :rules="[(v) => !!v || 'Item is required']"
                      required
                    />
                  </v-col>
                </v-row>
                <v-row align="center" justify="center">
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-text-field
                      :label="text.NP"
                      min="0"
                      v-model="form.Num_Procedimentos"
                      name="Num_Procedimentos"
                      type="number"
                      :rules="[(v) => !!v || 'Item is required']"
                      required
                    />
                  </v-col>
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-text-field
                      :label="text.GA"
                      min="1"
                      max="5"
                      v-model="form.Gravidade_ASA"
                      name="Gravidade_ASA"
                      type="number"
                      :rules="[(v) => !!v || 'Item is required']"
                      required
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-checkbox
                      false-value="0"
                      true-value="1"
                      v-model="form.Cirurgia_Limpa"
                      :label="text.CL"
                    ></v-checkbox>
                  </v-col>
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-checkbox
                      false-value="0"
                      true-value="1"
                      v-model="form.Anestesia_Geral"
                      :label="text.AG"
                    ></v-checkbox>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-checkbox
                      false-value="0"
                      true-value="1"
                      v-model="form.Emergencia"
                      :label="text.EM"
                    ></v-checkbox>
                  </v-col>
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-checkbox
                      false-value="0"
                      true-value="1"
                      v-model="form.Protese"
                      :label="text.PRO"
                    ></v-checkbox>
                  </v-col>
                </v-row>
                <v-row> </v-row>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn  color="yellow darken-2" class="mr-4" @click="backpage()">Voltar</v-btn>
              <v-btn  color="red darken-2" class="mr-4" @click="onReset">RESET</v-btn>
              <v-btn :disabled="!valid" color="primary" class="mr-4" @click="onSubmit">{{ text.CON }}</v-btn>              
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <consultDetail :dado="dado" :dialog="showDialog"></consultDetail>
    </v-container>
  </v-app>
</template>

<script>
import axios from "axios";
import ConsultDetailVue from "./ConsultDetail.vue";
export default {
  components: {
    consultDetail: ConsultDetailVue,
  },
  name: "Consult",
  data() {
    return {
      valid: true,

      showDialog: false,
      dado: null,
      msg: "Welcome to Your Vue.js App",
      languages: ["Portuguese", "English"],
      pt: {
        CRC: "Consultar Risco Cirurgico",
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
        CRC: "Surgical Risk Consultation - ISS Predictive Consulting",
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
        Tipo_Cirurgia_Especifica: "",
        Num_Internacao: "",
        Idade_Anos: "",
        T_Ate_Cirurgia: "",
        Duracao_Cirurgia: "0",
        Cirurgia_Limpa: "0",
        Anestesia_Geral: "0",
        Emergencia: "0",
        Gravidade_ASA: "",
        Protese: "0",
        Num_Procedimentos: "",
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
    this.validate();
    this.reset ();
  },
  methods: {
    validate () {
        this.showDialog = false;
        this.$refs.form.onSubmit()
    },
    reset  () {
        this.$refs.form.onReset()
    },
    setStorage() {
      if (sessionStorage.getItem("language") == null) {
        sessionStorage.setItem("language", "English");
      }
      this.language = sessionStorage.getItem("language");
    },
    backpage() {
      history.back()
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
    async onSubmit() {
      if(!this.valid) return;
      console.log(this.form);
      this.showDialog = false;
      // const authToken = "YOUR_AUTH_TOKEN"; // Replace this with your actual token

      const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json;charset=UTF-8",
          // Authorization: `Bearer ${authToken}`, // Add the token to the Authorization header
        },
      };

      try {
        const response = await axios.post(
          "https://api-az-infection-prediction.onrender.com/score",
          {
            "input_data": {
              "columns": [
                "Tipo_Cirurgia_Especifica",
                "Tipo_Cirurgia",
                "Num_Internacao",
                "Primeira_Internacao",
                "Idade_Anos",
                "Acima_70_Anos",
                "T_Ate_Cirurgia",
                "T_Ate_Maior_4",
                "Duracao_Cirurgia",
                "Duracao_Acima_Duas_Horas",
                "Potencial_Contaminacao",
                "Cirurgia_Limpa",
                "Anestesia_Geral",
                "Emergencia",
                "Gravidade_ASA",
                "ASA_Maior_2",
                "Protese",
                "Cirurgia_Videolaparoscopíca",
                "IRIC",
                "Num_Procedimentos",
                "Mais_de_Um_Proc",
                "Num_Profissionais_Bloco",
                "Acima_4_Profissionais"
              ],
              "index": [0],
              "data": [
                {
                  "Tipo_Cirurgia_Especifica": 1,
                  "Tipo_Cirurgia": this.form.Tipo_Cirurgia_Especifica,
                  "Num_Internacao": this.form.Num_Internacao,
                  "Primeira_Internacao": this.form.Num_Internacao == 1 ? 1 : 0,
                  "Idade_Anos": this.form.Idade_Anos,
                  "Acima_70_Anos": this.form.Idade_Anos > 70 ? 1 : 0,
                  "T_Ate_Cirurgia": this.form.T_Ate_Cirurgia,
                  "T_Ate_Maior_4": this.form.T_Ate_Cirurgia > 4 ? 1 : 0,
                  "Duracao_Cirurgia": this.form.Duracao_Cirurgia,
                  "Duracao_Acima_Duas_Horas": this.form.Duracao_Cirurgia > 2 ? 1 : 0,
                  "Potencial_Contaminacao": 1,
                  "Cirurgia_Limpa": this.form.Cirurgia_Limpa,
                  "Anestesia_Geral": this.form.Anestesia_Geral,
                  "Emergencia": this.form.Emergencia,
                  "Gravidade_ASA": this.form.Gravidade_ASA,
                  "ASA_Maior_2": this.form.Gravidade_ASA > 2 ? 1 :0,
                  "Protese": this.form.Protese,
                  "Cirurgia_Videolaparoscopíca": [1,3,5,7,9].includes(this.form.Tipo_Cirurgia_Especifica) ? 1 : 0 ,
                  "IRIC": 1,
                  "Num_Procedimentos": this.form.Num_Procedimentos,
                  "Mais_de_Um_Proc": this.form.Num_Procedimentos > 1 ? 1 : 0,
                  "Num_Profissionais_Bloco": 4,
                  "Acima_4_Profissionais": 0
                }
              ]
            }
          },      
          config
        );

        this.dado = response.data;
        console.log('teste',response);
        this.showDialog = true;    
      } catch (error) {
        console.log(error);
        this.$awn.alert("Erro");
      }
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form = {
        Tipo_Cirurgia_Especifica: "",
        Num_Internacao: "",
        Idade_Anos: "",
        T_Ate_Cirurgia: "",
        Duracao_Cirurgia: "0",
        Cirurgia_Limpa: "0",
        Anestesia_Geral: "0",
        Emergencia: "0",
        Gravidade_ASA: "",
        Protese: "0",
        Num_Procedimentos: "",
      };
    },
  },
};
</script>

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