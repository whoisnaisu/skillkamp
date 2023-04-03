<template>
  <div class="home">
    <MainMenu />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MainMenu from "@/components/homePage/MainMenu.vue";

@Options({
  components: {
    MainMenu,
  },
})
export default class HomeView extends Vue {}
</script>

<!-- <style lang="scss">
@import "@/assets/scss/main.scss";
</style> -->
