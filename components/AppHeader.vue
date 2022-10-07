<template>
  <div class="sf-header">
    <div class="nav-content">
      <div class="logo">
        <img src="../assets/images/icons/Logo.png" />
      </div>
      <div class="vertical-divider"></div>
      <div class="nav-items">
        <ul class="nav-elements">
          <li class="nav-lists">Quick Facts</li>
          <template>
            <SfIcon
              class="arrow-down"
              icon="chevron_down"
              size="xxs"
              color="#17ACBD"
              viewBox="0 0 24 24"
              :coverage="1"
            />
          </template>
        </ul>
        <ul class="nav-elements">
          <li class="nav-lists">Benefits</li>
          <template>
            <SfIcon
              class="arrow-down"
              icon="chevron_down"
              size="xxs"
              color="#17ACBD"
              viewBox="0 0 24 24"
              :coverage="1"
            />
          </template>
        </ul>
        <ul class="nav-elements">
          <li class="nav-lists">Contact</li>
        </ul>
      </div>
    </div>
    <template>
      <button
        class="color-primary sf-button get-touch-button"
        :aria-disabled="false"
        :link="null"
        type="button"
        aria-label="button"
      >
        Get in touch
      </button>
    </template>
  </div>
</template>

<script lang="ts">
import { SfHeader, SfIcon } from "@storefront-ui/vue";
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  components: {
    SfHeader,
    SfIcon,
  },
});
</script>

<style lang="scss" scoped>
.sf-header {
  background-color: #ffffff;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .vertical-divider {
    background-color: #cccccc;
    content: "";
    height: 61px;
    margin-left: 35px;
    margin-right: 35px;
    width: 1px;
  }

  .nav-content {
    display: flex;
    align-items: center;

    .nav-items {
      display: flex;
      align-items: center;
      gap: 35px;
    }

    .nav-elements {
      display: flex;
      padding: 0;
      align-items: center;
      list-style-type: none;
      margin-block-start: 0;
      margin-block-end: 0;
      margin-inline-start: 0;
      margin-inline-end: 0;
      cursor: pointer;
    }
    .arrow-down {
      margin-left: 10px;
    }
    .nav-lists {
      font-size: 18px;
      color: #3d4d62;
      font-weight: 600;
    }
  }

  .get-touch-button {
    height: 50px;
    border-radius: 4px;
    text-transform: unset;
    background-color: #01A4B7;
    font-size: 16px;
    color: #ffffff;
    font-weight: 600;
    margin-right: 20px;
  }
}
</style>
