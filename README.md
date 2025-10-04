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

