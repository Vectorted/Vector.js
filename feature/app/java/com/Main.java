package com;

import android.webkit.JavascriptInterface;
import android.content.Context;
import android.widget.Toast;

public class Main {
    
    private Context context;
    
    public static void main(String[] args) {
        
    }
    
    public Main() {
        
    }
    
    public Main(Context context) {
        this.context = context;
        System.out.println(this);
    }
    
    @JavascriptInterface
    public void showToast(String message) {
        Toast.makeText(context, message, Toast.LENGTH_SHORT).show();
    }
}