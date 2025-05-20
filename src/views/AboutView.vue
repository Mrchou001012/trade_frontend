<template>
  <div class="about-page">
    <h1>关于 Trade Galaxy</h1>

    <a-divider />

    <a-row :gutter="24">
      <a-col :span="16">
        <a-card title="系统介绍" class="about-card">
          <p>Trade Galaxy 是一个先进的数据分析平台，专为交易行业设计，提供实时数据分析、可视化和决策支持功能。</p>

          <h3>系统特点</h3>
          <a-list :data-source="features" item-layout="horizontal">
            <template #renderItem="{ item }">
              <a-list-item>
                <a-list-item-meta>
                  <template #title>{{ item.title }}</template>
                  <template #description>{{ item.description }}</template>
                </a-list-item-meta>
              </a-list-item>
            </template>
          </a-list>
        </a-card>
      </a-col>

      <a-col :span="8">
        <a-card title="系统信息" class="about-card">
          <a-descriptions :column="1">
            <a-descriptions-item label="版本">v1.0.0</a-descriptions-item>
            <a-descriptions-item label="更新日期">2023-08-01</a-descriptions-item>
            <a-descriptions-item label="框架">Vue 3 + Vite</a-descriptions-item>
            <a-descriptions-item label="UI组件">Ant Design Vue</a-descriptions-item>
            <a-descriptions-item label="可视化库">ECharts</a-descriptions-item>
            <a-descriptions-item label="授权">企业版</a-descriptions-item>
          </a-descriptions>
        </a-card>

        <a-card title="联系我们" class="about-card" style="margin-top: 16px;">
          <p><strong>技术支持：</strong> support@tradegalaxy.com</p>
          <p><strong>联系电话：</strong> +1 (800) 123-4567</p>
          <p><strong>官方网站：</strong> <a href="https://tradegalaxy.com">tradegalaxy.com</a></p>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const features = ref([
  {
    title: '实时数据分析',
    description: '支持实时数据收集和分析，帮助用户快速响应市场变化'
  },
  {
    title: '高级可视化',
    description: '提供多种可视化图表和仪表盘，直观展示复杂数据'
  },
  {
    title: '预测分析',
    description: '使用机器学习算法预测市场趋势和潜在风险'
  },
  {
    title: '自定义报告',
    description: '支持自定义报告生成和导出，满足不同业务需求'
  },
  {
    title: '多维度数据过滤',
    description: '提供灵活的数据筛选和过滤功能，深入挖掘数据价值'
  }
]);
</script>

<style scoped>
.about-page {
  max-width: 1200px;
  margin: 0 auto;
}

.about-card {
  margin-bottom: 16px;
}

h1 {
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 20px;
}

h3 {
  margin-top: 16px;
  margin-bottom: 8px;
}

p {
  line-height: 1.6;
}
</style>