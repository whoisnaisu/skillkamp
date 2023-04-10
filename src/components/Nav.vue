<template>
  <nav class="nav-bar">
    <div class="top-banner">Get 10% Off - Use Coupon Code HAPPY123</div>
    <div class="main-nav-text">h a p p y&ensp;k i d s</div>
    <div class="bottom-area">
      <div class="group-menu-items left">
        <ul class="ul-items">
          <li
            v-for="(item, index) in filteredMenuItems(MainMenu)"
            :key="`parent_${index}`"
            :data-flag="item.id"
          >
            <a :href="item.route"> {{ item.text }}</a>
          </li>
        </ul>
      </div>

      <div class="group-menu-items right">
        <div class="log-in">
          <router-link :to="`/register`">
            <div class="icon login"><i class="bi bi-person-circle"></i></div>
          </router-link>
          <div><a href="/login">Log In</a></div>
        </div>
        <div>
          <div class="icon"><i class="bi bi-cart2"></i></div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { RouterLink } from "vue-router";
import { Options, Vue } from "vue-class-component";
import { MainMenu } from "@/constants/MainMenu";

@Options({
  components: {
    RouterLink,
  },
  props: {
    msg: String,
  },
})
export default class extends Vue {
  MainMenu = MainMenu;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  filteredMenuItems(MainMenu: any[]) {
    return MainMenu ?? [];
  }
}
</script>

<style lang="scss" scoped></style>
