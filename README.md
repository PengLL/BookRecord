##### 在最开始学习vue时，自己写了个todolist作为demo，后来把todolist重写加强，做成了一个适应移动端的**书籍阅读管理App**，现在就和大家分享一下这个入门实战项目

![vue.png](http://upload-images.jianshu.io/upload_images/1916203-f6c3f8a0135ff39f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 一 项目初探
**项目概览:**  




![首页.png](http://upload-images.jianshu.io/upload_images/1916203-4b99357ace03417d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![侧边栏.png](http://upload-images.jianshu.io/upload_images/1916203-61c8e46314d8e4e8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![详情页.png](http://upload-images.jianshu.io/upload_images/1916203-edef84a465b9a2c7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



**开发环境：**
> -  node 6.9.2     
  - npm  4.2.0    
  - webpack 2.2.1

**用git启动项目：**
``` bash
git clone https://github.com/PengLL/BookRecord.git

cd BookRecord

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

```
### 二 项目代码结构
项目框架是Vue-Cli的模板，但未使用eslint,test,karma等部分，然后在此基础上根据实际需求添加了一些loader和npm packages

![代码结构.png](http://upload-images.jianshu.io/upload_images/1916203-adf4c10728fdfd07.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### Tips：

1.我们可以看到目录结构和Vue官方webpack模板几乎一致，只是src中有所添加
```
src/assets      //自己写的js,css库文件,图片等

src/store      //vuex状态管理器的内容

```
2.项目支持了**sass**，因此在模板基础上添加了**node-sass**和**sass-loader**
3.为了移动端的多屏幕适应，在static/js中添加了手淘的[flexible.js](https://github.com/amfe/lib-flexible),以便使用rem
4.模板基础上添加了vuex
5.使用了better-scroll处理移动端scroll事件
6.fastclick处理移动端点击事件
## 三 项目分析
1.从上一部分的项目结构和Tips我们可以看到，该项目虽小，但是五脏俱全，移动端的多屏适应和基本事件处理都有所涉及，通过这个小项目我们可以练习以下几个内容
>- vue2.0
 - vuex
 - vue-router
 - ES6
 - webpack
 - 多屏适应
 - 移动端事件处理

2.我们通过Localstorage来模拟后端数据的增删改查

3.为了和其他第三方代码进行区别，将Pl作为前缀，组件的css的类名都是以**组件名称为开头**，vuex中的**mutation-types的常量名**都是**根据功能**来命名的。所以很多命名相对比较长，便于看名识意。

4.书籍阅读管理App由的所有组件：


![组件.png](http://upload-images.jianshu.io/upload_images/1916203-aa74271c858d830c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


5.vuex


![vuex.png](http://upload-images.jianshu.io/upload_images/1916203-b9dd589cea369ebc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

>  笔者并未将vuex的modules中的一个js文件对应一个组件，现阶段只根据实际状态的复杂度划分了三个模块，如果后续在某些组件上增加功能，vuex内部结构还需要重新进行改造。
[官方的vuex的demo](https://github.com/vuejs/vuex/tree/dev/examples/shopping-cart)笔者最开始也是参考的官方推荐的代码结构。

6.vue-router

![vue-rouer.png](http://upload-images.jianshu.io/upload_images/1916203-a54d505f29594a1c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
>  由于项目简单，只有两个组件跳转，因此vue-router只有一个index.js文件

## 四 总结
>对于整个项目基本结构到此为止，对于有兴趣深入了解的需要去看看实际的代码，文章中无法将一些逻辑结构或者更细节的东西阐述出来了。 不过在项目之外还有一些小经验可以分享：笔者最开始写东西，总是能运行成功就完事儿，但这种方式是无法获得一些本质的改变和提高。后面意识到我们需要回顾以前写过的代码，分析可以改进的地方，不断地优化自己的项目，尽力让自己的代码可读，优雅，高效。每过一个月，看看自己以前的代码，就会发现一个月前的自己是多么糟糕。

##### 最后的最后，如果该实战项目确实对你有一定帮助，也请不要吝啬[你的star](https://github.com/PengLL/BookRecord)
