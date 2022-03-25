<template>
  <div>
    <cl-table
      v-model="menuTrees"
      :columns="columns"
    />
  </div>
</template>

<script lang="tsx" setup>
import { ref } from 'vue'
import { ClTable, TableColumn } from '@ccool/ui'
import { MenuItemType } from '@/store'
import menuApi from '@/api/menu'
import { listToTrees } from '@ccool/utils'

const menuTrees = ref<MenuItemType[]>([])

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
    key: 'path',
    field: 'path',
    title: '页面地址'
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

async function qryAllMenus () {
  const res = await menuApi.qryAllMenus()
  menuTrees.value = listToTrees((res.data || []), {
    root: 0,
    id: 'menuId',
    parentId: 'parentId',
    children: 'children'
  })
}

qryAllMenus()
</script>

<script lang="tsx">
export default {
  name: 'SystemMenu'
}
</script>
