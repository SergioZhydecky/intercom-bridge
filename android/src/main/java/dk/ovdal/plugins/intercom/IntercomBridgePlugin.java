package dk.ovdal.plugins.intercom;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import io.intercom.android.sdk.Intercom;
import io.intercom.android.sdk.identity.Registration;

@CapacitorPlugin(name = "IntercomBridge")
public class IntercomBridgePlugin extends Plugin {

    private IntercomBridge implementation = new IntercomBridge();

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", implementation.echo(value));
        call.resolve(ret);
    }

    @PluginMethod
    public void registerUserWithUserId(PluginCall call) {
        String userId = call.getString("userId");
        Registration registration = Registration.create().withUserId(userId);
        Intercom.client().registerIdentifiedUser(registration);

        JSObject ret = new JSObject();
        ret.put("value", implementation.echo("successfully registered "));
        call.resolve(ret);
    }

    @PluginMethod
    public void presentMessenger(PluginCall call) {
        Intercom.client().displayMessenger();

        JSObject ret = new JSObject();
        ret.put("value", implementation.echo("successfully presentMessenger "));
        call.resolve(ret);
    }
}
