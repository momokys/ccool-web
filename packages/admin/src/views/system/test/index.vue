<template>
  <div>
    <cl-table
      v-model="tableData"
      :columns="columns"
    />
    <!-- <cl-form
      v-model="formData"
      :form-items="formItems"
      :label-width="'100px'"
      :label-position="'right'"
      :layout="'grid'"
    /> -->
  </div>
</template>

<script lang="tsx" setup>
import { ClTable, TableColumn } from '@ccool/ui'
// import { ref } from 'vue'
// import { FormItem, ClForm } from '@ccool/ui'
// import items from '@/forms/test'

// const formData = ref<any>({})
// const formItems: FormItem[] = items

const tableData = [
  { menuCode: 'system', menuName: '系统管理', menuType: 'D' },
  { menuCode: 'system', menuName: '系统管理', menuType: 'D' },
  { menuCode: 'system', menuName: '系统管理', menuType: 'D' },
  { menuCode: 'system', menuName: '系统管理', menuType: 'D' },
  { menuCode: 'system', menuName: '系统管理', menuType: 'D' },
  { menuCode: 'system', menuName: '系统管理', menuType: 'D' },
  { menuCode: 'system', menuName: '系统管理', menuType: 'D' },
  { menuCode: 'system', menuName: '系统管理', menuType: 'D' },
  { menuCode: 'system', menuName: '系统管理', menuType: 'D' },
  { menuCode: 'system', menuName: '系统管理', menuType: 'D' },
  { menuCode: 'system', menuName: '系统管理', menuType: 'D' },
  { menuCode: 'system', menuName: '系统管理', menuType: 'D' },
  { menuCode: 'system', menuName: '系统管理', menuType: 'D' },
  { menuCode: 'system', menuName: '系统管理', menuType: 'D' },
  { menuCode: 'system', menuName: '系统管理', menuType: 'D' },
  { menuCode: 'system', menuName: '系统管理', menuType: 'D' },
  { menuCode: 'system', menuName: '系统管理', menuType: 'D' },
  { menuCode: 'system', menuName: '系统管理', menuType: 'D' }
]

const columns: TableColumn[] = [
  {
    key: 'menuCode',
    field: 'menuCode',
    title: '菜单编码'
  },
  {
    key: 'menuName',
    field: 'menuName',
    title: '菜单名称'
  },
  {
    key: 'menuType',
    field: 'menuType',
    title: '菜单类型'
  },
  {
    key: 'operation',
    title: '操作',
    slots: {
      default: () => (
        <>
          <el-button>编辑</el-button>
          <el-button>删除</el-button>
        </>
      )
    }
  }
]

</script>

<script lang="tsx">
export default {
  name: 'SystemTest'
}
</script>
