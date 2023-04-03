<template>
  <nav class="nav-bar">
    <div class="top-banner">Get 10% Off - Use Coupon Code HAPPY123</div>
    <div class="main-nav-text">h a p p y&ensp;k i d s</div>
    <div class="bottom-area">
      <div class="main-menu">
        <ul class="main-menu-items">
          <li
            v-for="(item, index) in filteredMenuItems(MainMenu)"
            :key="`parent_${index}`"
            :data-flag="item.id"
          >
            {{ item.text }}
          </li>
        </ul>

        <div>Log In <i class="bi bi-person-circle"></i></div>
        <div>ตะกร้าสินค้า</div>
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
  height: 4rem;
  text-align: center;
  display: flex;
  align-items: center;
  background-color: rgb(7, 7, 7);
  color: white;
}
.main-nav-text {
  font-size: 4rem;
  font-weight: bold;
}
.main-menu {
  display: flex;
  .main-menu-items {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
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
}

.bottom-area {
  margin: 0 0 2rem 0;
}
</style>
