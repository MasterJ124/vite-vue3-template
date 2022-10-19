/**
 * 通用去重方法
 * list 去重数组
 * key 去重依赖键
 */
export function getUniqueArray<T>(list: Array<any>, key: string): Array<any> {
  const newArr: Array<any> = [];
  const oldArr: Array<any> = JSON.parse(JSON.stringify(list));
  const keys: Array<T> = Array.from(new Set(oldArr.map((item) => item[key])));
  keys.forEach((item) => {
    newArr.push(oldArr.find((elem) => elem[key] === item));
  });
  return newArr;
}

/**
 * @description: 判断值是否未某个类型
 */
export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`;
}

/**
 * @description:  是否为函数
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export function isFunction<T>(val: unknown): val is T {
  return is(val, 'Function');
}
