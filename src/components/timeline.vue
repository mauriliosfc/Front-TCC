<template>
  <div id="app">
    <v-app id="fundo1">
      <div id="comboboxContatos">
      <v-combobox
        @change="setLanguage()"
        v-model="language"
        :items="languages"
        label="Language"
        :auto-select-first="true"
        v-on:change="onChange"
      ></v-combobox>
    </div>
      <v-timeline>
        <v-timeline-item v-for="n in 1" :key="n" large>
          <template v-slot:icon>
            <v-avatar>
              <img src="../assets/icpic 2019.png"/>
            </v-avatar>
          </template>
          <template v-slot:opposite>
            <span>ICPIC - {{ text.suica }} 2019</span>
          </template>
          <v-card class="elevation-2 " color="amber lighten-1">
            <v-card-title class="headline">{{ text.artigos }} ICPIC 2019 - 1</v-card-title>
            <v-card-text>{{ text.titulo }}RISK PREDICTION FOR SURGICAL SITE INFECTION IN CRANIOTOMY
PATIENTS</v-card-text>
            <v-card-text>{{ text.congresso }}Abstracts from the 5th International Conference on Prevention & Infection Control (ICPIC 2019)</v-card-text>
            <v-card-text>{{ text.revista }}Antimicrobial Resistance & Infection Control</v-card-text>
            <v-card-text>DOI:<a href="https://doi.org/10.1186/s13756-019-0567-6" target="_blank">https://doi.org/10.1186/s13756-019-0567-6</a></v-card-text >
            <v-card-text>{{ text.pagina }}34</v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item v-for="n in 1" :key="n" large>
          <template v-slot:icon>
            <v-avatar>
              <img src="../assets/icpic 2019.png"/>
            </v-avatar>
          </template>
          <template v-slot:opposite>
            <span>ICPIC - {{ text.suica }} 2019</span>
          </template>
          <v-card class="elevation-2" color="amber lighten-1">
            <v-card-title class="headline">{{ text.artigos }} ICPIC 2019 - 2</v-card-title>
            <v-card-text>{{ text.titulo }}RISK PREDICTION FOR SURGICAL SITE INFECTION IN CRANIOTOMY
PATIENTS</v-card-text>
            <v-card-text>{{ text.congresso }}Abstracts from the 5th International Conference on Prevention & Infection Control (ICPIC 2019)</v-card-text>
            <v-card-text>{{ text.revista }}Antimicrobial Resistance & Infection Control</v-card-text>
            <v-card-text>DOI:<a href="https://doi.org/10.1186/s13756-019-0567-6" target="_blank">https://doi.org/10.1186/s13756-019-0567-6</a></v-card-text >
            <v-card-text>{{ text.pagina }}34</v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item v-for="n in 1" :key="n" large>
          <template v-slot:icon>
            <v-avatar>
              <img src="../assets/icpic 2019.png"/>
            </v-avatar>
          </template>
          <template v-slot:opposite>
            <span>ICPIC - {{ text.suica }} 2019</span>
          </template>
          <v-card class="elevation-2" color="amber lighten-1">
            <v-card-title class="headline">{{ text.artigos }} ICPIC 2019 - 3</v-card-title>
            <v-card-text>{{ text.titulo }}RISK PREDICTION FOR SURGICAL SITE INFECTION IN CRANIOTOMY
PATIENTS</v-card-text>
            <v-card-text>{{ text.congresso }}Abstracts from the 5th International Conference on Prevention & Infection Control (ICPIC 2019)</v-card-text>
            <v-card-text>{{ text.revista }}Antimicrobial Resistance & Infection Control</v-card-text>
            <v-card-text>DOI:<a href="https://doi.org/10.1186/s13756-019-0567-6" target="_blank">https://doi.org/10.1186/s13756-019-0567-6</a></v-card-text >
            <v-card-text>{{ text.pagina }}34</v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item v-for="n in 1" :key="n" large>
          <template v-slot:icon>
            <v-avatar>
              <img src="../assets/icpic 2019.png"/>
            </v-avatar>
          </template>
          <template v-slot:opposite>
            <span>ICPIC - {{ text.suica }} 2019</span>
          </template>
          <v-card class="elevation-2" color="amber lighten-1">
            <v-card-title class="headline">{{ text.artigos }} ICPIC 2019 - 4</v-card-title>
            <v-card-text>{{ text.titulo }}RISK PREDICTION FOR SURGICAL SITE INFECTION IN CRANIOTOMY
