<template>
  <div class="w-full h-full overflow-hidden flex flex-col bg-gray-50">
    <div class="h-20 px-8 flex-none flex items-center border-b border-gray-200 bg-white">
      <div class="flex items-center gap-8 text-lg">
        <span class="font-semibold text-xl">文档对比</span>
        <router-link to="/home" class="hover:text-blue-600">文档对比</router-link>
        <router-link to="/home/demo" class="hover:text-blue-600">demo示例</router-link>
      </div>
      <div class="flex items-center gap-3 text-xl ml-auto">
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
