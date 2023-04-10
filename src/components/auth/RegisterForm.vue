<template>
  <div class="container">
    <div class="auth-form">
      <h1>Sign Up</h1>
      <p>
        Already a member? <a href="/login"><span>Log In</span></a>
      </p>
      <button
        @click="showRegisterForm()"
        v-show="!isFormShow"
        class="small-secondary-btn"
      >
        Sign up with email
      </button>
      <form @submit.prevent="submitForm" v-show="isFormShow">
        <br /><br />
        <label for="fullname">Fullname</label><br />
        <input type="text" id="name" v-model="fullname" required />
        <br /><br />
        <label for="email">Email</label><br />
        <input type="email" id="email" v-model="email" required />
        <br /><br />
        <label for="password">Password</label><br />
        <input type="password" id="password" v-model="password" required />
        <br /><br />
        <button class="small-primary-btn" type="submit">Register</button>
      </form>
    </div>
    <a href="/"><i class="bi bi-x"></i></a>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import axios from "axios";

interface UserData {
  fullname: string;
  email: string;
  password: string;
}

export default class RegisterForm extends Vue {
  isFormShow = false;

  showRegisterForm() {
    this.isFormShow = true;
  }

  fullname = "";
  email = "";
  password = "";

  async submitForm() {
    const userData: UserData = {
      fullname: this.fullname,
      email: this.email,
      password: this.password,
    };
    try {
      const response = await axios.post(
        "https://skillkamp-api.com/v1/api/auth/signup",
        userData
      );
      this.fullname = "";
      this.email = "";
      this.password = "";
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
}
</script>