PATIENTS</v-card-text>
            <v-card-text>{{ text.congresso }}Abstracts from the 5th International Conference on Prevention & Infection Control (ICPIC 2019)</v-card-text>
            <v-card-text>{{ text.revista }}Antimicrobial Resistance & Infection Control</v-card-text>
            <v-card-text>DOI: <a href="https://doi.org/10.1186/s13756-019-0567-6" target="_blank">https://doi.org/10.1186/s13756-019-0567-6</a></v-card-text>
            <v-card-text>{{ text.pagina }}34 - 35</v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item v-for="n in 1" :key="n" large>
          <template v-slot:icon>
            <v-avatar>
              <img src="../assets/icpic 2019.png"/>
            </v-avatar>
          </template>
          <template v-slot:opposite>
            <span>ICPIC - {{ text.suica }} 2019</span>
          </template>
          <v-card class="elevation-2" color="amber lighten-1">
            <v-card-title class="headline">{{ text.artigos }} ICPIC 2019 - 5</v-card-title>
            <v-card-text>{{ text.titulo }}RISK PREDICTION FOR SURGICAL SITE INFECTION IN CRANIOTOMY
PATIENTS</v-card-text>
            <v-card-text>{{ text.congresso }}Abstracts from the 5th International Conference on Prevention & Infection Control (ICPIC 2019)</v-card-text>
            <v-card-text>{{ text.revista }}Antimicrobial Resistance & Infection Control</v-card-text>
            <v-card-text>DOI<a href="https://doi.org/10.1186/s13756-019-0567-6o" target="_blank">https://doi.org/10.1186/s13756-019-0567-6</a></v-card-text>
            <v-card-text>{{ text.pagina }}34 - 35</v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item v-for="n in 1" :key="n" large >
          <template v-slot:icon>
            <v-avatar>
              <img src="../assets/icpic 2019.png"/>
            </v-avatar>
          </template>
          <template v-slot:opposite>
            <span>ICPIC - {{ text.suica }} 2019</span>
          </template>
          <v-card class="elevation-2" color="amber lighten-1">
            <v-card-title class="headline">{{ text.artigos }} ICPIC 2019 - 6</v-card-title>
            <v-card-text>{{ text.titulo }}RISK PREDICTION FOR SURGICAL SITE INFECTION IN CRANIOTOMY
