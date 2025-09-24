import {
    $java
} from '@vector-api';
import ClassLoader from './Class.ts';

ClassLoader('./api.jar', 'com.tools.api.test')
    .then(classes => {
        console.debug(`[${classes}]`)
    })
    
/**
 * 中文
 * 测试继承Java类,JavaAdapter等同Java extends
 *
 * @class ExtendFile
 * @function JavaAdapter
 *
 */
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
     * @public Constructor<?>
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