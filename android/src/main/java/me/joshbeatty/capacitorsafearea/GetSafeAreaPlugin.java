package me.joshbeatty.capacitorsafearea;

import android.util.Log;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import androidx.appcompat.app.AppCompatActivity;
@CapacitorPlugin(name = "GetSafeArea")
public class GetSafeAreaPlugin extends Plugin {
    private GetSafeArea implementation = new GetSafeArea();

    @PluginMethod
    public void getSafeArea(PluginCall call) {
        final AppCompatActivity activity = this.getActivity();
        JSObject ret = implementation.getSafeArea(activity);
        call.resolve(ret);
    }
}
