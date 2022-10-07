<template>
  <div>
    <AppHeader/>
    <BannerHome/>
    <Clients/>
    <Specifications/>
    <MoreInfo/>
    <Services/>
    <ShipBanner/>
    <CustomSupport/>
    <CustomClearance/>
    <Footer/>
  </div>
</template>
<script lang="ts">
import { SfLoader, SfHeading } from '@storefront-ui/vue';
import { useRoute, defineComponent } from '@nuxtjs/composition-api';
import AppHeader from "../components/AppHeader.vue"
import BannerHome from "../components/BannerHome.vue"
import Clients from "../components/Clients.vue"
import Specifications from "../components/Specifications.vue"
import MoreInfo from "../components/MoreInfo.vue"
import Services from "../components/Services.vue"
import ShipBanner from "../components/ShipBanner.vue"
import CustomSupport from "../components/CustomSupport.vue"
import CustomClearance from "../components/CustomClearance.vue"
import Footer from "../components/Footer.vue"

export default defineComponent({
  name: 'DefaultLayout',

  components: {
    SfLoader,
    AppHeader,
    BannerHome,
    Clients,
    Specifications,
    MoreInfo,
    Services,
    ShipBanner,
    CustomSupport,
    CustomClearance,
    Footer
  },

  setup() {
    const route = useRoute();

    return {
      route,
    };
  },
  head: {
    link: [{ rel: 'stylesheet', href: '/_nuxt/fonts.css' }],
  },
});
</script>

<style lang="scss">
@import "~@storefront-ui/vue/styles";

#layout {
  box-sizing: border-box;
  @include for-desktop {
    max-width: 1270px;
    margin: auto;
  }
}

.no-scroll {
  overflow: hidden;
  height: 100vh;
}

// Reset CSS
html {
  width: auto;
  @include for-mobile {
    overflow-x: hidden;
  }
}

body {
  overflow-x: hidden;
  color: var(--c-text);
  font-size: var(--font-size--base);
  font-family: var(--font-family--primary);
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: var(--c-link);

  &:hover {
    color: var(--c-link-hover);
  }
}

h1 {
  font-family: var(--font-family--secondary);
  font-size: var(--h1-font-size);
  line-height: 1.6;
  margin: 0;
}

h2 {
  font-family: var(--font-family--secondary);
  font-size: var(--h2-font-size);
  line-height: 1.6;
  margin: 0;
}

h3 {
  font-family: var(--font-family--secondary);
  font-size: var(--h3-font-size);
  line-height: 1.6;
  margin: 0;
}

h4 {
  font-family: var(--font-family--secondary);
  font-size: var(--h4-font-size);
  line-height: 1.6;
  margin: 0;
}
</style>