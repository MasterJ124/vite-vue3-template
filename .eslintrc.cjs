module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: 'vue-eslint-parser', //定义ESLint的解析器
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/prettier',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  // 添加规则
  /**
   * eslint https://eslint.bootcss.com/docs/rules/
   *
   * https://eslint.vuejs.org/rules/
   *
   * typescript-eslint规则 https://typescript-eslint.io/rules/
   * 0 or 'off'
   * 1 or 'warn'
   * 2 or 'error'
   */
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    '@typescript-eslint/no-explicit-any': ['off'],
    // 自定义属性断字  my-prop  (always,never,ignore)
    'vue/attribute-hyphenation': [0, 'always'],
    // html标签自关闭
    'vue/html-self-closing': [
      1,
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    // 组件名称模板  PascalCase,kebab-case,registeredComponentsOnly,ignores
    'vue/component-name-in-template-casing': [1, 'PascalCase'],
    // 结束括号间距  关闭>标签括号之前强制执行一致的间距样式
    'vue/html-closing-bracket-spacing': 0,
    // 单行元素的内容前后换行
    'vue/singleline-html-element-content-newline': 0,
    // 禁止注册模板中未使用的组件
    'vue/no-unused-components': 1,
    // 多行元素的内容前后换行
    'vue/multiline-html-element-content-newline': 0,
    // 禁止在与 v-for 相同的元素上使用 v-if
    'vue/no-use-v-if-with-v-for': 1,
    // 要求或禁止在标签的右括号前换行
    'vue/html-closing-bracket-newline': 0,
    // template模板js解析错误
    'vue/no-parsing-error': 1,
    // 强制组建中方法顺序
    'vue/order-in-components': 2,
    // 强制执行有效的 `v-show` 指令
    'vue/valid-v-show': 1,
    // 要求使用 `===` 和 `!==`
    'vue/eqeqeq': 2,
    // 禁用 tab
    'no-tabs': 0,
    // 禁用 var
    'no-var': 1,
    // 强制使用一致的反勾号、双引号或单引号
    quotes: [
      2,
      'single', // 要求尽可能地使用单引号
      {
        avoidEscape: true, // 允许字符串使用单引号或双引号
        allowTemplateLiterals: true, // 允许字符串使用反勾号
      },
    ],
    // 禁止删除变量
    'no-delete-var': 2,
    // 要求使用 const 声明那些声明后不再被修改的变量
    'prefer-const': [
      2,
      {
        ignoreReadBeforeAssign: false, // 这是一个避免与 no-use-before-define 规则（不带 'nofunc' 选项）产生冲突的选项。如果为 true，该规则将忽略声明和第一次赋值之间的变量。默认为 false
      },
    ],
    // 强制 generator 函数中 * 号周围有空格  es6 Generators函数
    'generator-star-spacing': 'off',
    // 禁止混合使用不同的操作符 运算符
    'no-mixed-operators': 0,
    // 强制箭头函数的箭头前后使用一致的空格（--fix)
    'arrow-spacing': 1,
    // 禁止或强制在代码块中开括号前和闭括号后有空格（--fix)
    'block-spacing': 1,
    // 不允许在 case 子句中使用词法声明
    'no-case-declarations': 1,
    // 要求使用骆驼拼写法
    camelcase: 0,
    // 缩进
    indent: 'off',
    'vue/html-indent': 'off',
  },
};
