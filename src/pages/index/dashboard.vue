<script setup lang="ts">
import { BarChart } from 'echarts/charts';
import {
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent,
} from 'echarts/components';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import VChart, { THEME_KEY } from 'vue-echarts';
import { GridItem, GridLayout } from 'vue-grid-layout-v3';

use([
  CanvasRenderer,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  BarChart,
]);

const layout = [
  // line
  { x: 0, y: 0, w: 3, h: 3 },
  { x: 3, y: 0, w: 3, h: 3 },
  { x: 6, y: 0, w: 6, h: 3 },
  // line
  { x: 0, y: 3, w: 3, h: 3 },
  { x: 3, y: 3, w: 3, h: 3 },
  { x: 6, y: 3, w: 6, h: 3 },
  // line
  { x: 0, y: 6, w: 3, h: 3 },
  { x: 3, y: 6, w: 3, h: 3 },
  { x: 6, y: 6, w: 6, h: 3 },
  // line
  { x: 0, y: 9, w: 3, h: 2 },
  { x: 3, y: 9, w: 3, h: 2 },
  { x: 6, y: 9, w: 3, h: 2 },
  { x: 9, y: 9, w: 3, h: 2 },
  // line
  { x: 0, y: 11, w: 12, h: 4 },
  // line
  { x: 0, y: 15, w: 3, h: 2 },
  { x: 3, y: 15, w: 3, h: 2 },
  { x: 6, y: 15, w: 3, h: 2 },
  { x: 9, y: 15, w: 3, h: 2 },
  // line
  { x: 0, y: 17, w: 12, h: 4 },
];

layout.forEach((item: any, index) => {
  item.i = index.toString();
});

const data = {
  curRepNum: 0,
  canRepNum: 0,
  prdCanRepNum: 0,
  salesNum: 127280,
  doneUserNum: 13,
  salesNumLine: 0,
  buyNum: 1624,
  signSupplierNum: 19,
  buyNumLine: 0,
  yingshouNum: 292602,
  checkNum: 112,
  shoukuanNum: 93730,
  shoukuanUserNum: 112,
  shoukuanLine: 0,
  yingfuNum: 115040,
  supplierNum: 30,
  fukuanNum: 80822,
  fukuanSupplierNum: 38,
  fukuanLine: 0,
};

const listData = [
  {
    title: '当前库存数',
    dataKey: 'curRepNum',
    color: '#695252',
  },
  {
    title: '可用库存数',
    dataKey: 'canRepNum',
    color: '#695353',
  },
  {
    title: '产品可用库存数',
    dataKey: 'prdCanRepNum',
  },
  {
    title: '销售总金额',
    dataKey: 'salesNum',
    color: '#601111',
  },
  {
    title: '成交客户数',
    dataKey: 'doneUserNum',
    color: '#814812',
  },
  {
    title: '销售金额趋势',
    dataKey: 'salesNumLine',
  },
  {
    title: '采购总金额',
    dataKey: 'buyNum',
    color: '#41630f',
  },
  {
    title: '签订供应商数量',
    dataKey: 'signSupplierNum',
    color: '#0c7070',
  },
  {
    title: '采购金额趋势',
    dataKey: 'buyNumLine',
  },
  {
    title: '应收账款总金额',
    dataKey: 'yingshouNum',
    color: '#13327e',
  },
  {
    title: '对账客户数量',
    dataKey: 'checkNum',
    color: '#5d2f84',
  },
  {
    title: '收款总金额',
    dataKey: 'shoukuanNum',
    color: '#821f7d',
  },
  {
    title: '收款客户数量',
    dataKey: 'shoukuanUserNum',
    color: '#7d132f',
  },
  {
    title: '收款金额趋势',
    dataKey: 'shoukuanLine',
  },
  {
    title: '应付账款总金额',
    dataKey: 'yingfuNum',
    color: '#731723',
  },
  {
    title: '对账供应商数量',
    dataKey: 'supplierNum',
    color: '#933d3d',
  },
  {
    title: '付款总金额',
    dataKey: 'fukuanNum',
    color: '#4a6e88',
  },
  {
    title: '付款供应商数量',
    dataKey: 'fukuanSupplierNum',
    color: '#142882',
  },
  {
    title: '付款金额趋势',
    dataKey: 'fukuanLine',
  },
];
</script>

<template>
  <!-- 表格组件了用了 Vue-Grid 来满足兼容性 -->

  <div class="h-full w-full overflow-scroll">
    <el-scrollbar>
      <GridLayout
        v-model:layout="layout"
        :col-num="12"
        :row-height="80"
        :is-draggable="false"
        :is-resizable="false"
      >
        <GridItem
          v-for="(item, index) in layout"
          :key="index"
          :x="item.x"
          :y="item.y"
          :w="item.w"
          :h="item.h"
          :i="item.i"
        >
          <el-card class="h-full flex flex-col" body-class="h-full p-0!">
            <template #header>
              <span class="font-bold">
                {{ listData[item.i].title }}
              </span>
            </template>

            <div
              v-if="listData[item.i].color"
              class="relative h-full flex items-center justify-center text-[36px] font-bold"
              :style="{
                color: listData[item.i].color,
              }"
            >
              <span>
                {{ data[listData[item.i].dataKey] }}
              </span>
            </div>
            <DashboardBar
              v-else-if="listData[item.i].dataKey === 'prdCanRepNum'"
              :name="listData[item.i].title"
            />
            <DashboardLine v-else :name="listData[item.i].title" />
          </el-card>
        </GridItem>
      </GridLayout>
    </el-scrollbar>
  </div>
</template>
