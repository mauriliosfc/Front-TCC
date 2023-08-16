<template>
  <v-app id="app">
    <router-view v-if="!user.loggedIn" />
    <div v-else>
      <v-app-bar color="grey darken-2" dark>
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-toolbar-title>Infection Prediction</v-toolbar-title>
      </v-app-bar>
      <router-view />
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list nav dense style="z-index: 9999">
          <v-list-item-group active-class="grey lighten-1">
            <v-list-item @click="goToWelcome">
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
            <!-- <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Account</v-list-item-title>
            </v-list-item>-->
            <v-list-item @click="signOut">
              <v-list-item-icon>
                <v-icon>mdi-logout</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Sign Out</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </div>
  </v-app>
</template>
<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
  data() {
    return { drawer: false };
  },
  computed: {
    ...mapGetters({
      user: "user"
    })
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({
            name: "login"
          });
        });
    },
    goToConsult() {
      this.$router.push({
        name: "consult"
      });
    },
    goToWelcome() {
      this.$router.push({
        name: "home"
      });
    }
  }
};
</script>