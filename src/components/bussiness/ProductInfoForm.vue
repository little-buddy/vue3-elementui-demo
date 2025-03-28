<script lang="ts" setup>
import { Close, Plus, Search } from '@element-plus/icons-vue';
import { ElMessage } from 'element-plus';
import { computed, reactive, ref } from 'vue';
import { delayTime } from '~/utils';

const props = defineProps<{
  isEdit: boolean;
  info: any;
}>();

// constant

const defaultInfo = {
  prdId: '',
  prdProperty: '',
  prdType: '',
  prdName: '',
  brand: '',
  modeType: '',
  prdUnit: '',
  rep: '',
  repId: '',
  buyOrder: '',
  totalOutVol: '',
  totalInVol: '',
  buyInNum: '',
  otherInNum: '',
  buyOutNum: '',
  otherOutNum: '',
  prdAdmin: [],
  prdImg: [],
  price: 0,
  salePrice: 0,
  curKucun: 0,
  canKucun: 0,
};

const prdPropertyOptions = [
  {
    label: '成品',
    value: '0',
  },
  {
    label: '零件',
    value: '1',
  },
  {
    label: '组件',
    value: '2',
  },
];
const prdTypeOptions = [
  {
    label: '办公用品',
    value: '0',
  },
  {
    label: '固定资产',
    value: '1',
  },
  {
    label: '礼品',
    value: '2',
  },
  {
    label: '路由器',
    value: '3',
  },
  {
    label: '交换机',
    value: '4',
  },
  {
    label: '网关',
    value: '5',
  },
  {
    label: '网关CPU芯片',
    value: '6',
  },
  {
    label: '交换机电源',
    value: '7',
  },
];

const prdUnitOptions = [
  {
    label: '台',
    value: '0',
  },
  {
    label: '套',
    value: '1',
  },
  {
    label: '件',
    value: '2',
  },
  {
    label: '个',
    value: '3',
  },
  {
    label: '盒',
    value: '4',
  },
  {
    label: '箱',
    value: '5',
  },
  {
    label: '片',
    value: '6',
  },
];

const { isEdit = false, info = defaultInfo } = props;

const repOpen = ref(false);
const repIdOpen = ref(false);

const isShow = defineModel();

const title = computed(() => {
  return isEdit ? `编辑: ${info.prdName}` : '新建：产品信息';
});

const formRef = ref();

const form = ref({ ...info });

// TODO 这里很奇怪，通过prop绑定，可以做交出校验，但是 validator 获取到的值是undefined，而且 select 和 checkbox 都会无故报错
const formRules = reactive({
  rep: [
    {
      required: true,
      message: '[仓库]不能为空',
    },
  ],
  repId: [{ required: true, message: '[仓位]不能为空' }],
  prdName: [{ required: true, message: '[产品名称]不能为空' }],
  brand: [{ required: true, message: '[品牌]不能为空' }],
  prdProperty: [{ required: true, message: '[产品属性]不能为空' }],
  prdType: [{ required: true, message: '[产品类型]不能为空' }],
  modeType: [{ required: true, message: '[规格型号]不能为空' }],
  prdUnit: [{ required: true, message: '[单位]不能为空' }],
  prdAdmin: [
    {
      type: 'array',
      required: true,
      message: '[产品权限]请至少选择一项',
    },
  ],
});

const prdAdmOptions = ['销售', '采购', '赠送'];

function onBeforeClose(done) {
  done();
}

async function onRepId() {
  // TODO 校验
  try {
    const res = await formRef.value.validateField('rep');
    repIdOpen.value = true;
  } catch (error) {
    ElMessage.error('请先选择仓库');
  }
}

const saveLoading = ref(false);
async function onSave() {
  saveLoading.value = true;
  await delayTime();
  saveLoading.value = false;
  isShow.value = false;
}
</script>

