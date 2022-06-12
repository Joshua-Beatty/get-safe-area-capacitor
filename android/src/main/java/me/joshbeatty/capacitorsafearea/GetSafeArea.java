package me.joshbeatty.capacitorsafearea;

import android.util.Log;
import android.view.DisplayCutout;
import android.view.WindowInsets;
import android.view.WindowManager;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.view.DisplayCutoutCompat;
import androidx.core.view.WindowInsetsCompat;

import com.getcapacitor.JSObject;

public class GetSafeArea {

    public JSObject getSafeArea(AppCompatActivity activity) {
        JSObject ret = new JSObject();


        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.P) {
            DisplayCutout displayCutout = activity.getWindow().getDecorView().getRootView().getRootWindowInsets().getDisplayCutout();
            if(displayCutout == null){
                ret.put("top", 0);
                ret.put("bottom", 0);
                ret.put("left", 0);
                ret.put("right", 0);
                return ret;
            }
            ret.put("top", displayCutout.getSafeInsetTop());
            ret.put("bottom", displayCutout.getSafeInsetBottom());
            ret.put("left", displayCutout.getSafeInsetLeft());
            ret.put("right", displayCutout.getSafeInsetRight());
        } else {
            ret.put("top", 0);
            ret.put("bottom", 0);
            ret.put("left", 0);
            ret.put("right", 0);
        }

        return ret;
    }
}
