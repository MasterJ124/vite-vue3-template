<template>
  <ElForm
    ref="loginFormRef"
    :model="loginForm"
    :rules="loginRules"
    size="large"
  >
    <el-form-item prop="username">
      <el-input v-model="loginForm.username" placeholder="用户名：admin / user">
        <template #prefix>
          <el-icon class="el-input__icon"><user /></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        type="password"
        v-model="loginForm.password"
        placeholder="密码：123456"
        show-password
        autocomplete="new-password"
      >
        <template #prefix>
          <el-icon class="el-input__icon"><lock /></el-icon>
        </template>
      </el-input>
    </el-form-item>
  </ElForm>
  <div class="login-btn">
    <el-button
      :icon="CircleClose"
      round
      size="large"
      @click="resetForm(loginFormRef)"
    >
      重置
    </el-button>
    <el-button
      :icon="UserFilled"
      round
      size="large"
      type="primary"
      :loading="loading"
      @click="login(loginFormRef)"
    >
      登录
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { ReqLoginForm } from '@/api/interface/index';
import { CircleClose, UserFilled } from '@element-plus/icons-vue';
import { ElNotification } from 'element-plus';
import { GlobalStore } from '@/store';
import { MenuStore } from '@/store/modules/menu';
import { HOME_URL } from '@/config/config';
import type { ElForm } from 'element-plus';

const globalStore = GlobalStore();

// 定义 formRef（校验规则）
type FormInstance = InstanceType<typeof ElForm>;
const loginFormRef = ref<FormInstance>();
const loginRules = reactive({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
});

// 登录表单数据
const loginForm = reactive<ReqLoginForm>({
  username: '',
  password: '',
});

const loading = ref(false);
const menuStore = MenuStore();
const router = useRouter();
// login
const login = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(async (valid) => {
    if (!valid) return;
    loading.value = true;
    try {
      //const res = await loginApi({
      //  ...loginForm,
      //  //password: md5(loginForm.password),
      //  password: loginForm.password,
      //});
      // 存储 token
      globalStore.setToken('123456');
      // 登录成功之后清除上个账号的 menulist 和 tabs 数据
      menuStore.setMenuList([]);
      router.push(HOME_URL);
      ElNotification({
        message: '欢迎登录',
        type: 'success',
        duration: 3000,
      });
    } finally {
      loading.value = false;
    }
  });
};

// resetForm
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

onMounted(() => {
  // 监听enter事件（调用登录）
  document.onkeydown = (e: any) => {
    e = window.event || e;
    if (e.code === 'Enter' || e.code === 'enter' || e.code === 'NumpadEnter') {
      if (loading.value) return;
      login(loginFormRef.value);
    }
  };
});
</script>

<style scoped lang="less">
@import '../index.less';
</style>
