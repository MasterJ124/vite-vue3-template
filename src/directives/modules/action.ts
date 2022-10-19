/**
 * Action 权限指令
 * 指令用法：
 *  - 在需要控制 action 级别权限的组件上使用 v-action:[method] , 如下：
 *    <e-button v-action:add="advplan" >添加用户</e-button>
 *    <e-button v-action:delete="advplan">删除用户</e-button>
 *    <a v-action:edit="advplan" @click="edit(record)">修改</a>
 *
 *  - 当前用户没有权限时，组件上使用了该指令则会被默认禁用
 *
 *  修饰符：
 *  - 在需要控制 action 级别权限的组件上使用 v-action:[method].modifiers , 如下：
 *    <e-button v-action:add.disabled="advplan">禁用显示</e-button>
 *    <e-button v-action:delete.visible="advplan">隐藏显示</e-button>
 *   默认隐藏
 */
import type { Directive, DirectiveBinding } from 'vue';
// import ls from '@/utils/Storage';
// import { USER_INFO } from '@/store/mutation-types';

const action: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const actionName = binding.arg;
    const permissionName = binding.value;
    // const permissions = ls.get(USER_INFO)?.permissions || [];
    const permissions: any = [];
    // const { disabled, visible } = binding.modifiers;
    const currentKey = permissions.find(
      (item: string) => item === `${permissionName}.${actionName}`,
    );
    if (!currentKey) {
      el.classList.add('element-visible');
    }
  },
};

export default action;
