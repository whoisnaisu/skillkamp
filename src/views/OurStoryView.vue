<template>
  <div class="our-story">
    <Nav />
    <OurStory />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
import OurStory from "@/components/ourStory/OurStory.vue";

@Options({
  components: {
    Nav,
    Footer,
    OurStory,
  },
})
export default class OurStoryView extends Vue {}
</script>
