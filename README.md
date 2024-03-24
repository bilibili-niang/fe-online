# Hixtrip FE Online

## 准备

- fork 此仓库
- 根据如下要求实现相关代码
- 完成要求
  - 提交`pull request`
  - 提供页面截图

## 需求

1. 目前已经有`src/api/user.ts` 以及 `src/api/org.ts` 两个 API
2. 需要实现如下效果界面：

![](./docs/preview.jpg)

> 功能要求：
- 不限 ```React``` 或者 ```Vue```
- 需要拆分 `OrgTree` 以及 `UserTable` 两个组件
  - 两个组件自己维护相关的数据。
  - 体现两个组件的互相通信。
- 组织架构根据点上级节点进行查询子级节点实现异步加载。
- 用户 ```Table ``` 数据跟据点击 ```组织架构树形节点``` 以及 ```输入搜索关键字``` 查询。
  - 需要考虑防抖节流等功能点
- 风格不限
  - 示例图仅仅是效果展示，不需要完全符合。
  - 可以使用 ```UI Framework```, 如 ```ant-design```, ```element-ui```等
  - 如果不用```UI Framework```, 可以直接用原生的```<ul> <li>```, ```<table>``` 实现，不用实现相关的CSS样式, 可以加分。

## 其他简答题

### 如何将如下的`JSON`正确解析成 `Object`
```json
{
  "userId": 111323290434354540545
}
```
```js
JSON.parse(jsonString);
```


### 前端需要*稳定*每隔`1s`向服务端请求`API`, 请问如何实现？

```js

import axios from "axios";

const apiUrl = "demoUrl";

function sendRequest() {
  axios.get(apiUrl)
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
}

setInterval(sendRequest, 1000);

```

### 什么情况下，你会为你的项目引入状态管理库，比如`Redux`, `Pinia`, 可以简述一下起到了什么作用么？

- 应用中的多个组件需要访问和修改同一份数据时,状态管理库可以集中管理这些状态,方便状态变化可见
- 部分配置,登录状态保存至本地存储并在应用启动时恢复

### 为什么`ESM`与`CJS`不能兼容？

他们是js中两种不同的模块化标准，设计理念和实现机制有所不同，导致直接兼容上存在差异  
- CJS使用`require`来导入模块，并通过`module.exports`或`exports`对象来导出模块内容
- CJS是同步加载模块`require`调用时,立即返回模块内容,ESM则是异步加载,import语句在顶层是静态的,只有在编译时加载
