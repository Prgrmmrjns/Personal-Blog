<template>
<div>
    <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4" align="center">
      <v-card width="500" class="elevation-4 text-left mt-24" shaped color="yellow">
        <v-card-title>Sign Up</v-card-title>
        <v-card-subtitle>Sign Up to view exclusive content</v-card-subtitle>
        <v-card-text>
          <v-form>
            <v-text-field
              label="Login"
              name="login"
              prepend-icon="mdi-account"
              type="text"
              v-model="auth.email"
            ></v-text-field>

            <v-text-field
              label="Password"
              name="password"
              prepend-icon="mdi-lock"
              type="password"
              v-model="auth.password"
            ></v-text-field>
            <v-text-field
              label="Confirm password"
              name="Confirmpassword"
              prepend-icon="mdi-lock"
              type="password"
              v-model="confirmPassword"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions class="text-center">
          <v-btn
            class="login-button"
            @click="signup"
            depressed
            large
            >Sign Up</v-btn
          >
        </v-card-actions>
      </v-card>
      <v-snackbar
        :timeout="4000"
        v-model="snackbar"
        absolute
        bottom
        center
      >
        {{ snackbarText }}
      </v-snackbar>
    </v-col>
  </v-row>
</div>
</template>

<script>
export default {
  data() {
    return {
      snackbar: false,
      snackbarText: 'No error message',
      auth: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    signup() {
        if(this.auth.password === this.confirmPassword){
                  const auth = getAuth();
        createUserWithEmailAndPassword(auth, this.auth.email, this.auth.password)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        $nuxt.$router.push('/')
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });
        }
        else{
            let that = this
            that.snackbarText = "Please try again."
            that.snackbar = true
        }

    }
  }
}
</script>

<style>

</style>
