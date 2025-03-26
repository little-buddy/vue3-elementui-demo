<script lang="ts" setup>
import {
  CirclePlus,
  Download,
  MoreFilled,
  Search,
} from '@element-plus/icons-vue';
import { ElMessage } from 'element-plus';
import { onMounted, reactive, ref } from 'vue';
import { delayTime } from '~/utils';

const mockData = [
  {
    prdId: '0002',
    prdProperty: '成品',
    prdType: '固定资产',
    prdName: '冷藏品',
    brand: '冷藏品',
    modeType: '冷藏品',
    prdUnit: '个',
    rep: '冷冻仓库',
    repId: '0001007-772f1650f45e417b859828e32f4d4f5d',
    buyOrder: 0,
    totalOutVol: 200,
    totalInVol: 1099,
    buyInNum: 1099,
    otherInNum: 0,
    buyOutNum: 100,
    otherOutNum: 0,
  },
  {
    prdId: 'vvv',
    prdProperty: '成品',
    prdType: '网关',
    prdName: 'mmm',
    brand: 'mmm',
    modeType: 'n',
    prdUnit: '件',
    rep: '杭州仓',
    repId: '0009007-772f1650f45e417b859828e32f4d4f5d',
    buyOrder: 0,
    totalOutVol: 0,
    totalInVol: 0,
    buyInNum: 0,
    otherInNum: 0,
    buyOutNum: 0,
    otherOutNum: 0,
  },
  {
    prdId: 'CP0020',
    prdProperty: '零件',
    prdType: '礼品',
    prdName: '空气炸锅',
    brand: '飞利浦',
    modeType: 'HD9741/91',
    prdUnit: '台',
    rep: '办公品仓库',
    repId: '0008007-772f1650f45e417b859828e32f4d4f5d',
    buyOrder: 0,
    totalOutVol: 0,
    totalInVol: 0,
    buyInNum: 17,
    otherInNum: 0,
    buyOutNum: 0,
    otherOutNum: 17,
  },
  {
    prdId: 'CP0023',
    prdProperty: '成品',
    prdType: '礼品',
    prdName: '智能马桶盖',
    brand: 'TOTO',
    modeType: 'TCF345CS',
    prdUnit: '个',
    rep: '办公品仓库',
    repId: '0001807-772f1650f45e417b859828e32f4d4f5d',
    buyOrder: 0,
    totalOutVol: 0,
    totalInVol: 7,
    buyInNum: 0,
    otherInNum: 0,
    buyOutNum: 0,
    otherOutNum: 7,
  },
];

const tableRef = ref();

const selectItems = [];

const dataLoading = ref(false);
const searchKey = ref('');
const data = ref([]);
const openNewDialog = ref(false);

onMounted(() => {
  mockFetch();
});

async function mockFetch() {
  dataLoading.value = true;
  await delayTime();
  data.value = mockData;
  dataLoading.value = false;
}

// 顶部逻辑

async function onSearch() {
  if (!searchKey.value) {
    return;
  }
  await mockFetch();
  ElMessage.warning(`搜索关键字 \`${searchKey.value}\` 触发`);
}

function onAdd() {
  openNewDialog.value = true;
}

function onBeforeClose(done: any) {
  done();
}

// TODO 表格逻辑
const lookShow = ref(false);
const onSelectable = (row: any) => true;
function onRowDbClick(row) {
  // 行双击 ->查看元素
}
function onRowClick(row) {
  // 行单击
  tableRef.value.toggleRowSelection(row);
}

// 分页逻辑
const pageSizes = [20, 50, 100, 200];
const pageConf = reactive({
  cur: 1,
  size: 20,
  total: 90,
});

function handleSizeChange(val: number) {
  // TODO 一般触发 size 的时候会 从第一页加载
  pageConf.size = val;
  pageConf.cur = 1;
  mockFetch();
}
function handleCurrentChange(val: number) {
  pageConf.cur = val;
  mockFetch();
}
</script>

