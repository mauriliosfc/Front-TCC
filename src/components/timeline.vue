<template>
  <v-timeline :dense="$vuetify.breakpoint.smAndDown">
    <v-timeline-item
      color="purple lighten-2"
      fill-dot
      right
    >
      <v-card>
        <v-card-title class="purple lighten-2">
          <v-icon
            dark
            size="42"
            class="mr-4"
          >
            mdi-magnify
          </v-icon>
          <h2 class="display-1 white--text font-weight-light">
            SHEA DECENNIAL 2020 - EUA
          </h2>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="10"
            >
              <a
                  href="https://drive.google.com/file/d/1QkrM-IGAb8OPvFkTuhcmczZgEm7LH9zh/view?usp=sharing"
                  >1º SHEA DECENNIAL 2020 - EUA</a
                >
            </v-col>
            <v-col
              class="hidden-sm-and-down text-right"
              md="2"
            >
              <v-icon size="64">
                mdi-calendar-text
              </v-icon>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="amber lighten-1"
      fill-dot
      left
      small
    >
      <v-card>
        <v-card-title class="amber lighten-1 justify-end">
          <h2 class="display-1 mr-4 white--text font-weight-light">
            1º IDWEEK 2020 -EUA
          </h2>
          <v-icon
            dark
            size="42"
          >
            mdi-home-outline
          </v-icon>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="8"
            >
              <a
                  href="https://drive.google.com/file/d/1iY9XOCYiybmGDGK1gHWKqQk8eB9Kzx4d/view?usp=sharing"
                  >1º IDWEEK 2020 -EUA</a
                >
            </v-col>
            <v-col
              cols="12"
              md="4"
            >
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="cyan lighten-1"
      fill-dot
      right
    >
      <v-card>
        <v-card-title class="cyan lighten-1">
          <v-icon
            class="mr-4"
            dark
            size="42"
          >
            mdi-email-outline
          </v-icon>
          <h2 class="display-1 white--text font-weight-light">
            1º ICPIC 2019- SUIÇA
          </h2>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col
              v-for="n in 1"
              :key="n"
              cols="12"
              md="4"
            >
              <a
                  href="https://drive.google.com/file/d/1uQLQe5ypQryQrfyo0GJa9lyWovrfKJiH/view?usp=sharing"
                  >1º ICPIC 2019- SUIÇA</a
                >
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="red lighten-1"
      fill-dot
      left
      small
    >
      <v-card>
        <v-card-title class="red lighten-1 justify-end">
          <h2 class="display-1 mr-4 white--text font-weight-light">
            teste
          </h2>
          <v-icon
            dark
            size="42"
          >
            mdi-account-multiple-outline
          </v-icon>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col
              class="hidden-sm-and-down"
              md="2"
            >
              <v-icon size="64">
                mdi-server-network
              </v-icon>
            </v-col>
            <v-col
              cols="12"
              md="10"
            >
              teste
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="green lighten-1"
      fill-dot
      right
    >
      <v-card>
        <v-card-title class="green lighten-1">
          <v-icon
            class="mr-4"
            dark
            size="42"
          >
            mdi-phone-in-talk
          </v-icon>
          <h2 class="display-1 white--text font-weight-light">
            teste
          </h2>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col>
              teste
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>