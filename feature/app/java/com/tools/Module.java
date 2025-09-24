package com.tools;

import com.tools.IoFile;
import java.io.Serializable;

import java.io.File;
import java.io.*;

public class Module implements IoFile, Serializable {

    public final static String id = "./Module";

    public Module() {
        
    }

    public Module getModule() {
        return (Module) readObject(new File(id));
    }

    public void serializable() {
        writeObject(this, new File(id));
    }
}