# wisdomstore

## 简介

本仓库包含**传智商城**源码. 此商城由Next.js这个JavaScript框架实现前端, 由Python实现后端.

其中, Next.js是一个JavaScript框架, 基于React这个JS库构建. 它提供了页面路由, API访问映射, 前端页面服务器, 网页打包加速等基础机制. 
通过我个人编写的页面逻辑, 以及借助material-ui样式库, 和我个人编写的css样式, 通过与Python后端的API配合, 实现了前端功能.

而Python后端, 采用的是Fast API这个API框架. 它能够基于注解, 自动生成API文档(见下文"部署"部分), 而且通过协程, 提供可观的性能.
对于数据库交互, 采用的是SQLAlchemy这个ORM框架, 它是性能较为优秀的Python ORM框架. 我设计了API, 并编写了业务逻辑, 以及ORM交互部分代码.

本源码由:

学号: 202030443110

姓名: 肖嘉裕

编写.

## 部署地址, 测试口令与API文档

### 部署地址

https://wisdomstore-client.vercel.app/

或

http://114.132.189.242:3000/

### 测试ID与口令

管理员ID: xjy
管理员口令: 123

普通用户ID: aa
普通用户口令: bb
(如果普通用户失效, 亦可自行注册)

### API文档

可以访问后端的[SwaggerAPI](http://114.132.189.242:7000/docs)以及[Redoc](http://114.132.189.242:7000/redoc)来查看具体API.

## 源码目录结构

```
wisdomstore
├─client # 前端代码. 用Next.js这个React框架实现. 最终编译为html和js代码
│  ├─components # 所有页面小组件的定义.
│  │  └─backend # 后台操作所需要的小组件定义
│  ├─pages # 所有页面的定义. 每个文件路径, 对应浏览器地址栏的路由.
│  │  ├─backend # 后台页面.
│  │  ├─category # 分类浏览. 其中[name].js文件名, 匹配了地址栏路径中相应部分
│  │  ├─myorder # 查看个人订单. 其中[user_id].js文件名的中括号, 实现了路由解析.
│  │  ├─products # 产品浏览. [pid].js文件名中, pid代表捕获的产品id.
│  │  └─search # 产品检索. [name].js文件名中, name代表搜索字符串.
│  ├─public # 静态文件目录
│  │  └─images
│  └─styles # 自行编写的css样式表. 包括reset.css, 用来清除浏览器自带的样式.
└─service # 后端代码. 用Python编写, 负责暴露API, 实现业务逻辑, 以及操作数据库
    ├─api # 所有API的定义和实现
    ├─dto # 所有数据操作对象的定义和实现. 实现了业务逻辑, 以及操作数据库的逻辑.
    ├─model # 所有数据库对象的定义. 用SQLAlchemy这个ORM框架实现.
    └─sniplets # 编写过程中用到的代码小片段
```

## 部署流程

### 下载源码

```bash
git clone https://github.com/mstrTurtle/wisdomstore.git
```

### client

```bash
cd client
# 要求node版本>=16, npm版本>=16.9
npm install # 安装依赖
npx next build # 构建
npx next start # 运行服务器
```

### service

```bash
cd service
# 要求安装miniconda
# 创建Python虚拟环境
conda create -n uvi
conda activate uvi
conda install python=3.10
pip install -r requirements.txt # 安装依赖
python main.py # 运行服务器
```
