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
}).then(toast)
