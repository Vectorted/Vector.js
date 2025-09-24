package com.tools;

import java.io.File;

import java.io.FileOutputStream;
import java.io.FileInputStream;
import java.io.ObjectOutputStream;
import java.io.ObjectInputStream;

import java.io.IOException;
import java.lang.ClassNotFoundException;

public interface IoFile {

    default void writeObject(Object classes, File uri) {
        try {
            FileOutputStream fileOutPut = new FileOutputStream(uri.getPath());
            ObjectOutputStream out = new ObjectOutputStream(fileOutPut);
            out.writeObject(classes);
            out.close();
            fileOutPut.close();
        } catch (IOException e) {}
    }

    default Object readObject(File uri) {
        try {
            FileInputStream fileIn = new FileInputStream(uri.getPath());
            ObjectInputStream in = new ObjectInputStream(fileIn);
            Object classesObj = in.readObject();
            fileIn.close();
            
            return classesObj;
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        return null;
    }
}