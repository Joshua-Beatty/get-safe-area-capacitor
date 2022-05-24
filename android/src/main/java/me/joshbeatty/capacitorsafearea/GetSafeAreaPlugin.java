package me.joshbeatty.capacitorsafearea;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "GetSafeArea")
public class GetSafeAreaPlugin extends Plugin {

    private GetSafeArea implementation = new GetSafeArea();

    @PluginMethod
    public void echo(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("value", implementation.getSafeArea());
        call.resolve(ret);
    }
}
