<script lang="ts" setup>
import type { ComponentSize } from 'element-plus';
import { AddLocation, Search } from '@element-plus/icons-vue';
import { ref } from 'vue';

const tableRef = ref();

const selectItems = [];

const data = Array.from({ length: 20 }).fill({
  prdId: '1',
  prdProperty: '零件',
  prdType: '固定资产',
  prdName: '11',
  brand: '11',
  modeType: '111',
  prdUnit: '盒',
  rep: '办公品仓库',
  repId: '0001007-772f1650f45e417b859828e32f4d4f5d',
  buyOrder: 0,
  totalOutVol: 0,
  totalInVol: 0,
  buyInNum: 0,
  otherInNum: 0,
  buyOutNum: 0,
  otherOutNum: 0,
});

const onSelectable = (row: any) => true;

const currentPage1 = ref(5);
const currentPage2 = ref(5);
const currentPage3 = ref(5);
const currentPage4 = ref(4);
const pageSize2 = ref(100);
const pageSize3 = ref(100);
const pageSize4 = ref(100);
const size = ref<ComponentSize>('default');
const background = ref(false);
const disabled = ref(false);

function handleSizeChange(val: number) {
  console.log(`${val} items per page`);
}
function handleCurrentChange(val: number) {
  console.log(`current page: ${val}`);
}
</script>

<template>
  <div class="h-full w-full flex flex-col">
    <div class="h-full w-full flex-1 overflow-hidden p-3">
      <div class="ep-el-bg relative h-full flex flex-col">
        <div class="flex justify-between p-4">
          <div>
            <el-input
              placeholder="产品编码/产品名称/品牌/规格型号/成本（单价/元）/标准售价(含税)/元/当前库存数/可用库存数"
            >
              <template #prepend>
                <el-button :icon="Search" />
              </template>
            </el-input>
          </div>
          <div>
            <el-button>
              <el-icon> <AddLocation></AddLocation> </el-icon>
              新建</el-button
            >
            <el-button>
              <el-icon> <AddLocation></AddLocation> </el-icon>
              更多</el-button
            >
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
              width="160"
            >
              <el-button>编辑</el-button>
              <el-button>查看</el-button>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <div class="ep-el-bg flex justify-center py-2">
      <el-pagination
        v-model:current-page="currentPage4"
        v-model:page-size="pageSize4"
        :page-sizes="[100, 200, 300, 400]"
        :size="size"
        :disabled="disabled"
        :background="background"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>
