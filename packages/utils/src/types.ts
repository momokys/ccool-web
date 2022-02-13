// 获取组件参数类型
export type ComponentPropsType<T extends abstract new (...args: any) => any> = Partial<InstanceType<T>['$props']>

export type ExposedToComputed<T extends object> = {
  [key in keyof T]: () => T[key]
}
