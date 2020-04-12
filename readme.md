### vue-test

#### 项目简介

- demo

  模板文件夹

- card

  一个卡片动效，类似支付宝五福界面，左右滑动、翻转卡片

- cart

  学习vue写的购物车页面，商品数量的增加减少金额计算等

- music

  一个云音乐播放器，有歌曲列表、播放队列、切换随机播放/顺序播放

- simple-admin

  一个简单的element后台模板，没有适配移动端，用于一些小项目后台的快速构建

- map

  地图导览 基于腾讯地图gl api



#### 项目结构
所有应用共享node_modules，避免本地环境中node_modules重复，节省空间，便于管理

```
vue-test
├─node_modules
├─dist
├─project1
│   ├─assets
│   ├─components
│   ├─router
│   ├─store
│   ├─utils
│   ├─views
│   ├─App.vue
│   ├─main.js
│   ├─.gitignore
│   ├─package.json
│   └─readme.md
├─project2
│   ├─assets
│   ├─components
│   ├─router
│   ├─store
│   ├─utils
│   ├─views
│   ├─App.vue
│   ├─main.js
│   ├─.gitignore
│   ├─package.json
│   └─readme.md
├─.....
├─projectX
├─.gitignore
├─package.json
└─readme.md
```

实现步骤：

-  执行``vue create vue-test``尽量多的勾选初始依赖包，包括css预处理器、vuex、vue-router等，后续无需再安装依赖

- 然后src目录将作为新建项目的模板文件夹，执行``cp -r src demo``， 便得到项目``demo``

- 在demo下执行``npm init``，生成``package.json``，随后编辑``package.json``，加入命令
    ```
    {
      "serve": "npx ../node_modules/.bin/vue-cli-service serve ./main.js",
    "build": "npx ../node_modules/.bin/vue-cli-service build --dest ../dist/demo ./main.js"
    }
    ```
  注意修改``build``的输出路径
  最后``package.json``的大致内容
    ```
    {
      "name": "demo",
      "version": "1.0.0",
      "description": "",
      "main": "main.js",
      "scripts": {
        "serve": "npx ../node_modules/.bin/vue-cli-service serve ./main.js",
        "build": "npx ../node_modules/.bin/vue-cli-service build --dest ../dist/demo ./main.js"
      },
      "author": "",
      "license": "ISC"
    }
    ```
- 现在可以在每个子目录下单独调试和构建了