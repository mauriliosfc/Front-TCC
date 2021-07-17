<template>
  <div id="app">
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
    <v-app>
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
          <v-card class="elevation-2">
            <v-card-title class="headline">1º {{ text.artigos }}</v-card-title>
            <v-card-text><a href="https://drive.google.com/file/d/1GFKH4ykNYnkr1NCMyklvKMmBm04wGQqw/view?usp=sharing">1º ICPIC</a></v-card-text
            >
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
          <v-card class="elevation-2">
            <v-card-title class="headline">2º {{ text.artigos }}</v-card-title>
            <v-card-text><a href="https://drive.google.com/file/d/1V-LTReJUjKgfOnGXaas5TvVrp1YRbCN-/view?usp=sharing">2º ICPIC</a></v-card-text
            >
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
          <v-card class="elevation-2">
            <v-card-title class="headline">3º {{ text.artigos }}</v-card-title>
            <v-card-text><a href="https://drive.google.com/file/d/1pD2RPDBwOPn3yydtXVGC1-47eu8vl_Rm/view?usp=sharing">3º ICPIC</a></v-card-text
            >
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
          <v-card class="elevation-2">
            <v-card-title class="headline">4º {{ text.artigos }}</v-card-title>
            <v-card-text><a href="https://drive.google.com/file/d/116pJkKqiwZmE3vbObboD9SF1LiNe2ypL/view?usp=sharing">4º ICPIC</a></v-card-text
            >
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
          <v-card class="elevation-2">
            <v-card-title class="headline">5º {{ text.artigos }}</v-card-title>
            <v-card-text><a href="https://drive.google.com/file/d/1W2Izo_YYT8L5-1IwMN5bOs_2DWpB23qS/view?usp=sharing">5º ICPIC</a></v-card-text
            >
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
          <v-card class="elevation-2">
            <v-card-title class="headline">6º {{ text.artigos }}</v-card-title>
            <v-card-text><a href="https://drive.google.com/file/d/1uQLQe5ypQryQrfyo0GJa9lyWovrfKJiH/view?usp=sharing">6º ICPIC</a></v-card-text
            >
          </v-card>
        </v-timeline-item>
        <v-timeline-item v-for="n in 1" :key="n" large>
          <template v-slot:icon>
            <v-avatar>
              <img src="../assets/shea-cdc-.png"/>
            </v-avatar>
          </template>
          <template v-slot:opposite>
            <span>SHEA DECENNIAL 2020</span>
          </template>
          <v-card class="elevation-2">
            <v-card-title class="headline">7º {{ text.artigos }}</v-card-title>
            <v-card-text><a href="https://drive.google.com/file/d/1__t-CkAyvdt5-fPkWLs7iq4ww2XomJdV/view?usp=sharing">1º SHEA dECENNIAL 2020</a></v-card-text
            >
          </v-card>
        </v-timeline-item>
        <v-timeline-item v-for="n in 1" :key="n" large>
          <template v-slot:icon>
            <v-avatar>
              <img src="../assets/shea-cdc-.png"/>
            </v-avatar>
          </template>
          <template v-slot:opposite>
            <span>SHEA DECENNIAL 2020</span>
          </template>
          <v-card class="elevation-2">
            <v-card-title class="headline">8º {{ text.artigos }}</v-card-title>
            <v-card-text><a href="https://drive.google.com/file/d/1ttHYvX6qWvZp5RmECSWSQJLMaQp6zE8j/view?usp=sharing">2º SHEA dECENNIAL 2020</a></v-card-text
            >
          </v-card>
        </v-timeline-item>
        <v-timeline-item v-for="n in 1" :key="n" large>
          <template v-slot:icon>
            <v-avatar>
              <img src="../assets/shea-cdc-.png"/>
            </v-avatar>
          </template>
          <template v-slot:opposite>
            <span>SHEA DECENNIAL 2020</span>
          </template>
          <v-card class="elevation-2">
            <v-card-title class="headline">9º {{ text.artigos }}</v-card-title>
            <v-card-text><a href="https://drive.google.com/file/d/1kmT5qGsZZbZ50Q1NuDC3MPzTdVIDy9Nh/view?usp=sharing">3º SHEA dECENNIAL 2020</a></v-card-text
            >
          </v-card>
        </v-timeline-item>
        <v-timeline-item v-for="n in 1" :key="n" large>
          <template v-slot:icon>
            <v-avatar>
              <img src="../assets/shea-cdc-.png"/>
            </v-avatar>
          </template>
          <template v-slot:opposite>
            <span>SHEA DECENNIAL 2020</span>
          </template>
          <v-card class="elevation-2">
            <v-card-title class="headline">10º {{ text.artigos }}</v-card-title>
            <v-card-text><a href="https://drive.google.com/file/d/1btrTssba-zeZ73bcb5EP4gxm5hEvBfJ8/view?usp=sharing">4º SHEA dECENNIAL 2020</a></v-card-text
            >
          </v-card>
        </v-timeline-item>
        <v-timeline-item v-for="n in 1" :key="n" large>
          <template v-slot:icon>
            <v-avatar>
              <img src="../assets/shea-cdc-.png"/>
            </v-avatar>
          </template>
          <template v-slot:opposite>
            <span>SHEA DECENNIAL 2020</span>
          </template>
          <v-card class="elevation-2">
            <v-card-title class="headline">11º {{ text.artigos }}</v-card-title>
            <v-card-text><a href="https://drive.google.com/file/d/1QkrM-IGAb8OPvFkTuhcmczZgEm7LH9zh/view?usp=sharing">5º SHEA dECENNIAL 2020</a></v-card-text
            >
          </v-card>
        </v-timeline-item>
        <v-timeline-item v-for="n in 1" :key="n" large>
          <template v-slot:icon>
            <v-avatar>
              <img src="../assets/IDWeek-Chasing-the-Sun_Full-Logo-OL-300x186.png"/>
            </v-avatar>
          </template>
          <template v-slot:opposite>
            <span>IDWEEK 2020</span>
          </template>
          <v-card class="elevation-2">
            <v-card-title class="headline">12º {{ text.artigos }}</v-card-title>
            <v-card-text><a href="https://drive.google.com/file/d/14Vu5KpSLP-P0tJ2pgSBliHgz28iuibLQ/view?usp=sharing">1º IDWEEK 2020</a></v-card-text
            >
          </v-card>
        </v-timeline-item>
        <v-timeline-item v-for="n in 1" :key="n" large>
          <template v-slot:icon>
            <v-avatar>
              <img src="../assets/IDWeek-Chasing-the-Sun_Full-Logo-OL-300x186.png"/>
            </v-avatar>
          </template>
          <template v-slot:opposite>
            <span>IDWEEK 2020</span>
          </template>
          <v-card class="elevation-2">
            <v-card-title class="headline">13º {{ text.artigos }}</v-card-title>
            <v-card-text><a href="https://drive.google.com/file/d/1canyQE9YQVhr0ghUkO9Exd3nD1svlg0f/view?usp=sharing">2º IDWEEK 2020</a></v-card-text
            >
          </v-card>
        </v-timeline-item>
        <v-timeline-item v-for="n in 1" :key="n" large>
          <template v-slot:icon>
            <v-avatar>
              <img src="../assets/IDWeek-Chasing-the-Sun_Full-Logo-OL-300x186.png"/>
            </v-avatar>
          </template>
          <template v-slot:opposite>
            <span>IDWEEK 2020</span>
          </template>
          <v-card class="elevation-2">
            <v-card-title class="headline">14º {{ text.artigos }}</v-card-title>
            <v-card-text><a href="https://drive.google.com/file/d/1wkOfHhFBd5rl2GyZPbwXB0yp0-QpY_1N/view?usp=sharing">3º IDWEEK 2020</a></v-card-text
            >
          </v-card>
        </v-timeline-item>
        <v-timeline-item v-for="n in 1" :key="n" large>
          <template v-slot:icon>
            <v-avatar>
              <img src="../assets/IDWeek-Chasing-the-Sun_Full-Logo-OL-300x186.png"/>
            </v-avatar>
          </template>
          <template v-slot:opposite>
            <span>IDWEEK 2020</span>
          </template>
          <v-card class="elevation-2">
            <v-card-title class="headline">15º {{ text.artigos }}</v-card-title>
            <v-card-text><a href="https://drive.google.com/file/d/1wsYf7peztdNA8OMXduBf1zkygS-gaM-P/view?usp=sharing">4º IDWEEK 2020</a></v-card-text
            >
          </v-card>
        </v-timeline-item>
        <v-timeline-item v-for="n in 1" :key="n" large>
          <template v-slot:icon>
            <v-avatar>
              <img src="../assets/IDWeek-Chasing-the-Sun_Full-Logo-OL-300x186.png"/>
            </v-avatar>
          </template>
          <template v-slot:opposite>
            <span>IDWEEK 2020</span>
          </template>
          <v-card class="elevation-2">
            <v-card-title class="headline">15º {{ text.artigos }}</v-card-title>
            <v-card-text><a href="https://drive.google.com/file/d/1_m1Jdr8eHxl40aZuljUgo5RcUCsGtrAk/view?usp=sharing">5º IDWEEK 2020</a></v-card-text
            >
          </v-card>
        </v-timeline-item>
        <v-timeline-item v-for="n in 1" :key="n" large>
          <template v-slot:icon>
            <v-avatar>
              <img src="../assets/IDWeek-Chasing-the-Sun_Full-Logo-OL-300x186.png"/>
            </v-avatar>
          </template>
          <template v-slot:opposite>
            <span>IDWEEK 2020</span>
          </template>
          <v-card class="elevation-2">
            <v-card-title class="headline">16º {{ text.artigos }}</v-card-title>
            <v-card-text><a href="https://drive.google.com/file/d/1O464QrfU-Dk9KhxkdXt3mCrB0PP1Q5xB/view?usp=sharing">6º IDWEEK 2020</a></v-card-text
            >
          </v-card>
        </v-timeline-item>
        <v-timeline-item v-for="n in 1" :key="n" large>
          <template v-slot:icon>
            <v-avatar>
              <img src="../assets/IDWeek-Chasing-the-Sun_Full-Logo-OL-300x186.png"/>
            </v-avatar>
          </template>
          <template v-slot:opposite>
            <span>IDWEEK 2020</span>
          </template>
          <v-card class="elevation-2">
            <v-card-title class="headline">17º {{ text.artigos }}</v-card-title>
            <v-card-text><a href="https://drive.google.com/file/d/18oTAaIi6EsBUByzPS78xXlgDRu5fZykc/view?usp=sharing">7º IDWEEK 2020</a></v-card-text
            >
          </v-card>
        </v-timeline-item>
        <v-timeline-item v-for="n in 1" :key="n" large>
          <template v-slot:icon>
            <v-avatar>
              <img src="../assets/IDWeek-Chasing-the-Sun_Full-Logo-OL-300x186.png"/>
            </v-avatar>
          </template>
          <template v-slot:opposite>
            <span>IDWEEK 2020</span>
          </template>
          <v-card class="elevation-2">
            <v-card-title class="headline">18º {{ text.artigos }}</v-card-title>
            <v-card-text><a href="https://drive.google.com/file/d/1iY9XOCYiybmGDGK1gHWKqQk8eB9Kzx4d/view?usp=sharing">8º IDWEEK 2020</a></v-card-text
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
      },
      eng: {
        suica: "SWITZERLAND",
        artigos: "Published article",
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
</style>