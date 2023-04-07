<template>
  <div class="home">
    <Nav />
    <ImageSlider />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Nav from "@/components/homePage/Nav.vue";
import ImageSlider from "@/components/homePage/ImageSlider.vue";
import Footer from "@/components/homePage/Footer.vue";

@Options({
  components: {
    Nav,
    ImageSlider,
    Footer,
  },
})
export default class MainView extends Vue {}
</script>
