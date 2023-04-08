<template>
  <div class="home">
    <ImageSlider />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ImageSlider from "@/components/home/ImageSlider.vue";

@Options({
  components: {
    ImageSlider,
  },
})
export default class MainView extends Vue {}
</script>