<template>
  <div v-if="data.length > 0" class="h-full w-full flex flex-col">
    <div class="h-full w-full flex-1 overflow-hidden p-3">
      <div
        v-loading="dataLoading"
        class="ep-el-bg relative h-full flex flex-col"
      >
        <div class="flex justify-between p-4">
          <div>
            <div>
              <el-input
                v-model="searchKey"
                class="w-[280px]!"
                placeholder="产品编码/产品名称/品牌/规格型号/成本（单价/元）/标准售价(含税)/元/当前库存数/可用库存数"
                @keyup.enter="onSearch()"
              >
                <template #append>
                  <el-button :icon="Search" @click="onSearch()" />
                </template>
              </el-input>
            </div>
          </div>
          <div class="space-x-4">
            <el-button type="primary" @click="onAdd">
              <el-icon> <CirclePlus /> </el-icon>
              <span class="ml-2">新建</span>
            </el-button>

            <el-dropdown>
              <el-button>
                <span class="mr-2"> 更多</span>
                <el-icon> <MoreFilled /> </el-icon>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>
                    <el-icon> <Download></Download> </el-icon>
                    导出PDF</el-dropdown-item
                  >
                  <el-dropdown-item>
                    <el-icon> <Download></Download> </el-icon>
                    数据导出</el-dropdown-item
                  >
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>

        <!-- 因为有省略，所以居中也没有意义 -->
        <div class="relative w-full flex-1 overflow-hidden">
          <el-table
            ref="tableRef"
            :data="data"
            :border="true"
            height="100%"
            stripe
            @row-dblclick="onRowDbClick"
            @row-click="onRowClick"
          >
            <el-table-column
              type="selection"
              :selectable="onSelectable"
              show-overflow-tooltip
              center
              fixed
            />
            <el-table-column
              show-overflow-tooltip
              sortable
              prop="prdId"
              label="产品编码"
              width="100"
            ></el-table-column>
            <el-table-column
              show-overflow-tooltip
              sortable
              prop="prdProperty"
              label="产品属性"
              width="100"
            ></el-table-column>
            <el-table-column
              show-overflow-tooltip
              sortable
              prop="prdType"
              label="产品类型"
              width="100"
            ></el-table-column>
            <el-table-column
              show-overflow-tooltip
              sortable
              prop="prdName"
              label="产品名称"
              width="100"
            ></el-table-column>
            <el-table-column
              show-overflow-tooltip
              sortable
              prop="brand"
              label="品牌"
              width="100"
            ></el-table-column>
            <el-table-column
              show-overflow-tooltip
              sortable
              prop="modeType"
              label="规格型号"
              width="100"
            ></el-table-column>
            <el-table-column
              show-overflow-tooltip
              sortable
              prop="prdUnit"
              label="单位"
              width="100"
            ></el-table-column>
            <el-table-column
              show-overflow-tooltip
              sortable
              prop="rep"
              label="仓库"
              width="100"
            ></el-table-column>
            <el-table-column
              show-overflow-tooltip
              sortable
              prop="repId"
              label="仓位"
              width="100"
            ></el-table-column>
            <el-table-column
              show-overflow-tooltip
              sortable
              prop="buyOrder"
              label="采购订单"
              width="100"
            ></el-table-column>
            <el-table-column
              show-overflow-tooltip
              sortable
              prop="totalOutVol"
              label="总出库量"
              width="100"
            ></el-table-column>
            <el-table-column
              show-overflow-tooltip
              sortable
              prop="totalInVol"
              label="总入库量"
              width="100"
            ></el-table-column>
            <el-table-column
              show-overflow-tooltip
              sortable
              prop="buyInNum"
              label="采购入库库存"
              width="100"
            ></el-table-column>
            <el-table-column
              show-overflow-tooltip
              sortable
              prop="otherInNum"
              label="其他入库库存"
              width="100"
            ></el-table-column>
            <el-table-column
              show-overflow-tooltip
              sortable
              prop="buyOutNum"
              label="采购出库库存"
              width="100"
            ></el-table-column>
            <el-table-column
              show-overflow-tooltip
              sortable
              prop="otherOutNum"
              label="其他出库库存"
              width="100"
            ></el-table-column>
            <el-table-column
              show-overflow-tooltip
              sortable-column
              label="操作"
              fixed="right"
              width="180"
            >
              <el-button type="primary" @click.stop="">编辑</el-button>
              <el-button @click.stop="">查看</el-button>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <div class="ep-el-bg flex justify-center py-2">
      <el-pagination
        v-model:current-page="pageConf.cur"
        v-model:page-size="pageConf.size"
        :page-sizes="pageSizes"
        layout=" prev, pager, next, jumper, sizes,total"
        :total="pageConf.total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
  <div v-else class="h-full w-full flex items-center justify-center">
    <el-empty>
      <el-button :loading="dataLoading" type="primary" @click="mockFetch">
        刷新</el-button
      >
    </el-empty>
  </div>

  <ProductInfoForm v-model="openNewDialog"></ProductInfoForm>
  <!-- 这里很麻烦，但还是必须要去做 -->
  <el-drawer
    v-model="lookShow"
    title="I am the title"
    :direction="direction"
    :before-close="handleClose"
  >
    <span>Hi, there!</span>
  </el-drawer>
</template>
