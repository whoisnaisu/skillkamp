<template>
  <div class="main-area">
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" />
      </div>
    </transition-group>
    <a class="prev" @click="prev" href="#">&#10094;</a>
    <a class="next" @click="next" href="#">&#10095;</a>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class ImageSlider extends Vue {
  images = [
    require("@/assets/images/photoSlider/Banner1.png"),
    require("@/assets/images/photoSlider/Banner2.png"),
    require("@/assets/images/photoSlider/Banner3.png"),
  ];

  timer = 0;
  currentIndex = 0;

  mounted() {
    this.startSlide();
  }

  startSlide() {
    this.timer = setInterval(this.next.bind(this), 8000);
  }

  next() {
    this.currentIndex += 1;
  }

  prev() {
    this.currentIndex -= 1;
  }

  get currentImg() {
    return this.images[Math.abs(this.currentIndex) % this.images.length];
  }
}
</script>

<style lang="scss" scoped>
.main-area {
  width: 100%;
  overflow: hidden;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width: 100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width: 100%;
  opacity: 0;
}

img {
  height: 600px;
  width: 100%;
  object-fit: cover;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover,
.next:hover {
  color: rgb(94, 94, 94);
}
</style>
