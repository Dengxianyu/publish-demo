# 生成 npm 包且发布的一个示例

1. 对 webpack 5 tree shaking 的测试结果如下，若想达到tree shaking 需要满足以下条件：
- 必须引入的是 ES6 模块的包，如 lodash 就不是需要引入 lodash-es
- 必须 webpack config > optimization > providedExports 和 usedExports 都设置为 false (默认值为 true)
- package.json 的 sideEffects 在 webpack 5 中毫无影响

2. 标准的包最好生成 ES 目录存放 ES 版本，以及 lib 目录存放 commonjs 版本， package.json 的 main 指向 commonjs 版本比较合理。如何合理的打包出这些版本还待学习！

3. 包的单元测试、支持引用者的按模块引用、自动生成changelog、提交到 github 时自动发布，也都是待学习的地方