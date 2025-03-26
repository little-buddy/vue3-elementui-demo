<script lang="ts" setup>
import { Right, Search } from '@element-plus/icons-vue';
import { onMounted, ref } from 'vue';
import { delayTime } from '~/utils';

const repMap = [
  {
    name: '1楼右12柜1层',
    num: '',
    remark: '',
    status: '启用',
    code: '0001007-772f1650f45e417b859828e32f4d4f5d',
  },
];

const modelOpen = defineModel('open', { default: false });
const model = defineModel();

// TODO 它这个系统太大，太绕了，新建仓库那部分就暂时不完成了,这里就是一个默认的选择项

const loading = ref(true);
const list = ref([]);

async function fetchData() {
  loading.value = true;
  await delayTime();
  list.value = repMap;
  loading.value = false;
}

function onClick(cell: any) {
  model.value = cell.row.code;
  modelOpen.value = false;
}

onMounted(() => {
  fetchData();
});

// TODO 这个组件本身是有一个回调的
</script>

<template>
  <el-dialog
    v-model="modelOpen"
    class="h-[640px] overflow-hidden w-[540px]!"
    title="仓位选择"
  >
    <el-table
      v-loading="loading"
      :data="list"
      :border="true"
      height="560"
      stripe
    >
      <el-table-column center prop="name" label="仓位序号" />
      <el-table-column center prop="num" label="仓位容量" />
      <el-table-column center prop="remark" label="仓位备注" />
      <el-table-column center prop="status" label="仓位状态" />
      <el-table-column label="操作">
        <template #default="scope">
          <div>
            <!-- input 下的append会把 btn的样式 定型 -->
            <el-button :icon="Right" @click="onClick(scope)"> 选择 </el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </el-dialog>
</template>
