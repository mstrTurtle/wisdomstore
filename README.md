# wisdomstore

## 简介

### 项目命名与作者信息

本仓库包含**传智商城**(注意, 和教材的传智商城毫无关系, 此项目是独立的项目)源码. 

这是"网络应用开发"课程作业, 由:

学号: 202030443110

姓名: 肖嘉裕

编写.

### 项目架构

此商城是前后端分离的项目. 用JavaScript语言编写前端, 用Python语言编写后端.

#### 前端结构

其中, 前端用到Next.js框架. 它是基于React(Facebook开源的视图库)构建. 它提供了一些与Java Web相似的机制, 如:

- 页面路由
- MVC架构

它额外提供了这些能力:

- API访问映射
- 前端页面服务器
- 网页打包加速等

在此基础上, 为了实现前端的功能, 我编写了以下内容:

- 页面交互逻辑与API获取
- 借助material-ui样式库的UI设计
- 手工编写的css样式

#### 后端结构

Python后端主要采用如下现成的开源组件:

- Fast API. 它是API框架. 它能够基于注解, 自动生成API文档(见下文"部署"部分), 而且通过协程(避免线程模型, 而是采取手动调度), 提供可观的单核性能(这与廉价服务器的特征不谋而合). 
通过它, 我声明式地完成了RESTful API的设计, 就像Java Spring的注解一样方便.

- SQLAlchemy. 是Python流行的ORM框架, 它是Python ORM框架中性能较为优秀的一个. 通过它, 可以像MyBatis一样, 大一统地生成数据存储方法.

在开源组件的基础上, 我做了如下工作:

- 实现了DTO(Data Transfer Object), 在ORM框架基础上进一步做处理, 如验证与事务.

- 实现了API对应的业务逻辑(如完成订单等功能)

## 部署地址, 测试口令与API文档

### 部署地址

国内腾讯云部署(请将加速设施关闭, 获得最好的访问效果):

http://114.132.189.242:3000/

或国外Vercel部署(需要加速设施):

https://wisdomstore-client.vercel.app/

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

运行如下命令

```bash
cd service
# 要求安装miniconda
# 创建Python虚拟环境
conda create -n uvi
conda activate uvi
conda install python=3.10
pip install -r requirements.txt # 安装依赖
```

随后, 打开service/em_config.json, 配置邮箱发送账户和密码.

随后启动服务器:

```bash
python main.py # 运行服务器
```
