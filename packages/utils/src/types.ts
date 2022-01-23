// 获取组件参数类型
export type ComponentPropsType<T extends abstract new (...args: any) => any> = Partial<InstanceType<T>['$props']>
