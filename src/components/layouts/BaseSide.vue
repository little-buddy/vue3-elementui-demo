<script lang="ts" setup>
import {
  Avatar,
  Box,
  Cellphone,
  Checked,
  CircleCheck,
  Close,
  Coin,
  Collection,
  CopyDocument,
  Document,
  DocumentAdd,
  DocumentChecked,
  DocumentCopy,
  DocumentRemove,
  Expand,
  Finished,
  GoodsFilled,
  Menu as IconMenu,
  Link,
  List,
  Location,
  Management,
  Notification,
  Remove,
  Sell,
  Setting,
  SetUp,
  Shop,
  Sort,
  Stamp,
  Ticket,
  TopRight,
  User,
  Wallet,
  Warning,
  WindPower,
} from '@element-plus/icons-vue'
import { reactive } from 'vue'

// const isCollapse = ref(true)
function handleOpen(key: string, keyPath: string[]) {
  // eslint-disable-next-line no-console
  console.log(key, keyPath)
}
function handleClose(key: string, keyPath: string[]) {
  // eslint-disable-next-line no-console
  console.log(key, keyPath)
}

const MenuData = reactive([{
  icon: IconMenu,
  name: '仪表盘',
  index: '/dashboard',
}, {
  icon: SetUp,
  name: '数据看板',
  subMenu: [
    { icon: SetUp, name: '进销存数据看板', index: '/dataBoard/inoutdata' },
    { icon: SetUp, name: '财务收支统计-收款统计', index: '/dataBoard/shoukuan' },
    { icon: SetUp, name: '财务收支统计-付款统计', index: '/dataBoard/fukuan' },
  ],
}, {
  icon: Management,
  name: '基础数据',
  subMenu: [
    { icon: Box, name: '产品信息', index: '/basicData/productInfo' },
    { icon: Notification, name: '仓库管理', index: '/basicData/storeManage' },
  ],
}, { icon: Avatar, name: '客户管理', subMenu: [
  { icon: User, name: '客户信息', index: '/customerManage/customerInfo' },
] }, { icon: GoodsFilled, name: '销售管理', subMenu: [
  { icon: Document, name: '报价单', index: '/salesManage/priceSheet' },
  { icon: Link, name: '销售订单', index: '/salesManage/salesSheet' },
  { icon: DocumentRemove, name: '销售出库', index: '/salesManage/salesout' },
  { icon: Warning, name: '销售退货', index: '/salesManage/salesback' },
] }, { icon: Shop, name: '采购管理', subMenu: [
  { icon: Stamp, name: '供应商管理', index: '/purchasingManage/supplierManage' },
  { icon: Cellphone, name: '供应商价格表', index: '/purchasingManage/supplierPriceSheet' },
  { icon: Checked, name: '采购申请', index: '/purchasingManage/purchaseApply' },
  { icon: Expand, name: '采购订单', index: '/purchasingManage/purchaseOrder' },
  { icon: Sell, name: '采购入库', index: '/purchasingManage/purchasein' },
  { icon: TopRight, name: '采购退货', index: '/purchasingManage/purchaseback' },
] }, { icon: List, name: '库存管理', subMenu: [
  { icon: CopyDocument, name: '其他入库单', index: '/inventoryManage/otherin' },
  { icon: Coin, name: '其他出库单', index: '/inventoryManage/otherout' },
  { icon: Sort, name: '库存调拨', index: '/inventoryManage/allot' },
  { icon: CircleCheck, name: '库存盘点', index: '/inventoryManage/stock' },
] }, { icon: Ticket, name: '财务管理', subMenu: [
  { icon: DocumentRemove, name: '应收账款-销售出库', index: '/financialManage/yingshouout' },
  { icon: Close, name: '应收账款-销售退货', index: '/financialManage/yingshouback' },
  { icon: DocumentAdd, name: '应付账款-采购入库', index: '/financialManage/yingfuin' },
  { icon: Remove, name: '应付账款-采购退货', index: '/financialManage/yingfuback' },
  { icon: Finished, name: '应收账款-对账', index: '/financialManage/yingshou' },
  { icon: Collection, name: '销项发票', index: '/financialManage/outbill' },
  { icon: DocumentCopy, name: '收款单', index: '/financialManage/shoukuan' },
  { icon: WindPower, name: '应付账款-对账', index: '/financialManage/yingfu' },
  { icon: Wallet, name: '进项发票', index: '/financialManage/inbill' },
  { icon: DocumentChecked, name: '付款单', index: '/financialManage/fukuan' },
] }, { icon: SetUp, name: '流程发起', index: '/flowstart',
}])
</script>

<template>
  <el-menu
    router
    default-active="1"
    class="el-menu-vertical-demo w-[280px]"
    unique-opened
    @open="handleOpen"
    @close="handleClose"
  >
    <div v-for="menu in MenuData" :key="menu.name">
      <el-menu-item v-if="!menu.subMenu" :index="menu.index">
        <el-icon>
          <Component :is="menu.icon" />
        </el-icon>
        <template #title>
          {{ menu.name }}
        </template>
      </el-menu-item>
      <el-sub-menu v-else :index="menu.name">
        <template #title>
          <el-icon>
            <Component :is="menu.icon" />
          </el-icon>
          <span>{{ menu.name }}</span>
        </template>

        <el-menu-item-group v-for="subMenu in menu.subMenu" :key="subMenu.name">
          <el-menu-item :index="subMenu.index">
            <template #title>
              <el-icon>
                <Component :is="subMenu.icon" />
              </el-icon>
              <span>{{ subMenu.name }}</span>
            </template>
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </div>
  </el-menu>
</template>
