<br />

<p align="center">
    <img src="vector.png" alt="Logo" width="80" height="80">
  </a>

  <br/>
    <a href="https://github.com/Vectorted/Vector.js/tree/master/feature/"><strong>Click me to open the document example »</strong></a>
  <br/>
  <br/>
    <a href="https://github.com/Vectorted/Vector.js/tree/master/api.md"><strong>API »</strong></a>
  <br/>
</p>

# Vector.js

Android Node.js Compiler

### 作者

@Vectorted

&ensp; Email:3537099724@qq.com

### 规范开发目录说明
Vector.js环境支持直接运行JavaScript/TypeScript | HTML, 并支持访问Jvm
```
NodeModule
```

```
Tree 
├── PROJECT.md
├── LICENSE.txt
├── /node_modules/
├── File.js
├── Class.ts
├── Message.ts
└── #

```

### 上手!编写代码
JavaScript
```js
/**
 * 中文
 * 测试Node FS模块
 *
 * @Author Vectorted
 */
import fs from 'fs';

console.log("Data: ", fs.readFileSync('./File.js'));
```
TypeScript
```ts
/**
 * 中文
 * 测试Android android.widget.Toast
 *
 * @Author Vectorted
 */
const message: string = "Hello Vector.js!";

toast(message)//Global<Function> class android.widget.Toast | Android bubble pop-up message.
```
### 访问Java API
1. 直接访问JavaClass | 直接使用的包[java.* | android.* | androidx.* | com.* | org.* | net.*]
```js
/**
 * 中文
 * 访问Java API
 *
 * @Author Vectorted
 * @class java.io.File
 */
const File = java.io.File;// (class java.io.File)

let fs = new File('./File.js');
console.log('exists: ', fs.exists());//true
```
2. 使用findClass | findClassOrNull
```js
/**
 * 中文
 * 访问Java API
 *
 * @Author Vectorted
 * @class android.widget.Toast
 * @import @vector-api
 */

import { $java } from '@vector-api';
console.log($java.findClass('android.widget.Toast'));// (class android.widget.Toast)
```

### 继承Java类
使用JavaAdapter,实现Java层extends,该方法使用动态生成Dex加载实现,为异步方法

```js
/**
 * 中文
 * 测试继承Java类,JavaAdapter等同Java extends
 *
 * @Author Vectorted
 * @class ExtendFile
 * @function JavaAdapter
 *
 */
import { $java } from '@vector-api';

const ExtendFile: Function = await $java.JavaAdapter(java.io.File, {

    /**
     * 中文
     * 继承接口类实现接口方法
     * 
     * @implements string[]
     */
    implements: [],

    /**
     * 中文
     * 定义类包名,取最后字段为类名(否则生成失败)
     * 
     * @package Must have
     */
    package: 'com.proxy.File',

    /**
     * 中文
     * 是否生成Dex文件(当前目录,耗时)
     * 
     * @MultiDex boolean
     */
    dexFile: true,

    /**
     * 中文
     * 拦截类构造器方法
     * 
     * @method Constructor<?>
     */
    public constructor(file: string) {
        toast(this.super)
    },

    /**
     * 中文
     * 重写File子方法(exists)
     * 
     * @return boolean
     * 
     */
    public exists(): boolean {
        //这里通过拿到父类对象直接调用父类方法
        return this.super.exists.call();
    },

    /**
     * 中文
     * 定义新方法invoke
     * 
     * @return boolean
     * 
     */
    public invoke(): boolean {
        //调用子类重写的方法
        //如果方法没有被重写,则直接调用父类方法
        return this.Adapter.exists();
    },
});
const file: Function = new ExtendFile('./Class.ts');

void file.invoke()
```
