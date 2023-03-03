## 技术栈

- TS
- Pnpm
- husky
- Prettier + eslint
- Cspell
- Github Action

## 所有组件一次性全部导入并且作为插件使用

```js
import LakeView from 'lake-view'
app.use(LakeView)
```

- 建立入口文件 `index.js`
- 将所有组件导入为一个数组，创建一个 install 函数，循环调用
- 默认导出插件

## 单个组件导入并作为插件使用

```js
import { LText } from 'lake-view'
app.use(LText)
// or
app.components(LText.name, LText)
```

- 每个组件新建一个文件夹，并且创建单独的 install 文件
- 每个组件设计成一个插件
- 在全局入口文件导出
