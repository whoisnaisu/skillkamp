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
            {{ item.text }}
          </li>
        </ul>
      </div>

      <div class="group-menu-items right">
        <div class="log-in">
          <div class="icon login"><i class="bi bi-person-circle"></i></div>
          <div>Log In</div>
        </div>
        <div>
          <div class="icon"><i class="bi bi-cart2"></i></div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { MainMenu } from "@/constants/MainMenu";

@Options({
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

<style lang="scss" scoped>
@import "@/assets/scss/_colors.scss";
.nav-bar {
  width: 100%;
  height: 18rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(226, 226, 226);
}

.top-banner {
  width: 100%;
  height: 3.2rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $primary-1;
  color: white;
}
.main-nav-text {
  font-size: 3.8rem;
  font-weight: bold;
  color: $primary-1;
}

.bottom-area {
  margin: 0 0 1rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
}

.ul-items {
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: fit-content;

  color: black;

  li {
    padding: 0 2.5rem 0 2.5rem;
    transition: color 0.4s ease;
  }

  li:hover {
    color: $primary-5;
  }
}

.group-menu-items {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 5rem;
}

.left {
  margin: 0 4rem 0 0;
}

.log-in {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 2rem 0 0;
}

.icon {
  margin: 0 1rem 0.6rem 0;
  transform: scale(140%);
}
</style>