PATIENTS</v-card-text>
            <v-card-text>{{ text.congresso }}Abstracts from the 5th International Conference on Prevention & Infection Control (ICPIC 2019)</v-card-text>
            <v-card-text>{{ text.revista }}Antimicrobial Resistance & Infection Control</v-card-text>
            <v-card-text>DOI: <a href="https://doi.org/10.1186/s13756-019-0567-6" target="_blank">https://doi.org/10.1186/s13756-019-0567-6</a></v-card-text>
            <v-card-text>{{ text.pagina }}34 - 35</v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item v-for="n in 1" :key="n" large color="grey lighten-2">
          <template v-slot:icon>
            <v-avatar>
              <img src="../assets/shea-cdc-.png"/>
            </v-avatar>
          </template>
          <template v-slot:opposite>
            <span>SHEA DECENNIAL 2020</span>
          </template>
          <v-card class="elevation-2" color="amber darken-2">
            <v-card-title class="headline">{{ text.artigos }}DECENNIAL 2020 - 1</v-card-title>
            <v-card-text>{{ text.titulo }} Prediction of Surgical Risk in General Surgeries: Process Optimization Through Support Vector Machine (SVM) Algorithm</v-card-text>
            <v-card-text>{{ text.congresso }} The Sixth Decennial International Conference on Healthcare-Associated Infections</v-card-text>
            <v-card-text>{{ text.revista }} Infection Control & Hospital Epidemiology (Cambridge University Press)</v-card-text>
            <v-card-text>DOI: <a href="https://doi.org/10.1017/ice.2020.639" target="_blank">https://doi.org/10.1017/ice.2020.639</a></v-card-text
            >
            <v-card-text>{{ text.pagina }} 1</v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item v-for="n in 1" :key="n" large color="grey lighten-2"> 
          <template v-slot:icon>
            <v-avatar>
              <img src="../assets/shea-cdc-.png"/>
            </v-avatar>
          </template>
          <template v-slot:opposite>
            <span>SHEA DECENNIAL 2020</span>
          </template>
          <v-card class="elevation-2" color="amber darken-2">
            <v-card-title class="headline">{{ text.artigos }}DECENNIAL 2020 - 2</v-card-title>
            <v-card-text>{{ text.titulo }} Prediction of Surgical Risk in General Surgeries: Process Optimization Through Support Vector Machine (SVM) Algorithm</v-card-text>
            <v-card-text>{{ text.congresso }} The Sixth Decennial International Conference on Healthcare-Associated Infections</v-card-text>
            <v-card-text>{{ text.revista }} Infection Control & Hospital Epidemiology (Cambridge University Press)</v-card-text>
            <v-card-text>DOI: <a href="https://doi.org/10.1017/ice.2020.648" target="_blank">https://doi.org/10.1017/ice.2020.648</a></v-card-text
            >
            <v-card-text>{{ text.pagina }}1</v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item v-for="n in 1" :key="n" large color="grey lighten-2">
          <template v-slot:icon>
            <v-avatar>
              <img src="../assets/shea-cdc-.png"/>
            </v-avatar>
          </template>
          <template v-slot:opposite>
            <span>SHEA DECENNIAL 2020</span>
          </template>
          <v-card class="elevation-2" color="amber darken-2">
            <v-card-title class="headline">{{ text.artigos }}DECENNIAL 2020 - 3</v-card-title>
            <v-card-text>{{ text.titulo }} Prediction of Surgical Risk in General Surgeries: Process Optimization Through Support Vector Machine (SVM) Algorithm</v-card-text>
            <v-card-text>{{ text.congresso }} The Sixth Decennial International Conference on Healthcare-Associated Infections</v-card-text>
            <v-card-text>{{ text.revista }} Infection Control & Hospital Epidemiology (Cambridge University Press)</v-card-text>
            <v-card-text>DOI: <a href="https://doi.org/10.1017/ice.2020.648" target="_blank">https://doi.org/10.1017/ice.2020.648</a></v-card-text
            >
            <v-card-text>{{ text.pagina }}1</v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item v-for="n in 1" :key="n" large color="grey lighten-2">
          <template v-slot:icon>
            <v-avatar>
              <img src="../assets/shea-cdc-.png"/>
            </v-avatar>
          </template>
          <template v-slot:opposite>
            <span>SHEA DECENNIAL 2020</span>
          </template>
          <v-card class="elevation-2" color="amber darken-2">
            <v-card-title class="headline">{{ text.artigos }}DECENNIAL 2020 - 4</v-card-title>
            <v-card-text>{{ text.titulo }} Prediction of Surgical Risk in General Surgeries: Process Optimization Through Support Vector Machine (SVM) Algorithm</v-card-text>
            <v-card-text>{{ text.congresso }} The Sixth Decennial International Conference on Healthcare-Associated Infections</v-card-text>
            <v-card-text>{{ text.revista }} Infection Control & Hospital Epidemiology (Cambridge University Press)</v-card-text>
            <v-card-text>DOI: <a href="https://doi.org/10.1017/ice.2020.958" target="_blank">https://doi.org/10.1017/ice.2020.958</a></v-card-text
            >
            <v-card-text>{{ text.pagina }}1 - 2</v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item v-for="n in 1" :key="n" large color="grey lighten-2">
          <template v-slot:icon>
            <v-avatar>
              <img src="../assets/shea-cdc-.png"/>
            </v-avatar>
          </template>
          <template v-slot:opposite>
            <span>SHEA DECENNIAL 2020</span>
          </template>
          <v-card class="elevation-2" color="amber darken-2">
            <v-card-title class="headline">{{ text.artigos }}DECENNIAL 2020 - 5</v-card-title>
            <v-card-text>{{ text.titulo }} Prediction of Surgical Risk in General Surgeries: Process Optimization Through Support Vector Machine (SVM) Algorithm</v-card-text>
            <v-card-text>{{ text.congresso }} The Sixth Decennial International Conference on Healthcare-Associated Infections</v-card-text>
            <v-card-text>{{ text.revista }} Infection Control & Hospital Epidemiology (Cambridge University Press)</v-card-text>
            <v-card-text>DOI: <a href="https://doi.org/10.1017/ice.2020.975" target="_blank">https://doi.org/10.1017/ice.2020.975</a></v-card-text
            >
            <v-card-text>{{ text.pagina }}1 - 2</v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item v-for="n in 1" :key="n" large color="grey lighten-2" >
          <template v-slot:icon>
            <v-avatar>
              <img src="../assets/IDWeek-Chasing-the-Sun_Full-Logo-OL-300x186.png"/>
            </v-avatar>
          </template>
          <template v-slot:opposite>
            <span>IDWEEK 2020</span>
          </template>
          <v-card class="elevation-2" color="amber darken-4">
            <v-card-title class="headline">{{ text.artigos }} IDWEEK 2020 - 1</v-card-title>
            <v-card-text>{{ text.titulo }} Prediction of Surgical Risk in General Surgeries: Process Optimization Through Support Vector Machine (SVM) Algorithm</v-card-text>
            <v-card-text>{{ text.congresso }} IDWEEK 2020</v-card-text>
            <v-card-text>{{ text.revista }} Open Forum Infectious Diseases</v-card-text>
            <v-card-text>DOI: <a href="https://doi.org/10.1093/ofid/ofaa439.1068" target="_blank">https://doi.org/10.1093/ofid/ofaa439.1068</a></v-card-text
            >
            <v-card-text>{{ text.pagina }}1 - 2</v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item v-for="n in 1" :key="n" large color="grey lighten-2">
          <template v-slot:icon>
            <v-avatar>
              <img src="../assets/IDWeek-Chasing-the-Sun_Full-Logo-OL-300x186.png"/>
            </v-avatar>
          </template>
          <template v-slot:opposite>
            <span>IDWEEK 2020</span>
          </template>
          <v-card class="elevation-2"  color="amber darken-4">
            <v-card-title class="headline">{{ text.artigos }} IDWEEK 2020 - 2</v-card-title>
            <v-card-text>{{ text.titulo }} Prediction of Surgical Risk in General Surgeries: Process Optimization Through Support Vector Machine (SVM) Algorithm</v-card-text>
            <v-card-text>{{ text.congresso }} IDWEEK 2020</v-card-text>
            <v-card-text>{{ text.revista }} Open Forum Infectious Diseases</v-card-text>
            <v-card-text>DOI: <a href="https://doi.org/10.1093/ofid/ofaa439.1068" target="_blank">https://doi.org/10.1093/ofid/ofaa439.1068</a></v-card-text
            >
            <v-card-text>{{ text.pagina }}1 - 2</v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item v-for="n in 1" :key="n" large color="grey lighten-2">
          <template v-slot:icon>
            <v-avatar>
              <img src="../assets/IDWeek-Chasing-the-Sun_Full-Logo-OL-300x186.png"/>
            </v-avatar>
          </template>
          <template v-slot:opposite>
            <span>IDWEEK 2020</span>
          </template>
          <v-card class="elevation-2" color="amber darken-4">
            <v-card-title class="headline">{{ text.artigos }} IDWEEK 2020 - 3</v-card-title>
            <v-card-text>{{ text.titulo }} Prediction of Surgical Risk in General Surgeries: Process Optimization Through Support Vector Machine (SVM) Algorithm</v-card-text>
            <v-card-text>{{ text.congresso }} IDWEEK 2020</v-card-text>
            <v-card-text>{{ text.revista }} Open Forum Infectious Diseases</v-card-text>
            <v-card-text>DOI: <a href="https://doi.org/10.1093/ofid/ofaa439.1068" target="_blank">https://doi.org/10.1093/ofid/ofaa439.1068</a></v-card-text
            >
            <v-card-text>{{ text.pagina }}1 - 2</v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item v-for="n in 1" :key="n" large color="grey lighten-2">
          <template v-slot:icon>
            <v-avatar>
              <img src="../assets/IDWeek-Chasing-the-Sun_Full-Logo-OL-300x186.png"/>
            </v-avatar>
          </template>
          <template v-slot:opposite>
            <span>IDWEEK 2020</span>
          </template>
          <v-card class="elevation-2"  color="amber darken-4">
            <v-card-title class="headline">{{ text.artigos }} IDWEEK 2020 - 4</v-card-title>
            <v-card-text>{{ text.titulo }} Prediction of Surgical Risk in General Surgeries: Process Optimization Through Support Vector Machine (SVM) Algorithm</v-card-text>
            <v-card-text>{{ text.congresso }} IDWEEK 2020</v-card-text>
            <v-card-text>{{ text.revista }} Open Forum Infectious Diseases</v-card-text>
            <v-card-text>DOI: <a href="https://doi.org/10.1093/ofid/ofaa439.1068" target="_blank">https://doi.org/10.1093/ofid/ofaa439.1068</a></v-card-text
            >
            <v-card-text>{{ text.pagina }}1 - 2</v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item v-for="n in 1" :key="n" large color="grey lighten-2">
          <template v-slot:icon>
            <v-avatar>
              <img src="../assets/IDWeek-Chasing-the-Sun_Full-Logo-OL-300x186.png"/>
            </v-avatar>
          </template>
          <template v-slot:opposite>
            <span>IDWEEK 2020</span>
          </template>
          <v-card class="elevation-2"  color="amber darken-4">
            <v-card-title class="headline">{{ text.artigos }} IDWEEK 2020 - 5</v-card-title>
            <v-card-text>{{ text.titulo }} Prediction of Surgical Risk in General Surgeries: Process Optimization Through Support Vector Machine (SVM) Algorithm</v-card-text>
            <v-card-text>{{ text.congresso }} IDWEEK 2020</v-card-text>
            <v-card-text>{{ text.revista }} Open Forum Infectious Diseases</v-card-text>
            <v-card-text>DOI: <a href="https://doi.org/10.1093/ofid/ofaa439.1068" target="_blank">https://doi.org/10.1093/ofid/ofaa439.1068</a></v-card-text
            >
            <v-card-text>{{ text.pagina }}1 - 2</v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item v-for="n in 1" :key="n" large color="grey lighten-2">
          <template v-slot:icon>
            <v-avatar>
              <img src="../assets/IDWeek-Chasing-the-Sun_Full-Logo-OL-300x186.png"/>
            </v-avatar>
          </template>
          <template v-slot:opposite>
            <span>IDWEEK 2020</span>
          </template>
          <v-card class="elevation-2"  color="amber darken-4">
            <v-card-title class="headline">{{ text.artigos }} IDWEEK 2020 - 6</v-card-title>
            <v-card-text>{{ text.titulo }} Prediction of Surgical Risk in General Surgeries: Process Optimization Through Support Vector Machine (SVM) Algorithm</v-card-text>
            <v-card-text>{{ text.congresso }} IDWEEK 2020</v-card-text>
            <v-card-text>{{ text.revista }} Open Forum Infectious Diseases</v-card-text>
            <v-card-text>DOI: <a href="https://doi.org/10.1093/ofid/ofaa439.1068" target="_blank">https://doi.org/10.1093/ofid/ofaa439.1068</a></v-card-text
            >
            <v-card-text>{{ text.pagina }}1 - 2</v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item v-for="n in 1" :key="n" large color="grey lighten-2">
          <template v-slot:icon>
            <v-avatar>
              <img src="../assets/IDWeek-Chasing-the-Sun_Full-Logo-OL-300x186.png"/>
            </v-avatar>
          </template>
          <template v-slot:opposite>
            <span>IDWEEK 2020</span>
          </template>
          <v-card class="elevation-2" color="amber darken-4">
            <v-card-title class="headline">{{ text.artigos }} IDWEEK 2020 - 7</v-card-title>
            <v-card-text>{{ text.titulo }} Prediction of Surgical Risk in General Surgeries: Process Optimization Through Support Vector Machine (SVM) Algorithm</v-card-text>
            <v-card-text>{{ text.congresso }} IDWEEK 2020</v-card-text>
            <v-card-text>{{ text.revista }} Open Forum Infectious Diseases</v-card-text>
            <v-card-text>DOI: <a href="https://doi.org/10.1093/ofid/ofaa439.1068" target="_blank">https://doi.org/10.1093/ofid/ofaa439.1068</a></v-card-text
            >
            <v-card-text>{{ text.pagina }}1 - 2</v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item v-for="n in 1" :key="n" large color="grey lighten-2">
          <template v-slot:icon>
            <v-avatar>
              <img src="../assets/IDWeek-Chasing-the-Sun_Full-Logo-OL-300x186.png"/>
            </v-avatar>
          </template>
          <template v-slot:opposite>
            <span>IDWEEK 2020</span>
          </template>
          <v-card class="elevation-2"  color="amber darken-4">
            <v-card-title class="headline">{{ text.artigos }} IDWEEK 2020 - 8</v-card-title>
            <v-card-text>{{ text.titulo }} Prediction of Surgical Risk in General Surgeries: Process Optimization Through Support Vector Machine (SVM) Algorithm</v-card-text>
            <v-card-text>{{ text.congresso }} IDWEEK 2020</v-card-text>
            <v-card-text>{{ text.revista }} Open Forum Infectious Diseases</v-card-text>
            <v-card-text>DOI: <a href="https://doi.org/10.1093/ofid/ofaa439.1068" target="_blank">https://doi.org/10.1093/ofid/ofaa439.1068</a></v-card-text
            >
            <v-card-text>{{ text.pagina }}1 - 2</v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      language: "",
      languages: ["Português", "English"],
      pt: {
        suica: "SUIÇA",
        artigos: "PAPER: ",
        titulo: "Titulo: ",
        congresso: "Congresso: ",
        revista: "Jornal: ",
        pagina: "Pagina: "
      },
      eng: {
        suica: "SWITZERLAND",
        artigos: "PAPER: ",
        titulo: "Title: ",
        congresso: "Congress: ",
        revista: "Journal: ",
        pagina: "Page: "
      },
      text: {},
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
      } else {
        this.text = this.pt;
      }
    },
  },
};
</script>

<style>
#fundo1{
  position: relative;
  background-color:#ffffff;
}
</style>