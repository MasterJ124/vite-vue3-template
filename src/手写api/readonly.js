// shallowReadonly(浅只读) 与 readonly

// 定义一个readonlyHandler处理器
const readonlyHandler = {
  get(target, prop) {
    const result = Reflect.get(target, prop);
    console.log("拦截读取");
    return result;
  },
  set(target, prop, value) {
    console.warn("只能读取数据，不能设置");
    return true;
  },
  delete(target, prop) {
    console.warn("只能读取数据，不能删除");
    return true;
  },
};
// 定义一个shallowReadonly函数
function shallowReadonly(target) {
  // 判断数据类型
  if (
    target &&
    ["[object Object]", "[object Array]"].includes(
      Object.prototype.toString.call(target)
    )
  ) {
    return new Proxy(target, readonlyHandler);
  }
  return target;
}
// 定义一个readonly函数
function readonly(target) {
  // 判断数据类型
  if (
    target &&
    ["[object Object]", "[object Array]"].includes(
      Object.prototype.toString.call(target)
    )
  ) {
    // 判断数组
    if (Array.isArray(target)) {
      target.forEach((item, index) => {
        target[index] = readonly(item);
      });
    } else {
      Object.keys(target).forEach((key) => {
        target[key] = readonly(target[key]);
      });
    }
    return new Proxy(target, readonlyHandler);
  }
  return target;
}
