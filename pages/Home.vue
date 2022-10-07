<template>
  <div>
    <SfLoader/>
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
    <SubFooter/>
  </div>
</template>
<script lang="ts" type="module">
  import { SfLoader } from '@storefront-ui/vue';
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
import SubFooter from '~/components/SubFooter.vue';
import {
  defineComponent,
} from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'HomePage',
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
    Footer,
    SubFooter
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {

  },
});
</script>

<style lang="scss" scoped>
</style>
