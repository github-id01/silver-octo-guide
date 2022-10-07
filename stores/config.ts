import { defineStore } from 'pinia';

interface ConfigState {
}

export const useConfigStore = defineStore('magentoConfig', {
  state: (): ConfigState => ({
    storeConfig: {},
    stores: [],
    currency: {},
  }),
});
