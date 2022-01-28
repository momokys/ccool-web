export default {
  url: '/api/system/menu/all',
  method: 'GET',
  respose: () => ([
    {
      menuId: 1,
      menuCode: 'System',
      menuType: 'D',
      menuName: '系统管理',
      parentId: 0
    },
    {
      menuId: 2,
      menuCode: 'Menu',
      menuType: 'M',
      menuName: '菜单管理',
      parentId: 1
    },
    {
      menuId: 3,
      menuCode: 'User',
      menuType: 'M',
      menuName: '用户管理',
      parentId: 1
    },
    {
      menuId: 4,
      menuCode: 'Role',
      menuType: 'M',
      menuName: '角色管理',
      parentId: 1
    }
  ])
}
