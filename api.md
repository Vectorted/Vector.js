# Vector.js API
以下接口为展示模块,真正运行模块在Java/JNI层

### Java
Module @vector-api

```js
import { $java } from '@vector-api';
```
Interface
```ts
class Java {
    /**
     * @constructor
     * Constructor to initialize the ClassLoader instance.
     *
     */
    constructor() {
        
    }

    /**
     * @javac Promise<boolean>
     *
     * Compile Java source code and return a boolean value.
     *
     */
    async javac(project, libs) {
        
    }

    /**
     * @JavaAdapter Promise<AdapterClass>
     *
     * Inherit Java classes to generate new Class classes.
     *
     */
    async JavaAdapter(javaClass, proxyClass) {
        
    }

    /**
     * @keepRunning
     *
     * To keep the event loop running, the UI thread mode needs to be set manually.
     *
     */
    keepRunning() {
        
    }

    /**
     * @stopRunning
     *
     * Stop the event loop, UI thread mode needs to be set manually.
     *
     */
    stopRunning() {
        
    }

    /**
     * Reference to the Android context for further operations.
     */
    androidContext = void 0;

    /**
     * Reference to the Android Activity context for further operations.
     */
    activityContext = void 0;

    /**
     * @getMethods
     *
     * Get all the methods of the class.
     *
     */
    getMethods(classes) {
        
    }

    /**
     * @getFields
     *
     * Get all the fields of the class.
     *
     */
    getFields(classes) {
        
    }

    /**
     * Method to find a class by its name.
     * @param {string} className - The name of the class to find.
     * @returns {Class | Null} - The class found by the class loader.
     */
    findClassOrNull(className) {
        
    }

    /**
     * Method to find a class by its name.
     * @param {string} className - The name of the class to find.
     * @returns {Class} - The class found by the class loader.
     */
    findClass(className) {
        
    }

    /**
     * Asynchronous method to load a Dex file.
     * @param {string} dex - The path to the Dex file.
     * @returns {Promise<boolean>} - A promise that resolves to true when loading is complete.
     */
    async loadDex(dex) {
        
    }

    /**
     * Asynchronous method to load a Jar file.
     * @param {string} jar - The path to the Jar file.
     * @returns {Promise<boolean>} - A promise that resolves to true when loading is complete.
     */
    async loadJar(jar) {
        
    }
}
```
