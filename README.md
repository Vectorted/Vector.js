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

&ensp; Email-QQ: 3537099724@qq.com
&ensp; Microsoft: xtyygdd123@outlook.com

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
├── AccessibilityService.js
├── File.js
├── Class.ts
├── Message.ts
└── #

```

### 上手!编写Node.js
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
console.log($java.findClass('android.widget.Toast'));// (class android.widget.Toast) or throws ClassNotFoundError
console.log($java.findClassOrNull('android.widget.Toast'));// (class android.widget.Toast) or null
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
    }
});
const file: Function = new ExtendFile('./Class.ts');

void file.invoke()
```

### 使用Android AccessibilityService(无障碍服务编写自动化脚本)
继承AccessibilityService服务类, 重写原生方法
```js
import AccessibilityService, {
    GestureDescription,
    StrokeDescription,
    Point
} from 'AccessibilityService';
import {
    $java
} from '@vector-api'

/**
 * ClientService class extends AccessibilityService to handle accessibility events.
 * This service monitors and responds to system accessibility events and key presses.
 */
class ClientService extends AccessibilityService {

    /**
     * Constructor for ClientService.
     * Calls the parent class constructor to initialize the accessibility service.
     */
    constructor() {
        super();
    }

    /** 
     * Get AccessibilityService {Context}
     * @returns {boolean} Whether the service is enabled and initialized.
     */
    get serviceContext() {
        return this.context;
    }

    /**
     * Overrides the parent `onService` method to handle the service context during initialization. 
     * This method is called by the system when the accessibility service is created or bound to the app. 
     * @param {Object} context - The Android `Context` object provided by the system (used to access app resources, services, etc.). 
     * Saves the context to the instance for later use in event handling or other operations.
     */
    onService(context) {
        this.context = context;
        console.log(context)
    }

    /**
     * Called when the accessibility service is first created.
     * Initializes the service and performs setup operations.
     */
    onCreate() {
        super.onCreate();
    }

    /**
     * Handles incoming accessibility events.
     * @param {Object} event - The accessibility event object containing event details.
     * Logs event information for debugging and monitoring purposes.
     */
    onAccessibilityEvent(event) {
        super.onAccessibilityEvent(event);
        //console.log(event);
    }

    /**
     * Handles key press events from the device.
     * @param {Object} keyEvent - The key event object containing key press details.
     * Allows interception or processing of physical key events.
     */
    onKeyEvent(keyEvent) {
        super.onKeyEvent(keyEvent);

        if (keyEvent.keyCode === android.view.KeyEvent.KEYCODE_VOLUME_DOWN) {
            super.onDestroy();

            toast('音量下键触发,关闭无障碍监听.');
        }
    }

    /**
     * Called when the accessibility service is being destroyed.
     * Performs cleanup operations and notifies the user.
     */
    onDestroy() {
        super.onDestroy();
        console.log('Close.');
    }
}

const client = await AccessibilityService.service(ClientService);

const Gesture = new GestureDescription();
Gesture.addStroke(new StrokeDescription([Point.moveTo(500, 500), Point.moveTo(1000, 1000)], 2000, 0))

/**
 * 中文
 * 异步感知API,返回一个Promise,不同于普通Promise
 * 没执行resolve之前, Vector.js不会退出事件循环
 *
 */
$java.promise(async (resolve) => {
    const Callback = await $java.JavaAdapter(android.accessibilityservice.AccessibilityService$GestureResultCallback, {

        /**
         * 中文
         * 多态继承接口类实现接口方法
         * 
         */
        implements: [],

        /**
         * 中文
         * 定义类包名,取最后字段为类名(否则生成失败)
         * 
         * @package Must have
         */
        package: 'io.Callback',

        /**
         * 中文
         * 是否生成Dex文件(当前目录,耗时)
         * 
         * @MultiDex boolean
         */
        dexFile: false,

        /**
         * 中文
         * 拦截类构造器方法
         * 
         * @public
         * @constructor Constructor<?>
         */
        public constructor() {

        },
        
        /**
         * 中文
         * 手势执行成功执行此方法
         *
         * @method onCompleted
         *
         */
        onCompleted(gesture) {
            resolve(gesture)
        },
        
        /**
         * 中文
         * 手势被打断执行此方法
         *
         * @method onCancelled
         *
         */
        onCancelled(gesture) {
            resolve(gesture)
        }
    });
    client.serviceContext.dispatchGesture(Gesture.toAndroidGestureDescription(), new Callback(), null);
}).then(toast);
```

### 使用到的Tool-Sdk

- [android](https://github.com/Vectorted/Vector.js/tree/master/sdk-tools)
- [rt-jdk8](https://github.com/Vectorted/Vector.js/tree/master/sdk-tools)
- [ApkSigner](https://github.com/Vectorted/Vector.js/tree/master/sdk-tools)
- [sdklib](https://github.com/Vectorted/Vector.js/tree/master/sdk-tools)
- [d8](https://github.com/Vectorted/Vector.js/tree/master/sdk-tools)
- [ECJ](https://mvnrepository.com/artifact/org.eclipse.jdt/ecj/3.26.0)
