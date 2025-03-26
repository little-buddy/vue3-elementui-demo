<script lang="ts" setup>
import { Right, Search } from '@element-plus/icons-vue';
import { onMounted, ref } from 'vue';
import { delayTime } from '~/utils';

const repMap = [
  { name: '办公品仓库', code: '0001' },
  { name: '杭州仓', code: 'CK02' },
  { name: '无锡仓', code: 'CK01' },
  { name: '华北地区', code: 'CK03' },
  { name: '华东地区', code: 'CK04' },
  { name: '华南地区', code: 'CK05' },
  { name: '华中地区', code: 'CK06' },
  { name: '西南地区', code: 'CK07' },
  { name: '东北地区', code: 'CK08' },
  { name: '西北地区', code: 'CK09' },
  { name: '东南地区', code: 'CK10' },
  { name: '港澳台地区', code: 'CK11' },
  { name: '海外地区', code: 'CK12' },
  { name: '冷冻仓库', code: '0002' },
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
  model.value = cell.row.name;
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
    title="仓库选择"
  >
    <el-table
      v-loading="loading"
      :data="list"
      :border="true"
      height="560"
      stripe
    >
      <el-table-column center prop="name" label="仓库名称" />
      <el-table-column center prop="code" label="仓库编码" />
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
