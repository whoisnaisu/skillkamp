<template>
  <div class="register">
    <RegisterForm />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import RegisterForm from "@/components/auth/RegisterForm.vue";

@Options({
  components: {
    RegisterForm,
  },
})
export default class RegisterView extends Vue {}
</script>
