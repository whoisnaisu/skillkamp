<template>
  <footer class="footer">
    <div class="footer-text">happy kids</div>
    <div class="main-footer">
      <div>
        <ul class="ul-items-col">
          <li
            v-for="(item, index) in filteredMenuItems(MainMenu)"
            :key="`parent_${index}`"
            :data-flag="item.id"
          >
            {{ item.text }}
          </li>
        </ul>
      </div>
      <div class="social-media">
        <i class="bi bi-facebook"></i>
        <i class="bi bi-pinterest"></i>
        <i class="bi bi-instagram"></i>
      </div>
      <ul class="ul-items-col">
        <li>Shipping $ Returns</li>
        <li>Store Policy</li>
        <li>Payment Methods</li>
        <li>FAQ</li>
      </ul>
    </div>
    <div>join our mailing list</div>
    <div>2035 by happy kids. Powered and secured by Wix</div>
  </footer>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { MainMenu } from "@/constants/MainMenu";

export default class Footer extends Vue {
  MainMenu = MainMenu;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  filteredMenuItems(MainMenu: any[]) {
    return MainMenu ?? [];
  }
}
</script>

<style lang="scss" scoped></style>
