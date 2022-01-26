import { ClComs, FormItem } from '@ccool/ui'

export default [
  {
    com: ClComs.INPUT,
    index: 'username',
    label: '用户名',
    rule: {
      required: true,
      message: '必填项',
      trigger: 'change'
    },
    on: {
      change: ({ fctx }: any) => {
        console.log(fctx.model)
      }
    }
  },
  {
    com: ClComs.INPUT,
    index: 'password',
    label: '密码',
    attrs: {
      type: 'password'
    },
    rule: {
      required: true,
      message: '必填项',
      trigger: 'change'
    },
    on: {
      change: ({ fctx }: any) => {
        console.log(fctx.model)
      }
    }
  },
  {
    com: ClComs.SELECT,
    index: 'role',
    label: '角色',
    attrs: {
      full: true,
      options: [
        { label: '超级管理员', value: 'admin' },
        { label: '二级管理员', value: 'menager' },
        { label: '业务员', value: 'salesman' }
      ]
    }
  },
  {
    com: ClComs.SELECT,
    index: 'authority',
    label: '权限',
    value: [] as string [],
    attrs: {
      full: true,
      multiple: true,
      options: [
        { label: '新增', value: 'insert' },
        { label: '删除', value: 'remove' },
        { label: '更新', value: 'update' },
        { label: '查询', value: 'search' }
      ]
    },
    hidden: model => model.role === 'salesman'
  },
  {
    com: ClComs.INPUT,
    index: 'nickname',
    label: '昵称',
    attrs: {
      placeholder: '请输入昵称'
    }
  },
  {
    com: ClComs.DATE_PICKER,
    index: 'birthday',
    label: '生日',
    attrs: {
      valueFormat: 'YYYY-MM-DD',
      placeholder: '请选择日期'
    }
  },
  {
    com: ClComs.RADIO_GROUP,
    index: 'sex',
    label: '性别',
    attrs: {
      options: [
        { label: '男', value: '0' },
        { label: '女', value: '1' }
      ]
    }
  },
  {
    com: ClComs.CHECKBOX_GROUP,
    index: 'hobbies',
    label: '爱好',
    value: [],
    attrs: {
      options: [
        { label: '篮球', value: '0' },
        { label: '足球', value: '1' },
        { label: '游戏', value: '3' },
        { label: '小说', value: '4' }
      ]
    }
  }
] as FormItem[]
