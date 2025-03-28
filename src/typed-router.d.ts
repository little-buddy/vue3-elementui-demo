/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'vue-router'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    '/': RouteRecordInfo<'/', '/', Record<never, never>, Record<never, never>>,
    '//': RouteRecordInfo<'//', '/', Record<never, never>, Record<never, never>>,
    '//basicData/productInfo': RouteRecordInfo<'//basicData/productInfo', '/basicData/productInfo', Record<never, never>, Record<never, never>>,
    '//basicData/storeManage': RouteRecordInfo<'//basicData/storeManage', '/basicData/storeManage', Record<never, never>, Record<never, never>>,
    '//customerManage/customerInfo': RouteRecordInfo<'//customerManage/customerInfo', '/customerManage/customerInfo', Record<never, never>, Record<never, never>>,
    '//dashboard': RouteRecordInfo<'//dashboard', '/dashboard', Record<never, never>, Record<never, never>>,
    '//dataBoard/fukuan': RouteRecordInfo<'//dataBoard/fukuan', '/dataBoard/fukuan', Record<never, never>, Record<never, never>>,
    '//dataBoard/inoutdata': RouteRecordInfo<'//dataBoard/inoutdata', '/dataBoard/inoutdata', Record<never, never>, Record<never, never>>,
    '//dataBoard/shoukuan': RouteRecordInfo<'//dataBoard/shoukuan', '/dataBoard/shoukuan', Record<never, never>, Record<never, never>>,
    '//financialManage/fukuan': RouteRecordInfo<'//financialManage/fukuan', '/financialManage/fukuan', Record<never, never>, Record<never, never>>,
    '//financialManage/inbill': RouteRecordInfo<'//financialManage/inbill', '/financialManage/inbill', Record<never, never>, Record<never, never>>,
    '//financialManage/outbill': RouteRecordInfo<'//financialManage/outbill', '/financialManage/outbill', Record<never, never>, Record<never, never>>,
    '//financialManage/shoukuan': RouteRecordInfo<'//financialManage/shoukuan', '/financialManage/shoukuan', Record<never, never>, Record<never, never>>,
    '//financialManage/yingfu': RouteRecordInfo<'//financialManage/yingfu', '/financialManage/yingfu', Record<never, never>, Record<never, never>>,
    '//financialManage/yingfuback': RouteRecordInfo<'//financialManage/yingfuback', '/financialManage/yingfuback', Record<never, never>, Record<never, never>>,
    '//financialManage/yingfuin': RouteRecordInfo<'//financialManage/yingfuin', '/financialManage/yingfuin', Record<never, never>, Record<never, never>>,
    '//financialManage/yingshou': RouteRecordInfo<'//financialManage/yingshou', '/financialManage/yingshou', Record<never, never>, Record<never, never>>,
    '//financialManage/yingshouback': RouteRecordInfo<'//financialManage/yingshouback', '/financialManage/yingshouback', Record<never, never>, Record<never, never>>,
    '//financialManage/yingshouout': RouteRecordInfo<'//financialManage/yingshouout', '/financialManage/yingshouout', Record<never, never>, Record<never, never>>,
    '//flowstart': RouteRecordInfo<'//flowstart', '/flowstart', Record<never, never>, Record<never, never>>,
    '//handlecommit': RouteRecordInfo<'//handlecommit', '/handlecommit', Record<never, never>, Record<never, never>>,
    '//handledone': RouteRecordInfo<'//handledone', '/handledone', Record<never, never>, Record<never, never>>,
    '//handlesend': RouteRecordInfo<'//handlesend', '/handlesend', Record<never, never>, Record<never, never>>,
    '//handletodo': RouteRecordInfo<'//handletodo', '/handletodo', Record<never, never>, Record<never, never>>,
    '//inventoryManage/allot': RouteRecordInfo<'//inventoryManage/allot', '/inventoryManage/allot', Record<never, never>, Record<never, never>>,
    '//inventoryManage/otherin': RouteRecordInfo<'//inventoryManage/otherin', '/inventoryManage/otherin', Record<never, never>, Record<never, never>>,
    '//inventoryManage/otherout': RouteRecordInfo<'//inventoryManage/otherout', '/inventoryManage/otherout', Record<never, never>, Record<never, never>>,
    '//inventoryManage/stock': RouteRecordInfo<'//inventoryManage/stock', '/inventoryManage/stock', Record<never, never>, Record<never, never>>,
    '//messagecenter': RouteRecordInfo<'//messagecenter', '/messagecenter', Record<never, never>, Record<never, never>>,
    '//purchasingManage/purchaseApply': RouteRecordInfo<'//purchasingManage/purchaseApply', '/purchasingManage/purchaseApply', Record<never, never>, Record<never, never>>,
    '//purchasingManage/purchaseback': RouteRecordInfo<'//purchasingManage/purchaseback', '/purchasingManage/purchaseback', Record<never, never>, Record<never, never>>,
    '//purchasingManage/purchasein': RouteRecordInfo<'//purchasingManage/purchasein', '/purchasingManage/purchasein', Record<never, never>, Record<never, never>>,
    '//purchasingManage/purchaseOrder': RouteRecordInfo<'//purchasingManage/purchaseOrder', '/purchasingManage/purchaseOrder', Record<never, never>, Record<never, never>>,
    '//purchasingManage/supplierManage': RouteRecordInfo<'//purchasingManage/supplierManage', '/purchasingManage/supplierManage', Record<never, never>, Record<never, never>>,
    '//purchasingManage/supplierPriceSheet': RouteRecordInfo<'//purchasingManage/supplierPriceSheet', '/purchasingManage/supplierPriceSheet', Record<never, never>, Record<never, never>>,
    '//salesManage/priceSheet': RouteRecordInfo<'//salesManage/priceSheet', '/salesManage/priceSheet', Record<never, never>, Record<never, never>>,
    '//salesManage/salesback': RouteRecordInfo<'//salesManage/salesback', '/salesManage/salesback', Record<never, never>, Record<never, never>>,
    '//salesManage/salesout': RouteRecordInfo<'//salesManage/salesout', '/salesManage/salesout', Record<never, never>, Record<never, never>>,
    '//salesManage/salesSheet': RouteRecordInfo<'//salesManage/salesSheet', '/salesManage/salesSheet', Record<never, never>, Record<never, never>>,
    '//usercenter': RouteRecordInfo<'//usercenter', '/usercenter', Record<never, never>, Record<never, never>>,
    '/login': RouteRecordInfo<'/login', '/login', Record<never, never>, Record<never, never>>,
  }
}
