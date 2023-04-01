<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
    <button class="large-primary-btn">Test</button>
    <button disabled class="large-primary-btn">Siable</button>
    <button class="large-secondary-btn">Secondary</button>
    <button disabled class="large-secondary-btn">disabled</button>
    <button class="large-tertiary-btn">disabled</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>
