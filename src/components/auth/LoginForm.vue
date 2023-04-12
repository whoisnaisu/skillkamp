<template>
  <div class="container">
    <div class="auth-form">
      <h1>Log In</h1>
      <p>
        New to this site? <a href="/register"><span>Sign Up</span></a>
      </p>
      <button
        class="small-secondary-btn"
        @click="showLoginForm()"
        v-show="!isFormShow"
      >
        Log in with email
      </button>
      <form @submit.prevent="submitForm" v-show="isFormShow">
        <br /><br />
        <label for="email">Email</label><br />
        <input type="email" id="email" v-model="email" required />
        <br /><br />
        <label for="password">Password</label><br />
        <input type="password" id="password" v-model="password" required />
        <br /><br />
        <button class="small-primary-btn" type="submit">Login</button>
      </form>
    </div>
    <a href="/"><i class="bi bi-x"></i></a>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import axios from "axios";

interface UserData {
  email: string;
  password: string;
}

export default class LoginForm extends Vue {
  isFormShow = false;

  showLoginForm() {
    this.isFormShow = true;
  }

  email = "";
  password = "";

  async submitForm() {
    const userData: UserData = {
      email: this.email,
      password: this.password,
    };
    try {
      const response = await axios.post(
        "https://skillkamp-api.com/v1/api/auth/login",
        userData
      );
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;
      this.$router.push("/");
    } catch (error) {
      console.log(error);
    }
  }
}
</script>
