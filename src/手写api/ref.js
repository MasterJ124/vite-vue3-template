// shallowRef(浅劫持) 与 ref

// 定义一个shallowRef函数
function shallowRef(target) {
  return {
    // 保存target
    _value: target,
    get value() {
      console.log("劫持读取");
      return this._value;
    },
    set value(val) {
      console.log("劫持修改数据");
      this._value = val;
    },
  };
}
// 定义一个ref函数
function ref(target) {
  target = reactive(target);
  return {
    // 保存target
    _value: target,
    get value() {
      console.log("劫持读取");
      return this._value;
    },
    set value(val) {
      console.log("劫持修改数据");
      this._value = val;
    },
  };
}
