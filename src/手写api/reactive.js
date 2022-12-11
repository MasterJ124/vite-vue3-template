// shallowReactive(浅劫持) 与 reactive

// 定义一个reactiveHandler处理器
const reactiveHandler = {
  // 获取属性
  get(target, prop) {
    // 拦截属性读取
    const result = Reflect.get(target, prop);
    console.log("拦截读取");
    return result;
  },
  // 设置属性
  set(target, prop, value) {
    // 拦截修改或添加属性
    const result = Reflect.set(target, prop, value);
    console.log("拦截设置");
    return result;
  },
  // 删除属性
  deleteProperty(target, prop) {
    const result = Reflect.deleteProperty(target, prop);
    console.log("拦截删除");
    return result;
  },
};
// 定义shallowReactive函数
function shallowReactive(target) {
  // 判断目标对象类型(对象/数组)
  if (
    target &&
    ["[object Object]", "object Array"].includes(
      Object.prototype.toString.call(target)
    )
  ) {
    return new Proxy(target, reactiveHandler);
  }
  // 基本类型直接返回
  return target;
}
// 定义一个reactive函数传入目标
function reactive(target) {
  // 判断目标对象类型(对象/数组)
  if (
    target &&
    ["[object Object]", "object Array"].includes(
      Object.prototype.toString.call(target)
    )
  ) {
    // 对数组、对象深层次遍历
    if (Array.isArray(target)) {
      target.forEach((item, index) => {
        target[index] = reactive(item);
      });
    } else {
      Object.keys(target).forEach((key) => {
        target[key] = reactive(target[key]);
      });
    }
    return new Proxy(target, reactiveHandler);
  }
  // 基本类型直接返回
  return target;
}
