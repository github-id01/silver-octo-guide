<template>
    <div class="sf-ship-banner">
      
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "@nuxtjs/composition-api";
import { SfHeader, SfIcon } from "@storefront-ui/vue";
  
  export default defineComponent({
    components: {
      SfHeader,
      SfIcon,
    },
  });
  </script>
  
  <style lang="scss" scoped>
  .sf-ship-banner {
    background-image: url('../assets/images/icons/shipbanner.png');
    height: 550px;
  }
  </style>
  