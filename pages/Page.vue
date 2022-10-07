<template>
</template>
<script lang="ts">
import { SfLoader, SfHeading } from '@storefront-ui/vue';
import {
  defineComponent
} from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'CmsPage',
  components: {
    SfLoader,
    SfHeading,
  },
  props: {
    identifier: {
      type: [String],
      default: '',
    },
  },
  setup(props) {},
});
</script>
<style lang="scss" scoped>
.cms-page {
  padding: var(--spacer-sm);
}
</style>
