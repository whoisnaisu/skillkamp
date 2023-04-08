<template>
  <div>
    <Nav />
    <router-link to="/home"></router-link>
    <router-link to="/collection"></router-link>
    <router-link to="/"></router-link>
    <router-link to="/"></router-link>
    <router-view />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
import ImageSlider from "@/components/home/ImageSlider.vue";

@Options({
  components: {
    Nav,
    ImageSlider,
    Footer,
  },
})
export default class MainView extends Vue {}
</script>
