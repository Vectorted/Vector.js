package com.v8;

import com.caoccao.javet.exceptions.JavetException;
import com.caoccao.javet.interop.NodeRuntime;
import com.caoccao.javet.interop.V8Host;

import java.io.IOException;

public class V8Engine {

    public static void runNodeJS(String script) throws JavetException, IOException {
        NodeRuntime V8Node = V8Host.getNodeInstance().createV8Runtime();
        System.out.println(V8Node.getExecutor(script).execute());
    }
}