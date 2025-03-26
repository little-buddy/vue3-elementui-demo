<script lang="ts" setup>
import { LineChart } from 'echarts/charts';
import {
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent,
} from 'echarts/components';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import VChart, { THEME_KEY } from 'vue-echarts';

const props = defineProps<{ name: string }>();

use([
  CanvasRenderer,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  LineChart,
]);

const option = {
  yAxis: {
    type: 'value',
    // name: '可用库存数',
  },
  xAxis: {
    type: 'category',
    data: [
      'Catalyst 8300',
      'Dusun Pi4',
      'mmm',
      'MQM8790-HS2R',
      'MTQ8200-HS2F',
      '便携榨汁机',
      '健身器材',
      '冰箱',
      '冷藏品',
      '多功能电饭煲',
      '太阳能路灯',
      '家用投影仪',
      '平板电脑',
      '微波炉',
      '无线鼠标',
      '智能体脂秤',
      '智能冰箱',
      '智能加湿器',
      '智能微波炉',
      '智能手机',
      '智能扫地机器人',
      '智能插座',
      '智能摄像头',
      '智能擦窗机器人',
      '智能洗衣机',
      '智能灯具',
      '智能烤箱',
      '智能电饭煲',
      '智能空调',
      '智能窗帘',
      '智能马桶',
      '智能马桶盖',
      '洗衣机',
      '电视机',
      '电饭煲',
      '空气净化器',
      '空气炸锅',
      '空调',
      '笔记本电脑',
      '蓝牙音响',
      '记忆枕',
      '静音吸尘器',
      '高清摄像头',
      '高速无线充电器',
    ],
  },
  legend: {
    orient: 'vertical',
    y: 'bottom',
    padding: [0, 0, 20, 0],
  },
  tooltip: {
    trigger: 'axis',
  },
  grid: {
    top: 40,
    right: 30,
    // bottom: 100,
  },

  series: [
    {
      data: [
        '86',
        '159',
        '0',
        '33',
        '42',
        '561',
        '189',
        '672',
        '0',
        '892',
        '125',
        '880',
        '264',
        '570',
        '341',
        '645',
        '635',
        '142',
        '250',
        '347',
        '379',
        '196',
        '473',
        '780',
        '223',
        '374',
        '307',
        '508',
        '662',
        '806',
        '306',
        '305',
        '783',
        '173',
        '467',
        '246',
        '536',
        '910',
        '451',
        '254',
        '758',
        '774',
        '104',
        '423',
      ],
      type: 'line',
      //   label: {
      //     show: true,
      //     color: '#fff',
      //   },
      itemStyle: {
        // normal: {
        color: '#409eff',
        // }
      },

      name: props.name,
    },
  ],
};
</script>

<template>
  <div class="relative h-full w-full">
    <VChart class="chart" :option="option" autoresize />
  </div>
</template>
