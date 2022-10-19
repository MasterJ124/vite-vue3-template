import { defineStore } from 'pinia';
import { MenuState } from '../interface';
import piniaPersistConfig from '@/config/piniaPersist';

// MenuStore
export const MenuStore = defineStore({
  id: 'MenuState',
  state: (): MenuState => ({
    // menu List
    menuList: [],
  }),
  getters: {},
  actions: {
    async setMenuList(menuList: []) {
      this.menuList = menuList;
    },
  },
  persist: piniaPersistConfig('MenuState'),
});
