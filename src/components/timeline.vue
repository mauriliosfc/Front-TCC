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
            <v-card-title class="headline">1º {{ text.artigos }}</v-card-title>
            <v-card-text>{{ text.titulo }}RISK PREDICTION FOR SURGICAL SITE INFECTION IN CRANIOTOMY
PATIENTS</v-card-text>
            <v-card-text>{{ text.congresso }}Abstracts from the 5th International Conference on Prevention & Infection Control (ICPIC 2019)</v-card-text>
            <v-card-text>{{ text.revista }}Antimicrobial Resistance & Infection Control</v-card-text>
            <v-card-text>DOI: <a href="https://aricjournal.biomedcentral.com/articles/10.1186/s13756-019-0567-6" target="_blank">1º ICPIC</a></v-card-text >
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
            <v-card-title class="headline">2º {{ text.artigos }}</v-card-title>
            <v-card-text>{{ text.titulo }}RISK PREDICTION FOR SURGICAL SITE INFECTION IN CRANIOTOMY
PATIENTS</v-card-text>
            <v-card-text>{{ text.congresso }}Abstracts from the 5th International Conference on Prevention & Infection Control (ICPIC 2019)</v-card-text>
            <v-card-text>{{ text.revista }}Antimicrobial Resistance & Infection Control</v-card-text>
            <v-card-text>DOI: <a href="https://aricjournal.biomedcentral.com/articles/10.1186/s13756-019-0567-6" target="_blank">2º ICPIC</a></v-card-text >
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
            <v-card-title class="headline">3º {{ text.artigos }}</v-card-title>
            <v-card-text>{{ text.titulo }}RISK PREDICTION FOR SURGICAL SITE INFECTION IN CRANIOTOMY
PATIENTS</v-card-text>
            <v-card-text>{{ text.congresso }}Abstracts from the 5th International Conference on Prevention & Infection Control (ICPIC 2019)</v-card-text>
            <v-card-text>{{ text.revista }}Antimicrobial Resistance & Infection Control</v-card-text>
            <v-card-text>DOI: <a href="https://aricjournal.biomedcentral.com/articles/10.1186/s13756-019-0567-6" target="_blank">3º ICPIC</a></v-card-text >
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
            <v-card-title class="headline">4º {{ text.artigos }}</v-card-title>
            <v-card-text>{{ text.titulo }}RISK PREDICTION FOR SURGICAL SITE INFECTION IN CRANIOTOMY
PATIENTS</v-card-text>
            <v-card-text>{{ text.congresso }}Abstracts from the 5th International Conference on Prevention & Infection Control (ICPIC 2019)</v-card-text>
            <v-card-text>{{ text.revista }}Antimicrobial Resistance & Infection Control</v-card-text>
            <v-card-text>DOI: <a href="https://aricjournal.biomedcentral.com/articles/10.1186/s13756-019-0567-6" target="_blank">4º ICPIC</a></v-card-text>
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
            <v-card-title class="headline">5º {{ text.artigos }}</v-card-title>
            <v-card-text>{{ text.titulo }}RISK PREDICTION FOR SURGICAL SITE INFECTION IN CRANIOTOMY
PATIENTS</v-card-text>
            <v-card-text>{{ text.congresso }}Abstracts from the 5th International Conference on Prevention & Infection Control (ICPIC 2019)</v-card-text>
            <v-card-text>{{ text.revista }}Antimicrobial Resistance & Infection Control</v-card-text>
            <v-card-text>DOI: <a href="https://aricjournal.biomedcentral.com/articles/10.1186/s13756-019-0567-6" target="_blank">5º ICPIC</a></v-card-text>
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
            <v-card-title class="headline">6º {{ text.artigos }}</v-card-title>
            <v-card-text>{{ text.titulo }}RISK PREDICTION FOR SURGICAL SITE INFECTION IN CRANIOTOMY
