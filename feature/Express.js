/**
 * 中文
 * 测试Node i18n 国际化 ESModule
 * 
 * import express
 *
 */
import {
    $java
} from '@vector-api';
import express from 'express';
import {
    readFile
} from 'fs/promises';

/**
 *@class Application
 * 
 */
class Application {

    /**
     * @constructor Constructor<?>
     * @args {ip, port}
     * 
     * 中文
     * 初始化Express
     * 
     */
    constructor(ip, port) {
        this.ip = ip;
        this.port = port;

        this.Express = express();
    }

    /**
     * @method exists
     * @args {url}
     * 
     * 中文
     * 检测文件路径是否存在
     * 
     */
    exists(url) {
        return new java.io.File(url).exists();
    }

    /**
     * @method isDirectory
     * @args {url}
     * 
     * 中文
     * 检测路径是否为文件夹
     * 
     */
    isDirectory(url) {
        return new java.io.File(url).isDirectory();
    }

    /**
     * @method get
     * 
     * 中文
     * 获取客户端请求路由
     * 
     */
    get(path, client) {
        this.Express.get(path, (req, res, next) => client(req, res, next));
    }

    /**
     * @method use
     * 
     * 中文
     * 代理全局路由
     */
    use(client) {
        this.Express.use((req, res, next) => client(req, res, next));
    }

    /**
     * @method intentClient
     * 
     * 中文
     * 使用android类Intent打开地址模拟请求
     * 
     */
    intentClient() {
        const Intent = android.content.Intent;

        let intent = new Intent(Intent.ACTION_VIEW, android.net.Uri.parse(`http://${this.ip}:${this.port}`));
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);

        if (intent.resolveActivity($java.androidContext.getPackageManager()) !== null) {
            $java.androidContext.startActivity(intent);
        }
    }

    /**
     * @method start
     * 
     * 中文
     * 启动监听服务器
     * 
     */
    service() {
        this.Express.listen(this.port, this.ip, () => {
            this.intentClient();
        });
    }
}

const App = new Application('127.0.0.1', 19132);

App.use(async (req, res, next) => {
    const uri = `./${req.url}`;
    res.type('text');

    if (req.url === '/') {
        res.send('[class Application]')
        return;
    }

    if (App.exists(uri)) {
        if (!App.isDirectory(uri)) {
            res.send(await readFile(uri, {}));
            return;
        }

        res.send(JSON.stringify(new java.io.File(uri).list(), null, 2));
        return;
    }

    res.send('Error: Not Found!');
});

App.service();