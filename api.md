# Vector.js API
以下接口为展示模块,真正运行模块在Java/JNI层

### Java (@vector-api)

ESModule
```js
import { $java } from '@vector-api';
```
CommonJS
```js
const $java = require('@vector-api');
```
# Classes
```js
export class AndroidClassLoader {
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
     * @promise Promise<void>
     *
     * Perceiving asynchronous operations in the Java API.
     * Before resolve/reject is executed, the Node.js event loop will continue to keep running.
     *
     */
    promise(resolve) {
        
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
    stopRunning(id) {

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
### AccessibilityService
ESModule
```js
import AccessibilityService, { GestureDescription, StrokeDescription, Point } from 'AccessibilityService';
```
CommonJS
```
const { AccessibilityService, GestureDescription, StrokeDescription, Point } = require('AccessibilityService');
```
# Clasees
```js
export default class AccessibilityService {

    /**
     * Initialize the accessibility service.
     * Sets up the accessibility server instance from the native Android environment.
     */
    constructor() {

    }
    
    /**
     * Handles accessibility events from the system.
     * @param {Object} event - The accessibility event object containing event details
     */
    onAccessibilityEvent(event) {
        
    }

    /**
     * Handles key events from the system.
     * @param {Object} keyEvent - The key event object containing key press/release data
     */
    onKeyEvent(keyEvent) {
        
    }

    /**
     * Cleans up resources when the service is destroyed.
     * Stops the V8 script engine execution.
     */
    onDestroy() {
        
    }

    /**
     * Called when the service is created with a context.
     * @param {Object} context - The Android context object for service operations
     */
    onService(context) {
        
    }

    /**
     * Initialization method called when the service is created.
     * (Currently empty - override in implementation)
     */
    onCreate() {
        
    }

    /**
     * Factory method to create and initialize the accessibility service.
     * @static
     * @param {Function} Service - The service class to instantiate
     * @returns {Promise} Resolves with the initialized service instance
     */
    static service(Service) {
        
    }
}

/**
 * Represents a single stroke (path) within an Android gesture description.
 * 
 * This class encapsulates the geometric data of a gesture path (sequence of points), 
 * the duration of the stroke animation, and the delay before the stroke starts. 
 * It is used to build stroke descriptions compatible with Android's gesture recognition system.
 * 
 * @class
 */
export class StrokeDescription {

    /**
     * Creates a StrokeDescription instance.
     * 
     * @constructor
     * @param {Array<Array<number>>} points - The sequence of coordinates defining the stroke path.  
     *                                        Format: `[[x1, y1], [x2, y2], ..., [xn, yn]]`.
     * @param {number} duration - The duration of the stroke animation (in milliseconds). Must be > 0.
     * @param {number} [delay=0] - The delay before the stroke starts (in milliseconds). Defaults to 0.
     * @throws {Error} Throws if:
     *                - `points` has fewer than 2 points (invalid stroke).
     *                - `duration` is not a positive number.
     */
    constructor(points, duration, delay = 0) {
        
    }
        
    /**
     * Converts the stroke description to a format compatible with Android's 
     * {@link https://developer.android.com/reference/android/view/gesture/GestureDescription.StrokeDescription|GestureDescription.StrokeDescription}.
     * 
     * The output includes absolute start time (based on delay) and normalized path data, 
     * ready to be used with Android's gesture APIs (e.g., `GestureDescription.Builder.addStroke()`).
     * 
     * @returns {Object} An object matching Android's StrokeDescription requirements:
     *   @property {number} startTime - Absolute start timestamp (in milliseconds, calculated as `Date.now() + delay`).  
     *                                  Use this to sequence strokes in a gesture.
     *   @property {Array<Array<number>>} points - Normalized path points (same format as input).
     *   @property {number} duration - The stroke duration (in milliseconds).
     */
    toAndroidStrokeDescription() {
        
    }
}

/**
 * Represents an Android {@link android.accessibilityservice.GestureDescription} object,  
 * which encapsulates a collection of strokes ({@link StrokeDescription}) to form a complete gesture.  
 * This class is used to build a structured, executable gesture that can be dispatched via  
 * an accessibility service’s {@link dispatchGesture()} method.  
 * 
 * Gestures consist of one or more sequential/overlapping strokes, each with independent timing  
 * (delay/duration) relative to the gesture’s overall start time.  
 * 
 * @class
 */
export class GestureDescription {

    /**
     * Constructs a new GestureDescription instance.  
     * Initializes an empty list to store {@link StrokeDescription} objects.  
     * 
     * @constructor
     */
    constructor() {
        
    }

    /**
     * Adds a stroke to the gesture description.  
     * 
     * Strokes are automatically ordered by their **start time** (calculated as the stroke's `delay`  
     * relative to the gesture’s base start time). Overlapping strokes (e.g., drawing a "V" or "X")  
     * are fully supported, as Android’s gesture system handles concurrent paths.  
     * 
     * @param {StrokeDescription} stroke - The stroke to add. Must be a non-null, valid  
     *                                     {@link StrokeDescription} instance (created via `new StrokeDescription(...)`).  
     * @throws {Error} If `stroke` is `null`, `undefined`, or not an instance of {@link StrokeDescription}.  
     * @note The stroke’s `delay` is **relative to the gesture’s start time** (not the end of previous strokes).  
     *       This allows precise control over inter-stroke timing (e.g., a 100ms gap between two line strokes).  
     */
    addStroke(stroke) {
        
    }

    /**
     * Builds and returns the native Android {@link android.accessibilityservice.GestureDescription} object  
     * for this gesture. This object can be passed to an accessibility service’s {@link dispatchGesture()}  
     * method to execute the gesture on the device.  
     * 
     * The returned object contains all added strokes, with timing and path data optimized for Android’s  
     * gesture recognition engine.  
     * 
     * @returns {android.accessibilityservice.GestureDescription} The native Android gesture description.  
     */
    toAndroidGestureDescription() {
        
    }
}

/**
 * Represents a screen coordinate point with **encapsulated internal state** and **controlled access**.
 * Uses a closure to hide private coordinates and a Proxy to intercept external interactions,
 * ensuring immutability and custom string representation for debugging.
 */
export class Point {

    /**
     * Factory method to create a new Point instance.
     * @param {number} x - The x-coordinate of the point.
     * @param {number} y - The y-coordinate of the point.
     * @returns {Point} A new Point instance with the specified coordinates.
     */
    static moveTo(x, y) { return new Point(x, y); }

    /**
     * Constructs a Point instance with protected coordinates.
     * - Uses a closure to store `_x`/`_y` as private variables (inaccessible directly).
     * - Returns a Proxy to intercept property access/modification.
     * @param {number} x - The x-coordinate of the point.
     * @param {number} y - The y-coordinate of the point.
     */
    constructor(x, y) {
        
    }
}
```