PATIENTS</v-card-text>
            <v-card-text>{{ text.congresso }}Abstracts from the 5th International Conference on Prevention & Infection Control (ICPIC 2019)</v-card-text>
            <v-card-text>{{ text.revista }}Antimicrobial Resistance & Infection Control</v-card-text>
            <v-card-text>DOI: <a href="https://aricjournal.biomedcentral.com/articles/10.1186/s13756-019-0567-6" target="_blank">6º ICPIC</a></v-card-text>
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
            <v-card-title class="headline">7º {{ text.artigos }}</v-card-title>
            <v-card-text>{{ text.titulo }} Prediction of Surgical Risk in General Surgeries: Process Optimization Through Support Vector Machine (SVM) Algorithm</v-card-text>
            <v-card-text>{{ text.congresso }} The Sixth Decennial International Conference on Healthcare-Associated Infections</v-card-text>
            <v-card-text>{{ text.revista }} Infection Control & Hospital Epidemiology (Cambridge University Press)</v-card-text>
            <v-card-text>DOI: <a href="https://www.cambridge.org/core/journals/infection-control-and-hospital-epidemiology/article/artificial-neural-networks-applied-to-prediction-to-assess-the-likelihood-of-surgical-site-infection-in-different-surgeries/7E8DC5E049E7C24D5047B5E42D4B769C" target="_blank">1º SHEA dECENNIAL 2020</a></v-card-text
            >
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
            <v-card-title class="headline">8º {{ text.artigos }}</v-card-title>
            <v-card-text>{{ text.titulo }} Prediction of Surgical Risk in General Surgeries: Process Optimization Through Support Vector Machine (SVM) Algorithm</v-card-text>
            <v-card-text>{{ text.congresso }} The Sixth Decennial International Conference on Healthcare-Associated Infections</v-card-text>
            <v-card-text>{{ text.revista }} Infection Control & Hospital Epidemiology (Cambridge University Press)</v-card-text>
            <v-card-text>DOI: <a href="https://www.cambridge.org/core/journals/infection-control-and-hospital-epidemiology/article/automated-prediction-of-surgical-site-infection-coronary-artery-bypass-cabg-grafting-surgery/E8A86E9840DB4D8262959D3E63694BA2" target="_blank">2º SHEA dECENNIAL 2020</a></v-card-text
            >
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
            <v-card-title class="headline">9º {{ text.artigos }}</v-card-title>
            <v-card-text>{{ text.titulo }} Prediction of Surgical Risk in General Surgeries: Process Optimization Through Support Vector Machine (SVM) Algorithm</v-card-text>
            <v-card-text>{{ text.congresso }} The Sixth Decennial International Conference on Healthcare-Associated Infections</v-card-text>
            <v-card-text>{{ text.revista }} Infection Control & Hospital Epidemiology (Cambridge University Press)</v-card-text>
            <v-card-text>DOI: <a href="https://www.cambridge.org/core/journals/infection-control-and-hospital-epidemiology/article/automated-prediction-of-surgical-site-infection-coronary-artery-bypass-cabg-grafting-surgery/E8A86E9840DB4D8262959D3E63694BA2" target="_blank">3º SHEA dECENNIAL 2020</a></v-card-text
            >
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
            <v-card-title class="headline">10º {{ text.artigos }}</v-card-title>
            <v-card-text>{{ text.titulo }} Prediction of Surgical Risk in General Surgeries: Process Optimization Through Support Vector Machine (SVM) Algorithm</v-card-text>
            <v-card-text>{{ text.congresso }} The Sixth Decennial International Conference on Healthcare-Associated Infections</v-card-text>
            <v-card-text>{{ text.revista }} Infection Control & Hospital Epidemiology (Cambridge University Press)</v-card-text>
            <v-card-text>DOI: <a href="https://www.cambridge.org/core/journals/infection-control-and-hospital-epidemiology/article/pattern-recognition-algorithms-for-predicting-surgical-site-infection-in-abdominal-hysterectomy/7DC9242394DBC3798151DCC98F2C9AB7" target="_blank">4º SHEA dECENNIAL 2020</a></v-card-text
            >
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
            <v-card-title class="headline">11º {{ text.artigos }}</v-card-title>
            <v-card-text>{{ text.titulo }} Prediction of Surgical Risk in General Surgeries: Process Optimization Through Support Vector Machine (SVM) Algorithm</v-card-text>
            <v-card-text>{{ text.congresso }} The Sixth Decennial International Conference on Healthcare-Associated Infections</v-card-text>
            <v-card-text>{{ text.revista }} Infection Control & Hospital Epidemiology (Cambridge University Press)</v-card-text>
            <v-card-text>DOI: <a href="https://www.cambridge.org/core/journals/infection-control-and-hospital-epidemiology/article/prediction-of-surgical-risk-in-general-surgeries-process-optimization-through-support-vector-machine-svm-algorithm/88C04CA234989C990093098518913107" target="_blank">5º SHEA dECENNIAL 2020</a></v-card-text
            >
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
            <v-card-title class="headline">12º {{ text.artigos }}</v-card-title>
            <v-card-text>{{ text.titulo }} Prediction of Surgical Risk in General Surgeries: Process Optimization Through Support Vector Machine (SVM) Algorithm</v-card-text>
            <v-card-text>{{ text.congresso }} IDWEEK</v-card-text>
            <v-card-text>{{ text.revista }} Open Forum Infectious Diseases</v-card-text>
            <v-card-text>DOI: <a href="https://academic.oup.com/ofid/article/7/Supplement_1/S476/6057177" target="_blank">1º IDWEEK 2020</a></v-card-text
            >
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
            <v-card-title class="headline">13º {{ text.artigos }}</v-card-title>
            <v-card-text>{{ text.titulo }} Prediction of Surgical Risk in General Surgeries: Process Optimization Through Support Vector Machine (SVM) Algorithm</v-card-text>
            <v-card-text>{{ text.congresso }} IDWEEK</v-card-text>
            <v-card-text>{{ text.revista }} Open Forum Infectious Diseases</v-card-text>
            <v-card-text>DOI: <a href="https://academic.oup.com/ofid/article/7/Supplement_1/S476/6057177" target="_blank">2º IDWEEK 2020</a></v-card-text
            >
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
            <v-card-title class="headline">14º {{ text.artigos }}</v-card-title>
            <v-card-text>{{ text.titulo }} Prediction of Surgical Risk in General Surgeries: Process Optimization Through Support Vector Machine (SVM) Algorithm</v-card-text>
            <v-card-text>{{ text.congresso }} IDWEEK</v-card-text>
            <v-card-text>{{ text.revista }} Open Forum Infectious Diseases</v-card-text>
            <v-card-text>DOI: <a href="https://academic.oup.com/ofid/article/7/Supplement_1/S476/6057177" target="_blank">3º IDWEEK 2020</a></v-card-text
            >
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
            <v-card-title class="headline">15º {{ text.artigos }}</v-card-title>
            <v-card-text>{{ text.titulo }} Prediction of Surgical Risk in General Surgeries: Process Optimization Through Support Vector Machine (SVM) Algorithm</v-card-text>
            <v-card-text>{{ text.congresso }} IDWEEK</v-card-text>
            <v-card-text>{{ text.revista }} Open Forum Infectious Diseases</v-card-text>
            <v-card-text>DOI: <a href="https://academic.oup.com/ofid/article/7/Supplement_1/S476/6057177" target="_blank">4º IDWEEK 2020</a></v-card-text
            >
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
            <v-card-title class="headline">15º {{ text.artigos }}</v-card-title>
            <v-card-text>{{ text.titulo }} Prediction of Surgical Risk in General Surgeries: Process Optimization Through Support Vector Machine (SVM) Algorithm</v-card-text>
            <v-card-text>{{ text.congresso }} IDWEEK</v-card-text>
            <v-card-text>{{ text.revista }} Open Forum Infectious Diseases</v-card-text>
            <v-card-text>DOI: <a href="https://academic.oup.com/ofid/article/7/Supplement_1/S476/6057177" target="_blank">5º IDWEEK 2020</a></v-card-text
            >
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
            <v-card-title class="headline">16º {{ text.artigos }}</v-card-title>
            <v-card-text>{{ text.titulo }} Prediction of Surgical Risk in General Surgeries: Process Optimization Through Support Vector Machine (SVM) Algorithm</v-card-text>
            <v-card-text>{{ text.congresso }} IDWEEK</v-card-text>
            <v-card-text>{{ text.revista }} Open Forum Infectious Diseases</v-card-text>
            <v-card-text>DOI: <a href="https://academic.oup.com/ofid/article/7/Supplement_1/S476/6057177" target="_blank">6º IDWEEK 2020</a></v-card-text
            >
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
            <v-card-title class="headline">17º {{ text.artigos }}</v-card-title>
            <v-card-text>{{ text.titulo }} Prediction of Surgical Risk in General Surgeries: Process Optimization Through Support Vector Machine (SVM) Algorithm</v-card-text>
            <v-card-text>{{ text.congresso }} IDWEEK</v-card-text>
            <v-card-text>{{ text.revista }} Open Forum Infectious Diseases</v-card-text>
            <v-card-text>DOI: <a href="https://academic.oup.com/ofid/article/7/Supplement_1/S476/6057177" target="_blank">7º IDWEEK 2020</a></v-card-text
            >
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
            <v-card-title class="headline">18º {{ text.artigos }}</v-card-title>
            <v-card-text>{{ text.titulo }} Prediction of Surgical Risk in General Surgeries: Process Optimization Through Support Vector Machine (SVM) Algorithm</v-card-text>
            <v-card-text>{{ text.congresso }} IDWEEK</v-card-text>
            <v-card-text>{{ text.revista }} Open Forum Infectious Diseases</v-card-text>
            <v-card-text>DOI: <a href="https://academic.oup.com/ofid/article/7/Supplement_1/S476/6057177" target="_blank">8º IDWEEK 2020</a></v-card-text
            >
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
        artigos: "Artigo publicado",
        titulo: "Titulo: ",
        congresso: "Congresso: ",
        revista: "Revista: ",
      },
      eng: {
        suica: "SWITZERLAND",
        artigos: "Published article",
        titulo: "Title: ",
        congresso: "Congress: ",
        revista: "Magazine: ",
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