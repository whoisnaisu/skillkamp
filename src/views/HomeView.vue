<template>
  <div class="home">
    <Nav />
    <ImageSlider />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ImageSlider from "@/components/home/ImageSlider.vue";
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";

@Options({
  components: {
    ImageSlider,
    Nav,
    Footer,
  },
})
export default class MainView extends Vue {}
</script>
