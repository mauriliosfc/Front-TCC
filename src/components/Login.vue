<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="10">
            <v-card class="elevation-12">
              <v-toolbar :style="toolbarStyle" dark flat>
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field label="Login" v-model="email" name="login" type="text" />

                  <v-text-field id="password" v-model="password" label="Password" name="password" type="password" />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn class="btn" @click="login" style="color: white;">Login</v-btn>
                <v-btn class="btn text-white" @click="register" style="color: white;">Sign</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Login",
  data() {
    return {
      password: null,
      email: null,
      toolbarStyle: {
        background: 'linear-gradient(to right, #4a8df1, #61d3db)',
      },
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.replace("consult");
        })
        .catch(err => {
          this.$awn.alert(err.message)
        });
    },
    register() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.replace("consult");
        })
        .catch(err => {
          alert(err.message);
        });
    }
  }
};
</script>

<style>
#inspire {
  position: relative;
  background-size: cover;
  background-image: linear-gradient(to right, #4BC3CC, #2C7AED);
}

.btn {
  background-image: linear-gradient(to right, #4BC3CC, #2C7AED);
  color: white;
}
</style>