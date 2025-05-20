<script setup lang="ts">
import { ref } from 'vue';
import { RouterView, useRouter } from 'vue-router';
import { Layout, Menu, Dropdown, Avatar } from 'ant-design-vue';
import {
  UserOutlined,
  DashboardOutlined,
  AreaChartOutlined,
  TableOutlined,
  SettingOutlined,
  InfoCircleOutlined,
  LogoutOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons-vue';

const router = useRouter();
const collapsed = ref(false);

// 处理菜单点击
const handleMenuClick = ({ key }) => {
  router.push(key);
};

// 处理用户菜单点击
const handleUserMenuClick = ({ key }) => {
  if (key === 'logout') {
    localStorage.removeItem('token');
    router.push('/login');
  }
};

// 切换侧边栏折叠状态
const toggleCollapsed = () => {
  collapsed.value = !collapsed.value;
};

// 用户下拉菜单
const userMenu = {
  items: [
    {
      key: 'profile',
      label: '个人资料',
      icon: () => h(UserOutlined)
    },
    {
      key: 'settings',
      label: '设置',
      icon: () => h(SettingOutlined)
    },
    {
      type: 'divider'
    },
    {
      key: 'logout',
      label: '退出登录',
      icon: () => h(LogoutOutlined)
    }
  ]
};
</script>

<template>
  <a-layout class="app-container" v-if="$route.path !== '/login'">
    <a-layout-sider v-model:collapsed="collapsed" class="sider" :trigger="null" collapsible>
      <div class="logo">
        <h1>Trade Galaxy</h1>
      </div>
      <a-menu theme="dark" mode="inline" :selectedKeys="[$route.path]" @click="handleMenuClick">
        <a-menu-item key="/">
          <dashboard-outlined />
          <span>仪表盘</span>
        </a-menu-item>
        <a-menu-item key="/analytics">
          <area-chart-outlined />
          <span>数据分析</span>
        </a-menu-item>
        <a-menu-item key="/data">
          <table-outlined />
          <span>数据管理</span>
        </a-menu-item>
        <a-menu-item key="/about">
          <info-circle-outlined />
          <span>关于系统</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>

    <a-layout>
      <a-layout-header class="header">
        <div class="header-left">
          <button class="trigger" @click="toggleCollapsed">
            <menu-unfold-outlined v-if="collapsed" />
            <menu-fold-outlined v-else />
          </button>
        </div>
        <div class="header-right">
          <a-dropdown :trigger="['click']" :dropdownMenu="userMenu" @select="handleUserMenuClick">
            <div class="user-info">
              <a-avatar icon="user"><user-outlined /></a-avatar>
              <span class="username">管理员</span>
            </div>
          </a-dropdown>
        </div>
      </a-layout-header>

      <a-layout-content class="content">
        <RouterView />
      </a-layout-content>
    </a-layout>
  </a-layout>

  <!-- 登录页不使用上述布局 -->
  <RouterView v-else />
</template>

<style scoped>
.app-container {
  min-height: 100vh;
}

.sider {
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
}

.logo {
  height: 32px;
  margin: 16px;
  color: white;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  white-space: nowrap;
}

.header {
  background: #fff;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}

.header-left,
.header-right {
  padding: 0 24px;
  display: flex;
  align-items: center;
}

.trigger {
  font-size: 18px;
  cursor: pointer;
  transition: color 0.3s;
  background: none;
  border: none;
  color: #001529;
}

.trigger:hover {
  color: #1890ff;
}

.user-info {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.username {
  margin-left: 8px;
}

.content {
  margin: 24px 16px;
  padding: 24px;
  background: #fff;
  min-height: 280px;
  border-radius: 2px;
}
</style>