<template>
  <div @click="isShow = true">123123123</div>
  <el-dialog
    v-model="isShow"
    :title="title"
    width="800"
    :before-close="onBeforeClose"
  >
    <div class="h-[480px] overflow-scroll">
      <el-scrollbar>
        <!-- TODO 一堆信息处理 -->
        <el-form
          ref="formRef"
          :model="form"
          label-position="top"
          :rules="formRules"
        >
          <el-row class="w-full" :gutter="20">
            <el-col :span="24">
              <el-form-item label="产品编码" prop="prdId">
                <el-input v-model="form.prdId"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="20" class="w-full">
            <el-col :span="12">
              <el-form-item label="仓库" prop="rep">
                <el-input v-model="form.rep" clearable readonly>
                  <template #suffix>
                    <el-icon
                      v-if="form.rep"
                      class="cursor-pointer"
                      @click="form.rep = ''"
                      ><Close></Close
                    ></el-icon>
                  </template>

                  <template #append>
                    <el-button
                      :icon="Search"
                      @click="repOpen = true"
                    ></el-button>
                  </template>
                </el-input>
              </el-form-item>
            </el-col>
            <Rep></Rep>
            <el-col :span="12">
              <el-form-item label="仓位" prop="repId">
                <el-input v-model="form.repId" readonly clearable>
                  <template #suffix>
                    <el-icon
                      v-if="form.repId"
                      class="cursor-pointer"
                      @click="form.repId = ''"
                      ><Close></Close
                    ></el-icon>
                  </template>

                  <template #append>
                    <el-button :icon="Search" @click="onRepId()"></el-button>
                  </template>
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="20" class="w-full">
            <el-col :span="12">
              <el-form-item label="产品名称" prop="prdName">
                <el-input v-model="form.prdName"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="品牌" prop="brand">
                <el-input v-model="form.brand"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="20" class="w-full">
            <el-col :span="12">
              <el-form-item label="产品属性" prop="prdProperty">
                <el-select v-model="form.prdProperty">
                  <el-option
                    v-for="item in prdPropertyOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="产品类型" prop="prdType">
                <el-select v-model="form.prdType">
                  <el-option
                    v-for="item in prdTypeOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="20" class="w-full">
            <el-col :span="12">
              <el-form-item label="规格型号" prop="modeType">
                <el-input v-model="form.modeType"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="单位" prop="prdUnit">
                <el-select v-model="form.prdUnit">
                  <el-option
                    v-for="item in prdUnitOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="20" class="w-full">
            <el-col :span="12">
              <el-form-item label="成本(单价/元)" prop="price">
                <el-input v-model.number="form.price"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="标准售价(含税)/元" prop="salePrice">
                <el-input v-model.number="form.salePrice"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="20" class="w-full">
            <el-col :span="12">
              <el-form-item label="总入库量" prop="totalInVol">
                <el-input-number
                  v-model="form.totalInVol"
                  class="w-full!"
                  :min="0"
                  controls-position="right"
                />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="总出库量" prop="totalOutVol">
                <el-input-number
                  v-model="form.totalOutVol"
                  class="w-full!"
                  :min="0"
                  controls-position="right"
                />
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="20" class="w-full">
            <el-col :span="12">
              <el-form-item label="当前库存数" prop="curKucun">
                <el-input-number
                  v-model="form.curKucun"
                  class="w-full!"
                  :min="0"
                  controls-position="right"
                />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="可用库存数" prop="canKucun">
                <el-input-number
                  v-model="form.canKucun"
                  class="w-full!"
                  :min="0"
                  controls-position="right"
                />
              </el-form-item>
            </el-col>
          </el-row>

          <el-row class="w-full" :gutter="20">
            <el-col :span="24">
              <el-form-item label="产品权限" prop="prdAdmin">
                <el-checkbox-group v-model="form.prdAdmin" size="large">
                  <el-checkbox-button
                    v-for="city in prdAdmOptions"
                    :key="city"
                    :value="city"
                  >
                    {{ city }}
                  </el-checkbox-button>
                </el-checkbox-group>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row class="w-full" :gutter="20">
            <el-col :span="24">
              <el-form-item label="产品图片" prop="prdImg">
                <!-- TODO 这里的预览还要我自己去完成? 简直开玩笑 -->
                <el-upload
                  v-model.file-list="form.prdImg"
                  list-type="picture-card"
                  :auto-upload="false"
                >
                  <el-icon><Plus /></el-icon>
                </el-upload>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-scrollbar>
    </div>

    <template #footer>
      <div class="flex justify-end">
        <el-button @click="isShow = false">取消</el-button>
        <el-button type="primary" :loading="saveLoading" @click="onSave()">
          保存
        </el-button>
        <!-- <el-button type="primary" plain @click="onSaveUpdate()"
          >保存并更新</el-button
        > -->
      </div>
    </template>
  </el-dialog>

  <Rep :key="`${repOpen}`" v-model:open="repOpen" v-model="form.rep"></Rep>
  <RepId
    :key="`${repIdOpen}`"
    v-model:open="repIdOpen"
    v-model="form.repId"
  ></RepId>
</template>
