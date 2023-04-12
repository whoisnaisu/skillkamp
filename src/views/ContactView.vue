<template>
  <div class="contact">
    <Nav />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";

@Options({
  components: {
    Nav,
    Footer,
  },
})
export default class ContactVue extends Vue {}
</script>
