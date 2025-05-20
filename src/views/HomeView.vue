<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Card, Row, Col, Statistic } from 'ant-design-vue';
import { LineChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import * as echarts from 'echarts/core';

// 注册 ECharts 组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LineChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  LegendComponent
]);

// 示例数据
const totalUsers = ref(2543);
const activeUsers = ref(1842);
const totalTransactions = ref(4623);
const totalRevenue = ref(256789.45);

const chartRef = ref(null);

onMounted(() => {
  // 初始化图表
  if (chartRef.value) {
    const chart = echarts.init(chartRef.value);

    // 图表配置
    const option = {
      title: {
        text: '交易趋势'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['交易量', '交易额']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '交易量',
          type: 'line',
          stack: 'Total',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '交易额',
          type: 'line',
          stack: 'Total',
          data: [220, 182, 191, 234, 290, 330, 310]
        }
      ]
    };

    chart.setOption(option);

    // 响应窗口调整大小
    window.addEventListener('resize', () => {
      chart.resize();
    });
  }
});
</script>

<template>
  <div class="dashboard">
    <h1>数据仪表盘</h1>

    <a-row :gutter="16" class="stats-row">
      <a-col :span="6">
        <a-card>
          <a-statistic title="总用户数" :value="totalUsers" :precision="0" suffix="人" />
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card>
          <a-statistic title="活跃用户" :value="activeUsers" :precision="0" suffix="人" />
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card>
          <a-statistic title="总交易数" :value="totalTransactions" :precision="0" />
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card>
          <a-statistic title="总交易额" :value="totalRevenue" :precision="2" prefix="$" />
        </a-card>
      </a-col>
    </a-row>

    <a-row :gutter="16" class="chart-row">
      <a-col :span="24">
        <a-card title="交易趋势">
          <div ref="chartRef" class="chart"></div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<style scoped>
.dashboard {
  width: 100%;
}

.stats-row {
  margin-bottom: 24px;
}

.chart {
  height: 400px;
  width: 100%;
}

.chart-row {
  margin-bottom: 24px;
}
</style>