# vue 服务端渲染框架（Nuxt.js）实战

**开发环境介绍**

```
  1. 开发工具： vscode
  2. 开发语言： vue
  3. 开发框架： Nuxt.js + koa
```

**项目目录说明**

```
  .nuxt
  assets------------------------------资源文件，放未编译的less scss js文件
  components--------------------------组件里面asyncData是不执行的
  layouts-----------------------------组织布局，可以扩展默认布局，或是给每个页面指定自定义的布局
  middleware--------------------------中间件
  pages--------------------------------页面路由配置
                                       Vue 组件的生命周期内， 只有 beforeCreate 和 created 这两个方法会在 客户端和服务端被调用。其他生命周期函数仅在客户端被调用。
  plugins------------------------------插件  判断当前执行环境是否是服务端process.server = true
  server-------------------------------koa 服务
  static-------------------------------此文件夹的内容不会被Nuxt.js 调用webpack编译处理 直接映射到项目根目录
  store--------------------------------vuex状态树，store下面的每个js文件都会被转换成状态树指定的子模块
                                       注意的就是每个js文件里面的state必须是一个函数，防止实例之间的相互引用异常，
                                       鉴于this的使用问题建议使用normal模式

                                       fetch使用，跟asyncData的不同之处在于前者不会设置数据到组件，而后者会
```

```js
routes: [
	{
		name: 'index',
		path: '/',
		component: 'pages/index.vue',
	},
	{
		name: 'about',
		path: '/about',
		component: 'pages/about.vue',
	},
	{
		name: 'product',
		path: '/product',
		component: 'pages/product/index.vue',
	},
]
```
