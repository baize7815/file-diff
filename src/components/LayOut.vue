<template>
  <div
    class="w-100% h-100% overflow-hidden flex flex-col bg-[url('@/assets/images/bg.png')] bg-cover bg-center"
  >
    <div
      class="h-80px px-20px flex-none flex items-center border-b-1 border-[rgba(0,0,0,0.06)] border-b-solid"
    >
      <div class="logo-section">
        <img class="h-25px" src="@/assets/images/logo.svg" alt="AI小助手" />
      </div>
      <div class="ml-80px flex items-center gap-80px text-18px">
        <router-link to="/home">文档对比</router-link>
        <router-link to="/home/demo">demo示例</router-link>
      </div>
      <div class="flex items-center gap-10px text-20px ml-auto">
        <el-icon class="cursor-pointer" title="个人中心">
          <UserFilled />
        </el-icon>
        <el-icon class="cursor-pointer" title="退出登录" @click="handleLogout">
          <SwitchButton />
        </el-icon>
      </div>
    </div>
    <div class="flex-1 overflow-y-auto">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import { UserFilled, SwitchButton } from "@element-plus/icons-vue";

const router = useRouter();

const handleLogout = () => {
  localStorage.removeItem("token");
  ElMessage.success("已退出登录");
  router.push("/login");
};
</script>

<style scoped>
.router-link-exact-active {
  color: #0094ff;
  border-bottom: 2px solid #0094ff;
}
</style>
