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
                      v-model="select"
                      :items="text_tce.tce_options"
                      :rules="[(v) => !!v || 'Item is required']"
                      menu-props="auto"
                      :label="text.TCP"
                      required
                    ></v-select>
                  </v-col>
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-text-field
                      :label="text.NDI"
                      min="0"
                      v-model="form.Num_Internacao"
                      :rules="[(v) => !!v || 'Item is required']"
                      name="Num_Internacao"
                      type="number"
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
                      :rules="[(v) => !!v || 'Item is required']"
                      name="Idade_Anos"
                      type="number"
                      required
                    />
                  </v-col>
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-text-field
                      :label="text.TAC"
                      min="0"
                      v-model="form.T_Ate_Cirurgia"
                      :rules="[(v) => !!v || 'Item is required']"
                      name="T_Ate_Cirurgia"
                      type="number"
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
                      :rules="[(v) => !!v || 'Item is required']"
                      type="number"
                      required
                    />
                  </v-col>
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-text-field
                      :label="text.GA"
                      min="1"
                      max="5"
                      v-model="form.Gravidade_ASA"
                      :rules="[(v) => !!v || 'Item is required']"
                      name="Gravidade_ASA"
                      type="number"
                      required
                    />
                  </v-col>
                </v-row>
                <!-- <v-row>
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-text-field
                      :label="text.DC"
                      min=0
                      v-model="form.Duracao_Cirurgia"
                      name="Duracao_Cirurgia"
                      type="number"
                    />
                  </v-col>
                </v-row> -->
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
              <v-btn color="red darken-2" @click="onReset">RESET</v-btn>
              <v-btn
                :disabled="!valid"
                class="mr-4"
                color="primary"
                @click="onSubmit"
                >{{ text.CON }}</v-btn
              >
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
      select: null,
      showDialog: false,
      dado: [],
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
    this.setValidate();
    this.setReset();
  },
  methods: {
    setValidate() {
      this.form.onSubmit();
    },
    setReset() {
      this.refs.form.onReset();
    },
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
    async onSubmit() {
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
          this.dado = response.data;
          this.showDialog = true;
          console.log(response);
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