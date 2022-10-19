<!-- 纵向布局 -->
<template>
  <el-container class="layout-vertical">
    <el-aside>
      <div class="menu">
        <div class="logo flx-center">
          <span>程序化创意</span>
        </div>
        <el-scrollbar>
          <el-menu
            :default-active="activeMenu"
            :router="false"
            :collapse-transition="false"
            :unique-opened="true"
          >
            <SubMenu :menuList="menuList" />
          </el-menu>
        </el-scrollbar>
      </div>
    </el-aside>
    <el-container>
      <el-header>
        <ToolBarRight />
      </el-header>
      <Main />
    </el-container>
  </el-container>
</template>

<script setup lang="ts" name="layoutVertical">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { MenuStore } from '@/store/modules/menu';
import Main from '@/layouts/components/Main/index.vue';
import ToolBarRight from '@/layouts/components/Header/ToolBarRight.vue';
import SubMenu from '@/layouts/components/Menu/SubMenu.vue';

const route = useRoute();
const menuStore = MenuStore();
const activeMenu = computed(() => route.path);
const menuList = computed(() => menuStore.menuList);
</script>

<style scoped lang="less">
@import './index.less';
</style>

<style lang="less">
.vertical {
  .el-menu,
  .el-menu--popup {
    .el-menu-item {
      &.is-active {
        background: #060708;
        &::before {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: 4px;
          content: '';
          background: var(--el-color-primary);
        }
      }
    }
  }
}
</style>
