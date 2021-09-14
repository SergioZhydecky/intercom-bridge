package dk.ovdal.plugins.intercom;

import android.app.Application;

import io.intercom.android.sdk.Intercom;

public class IntercomBridge {

    public String echo(String value) {
        return value;
    }

    static public void initialize(Application application, String apiKey, String appId) {
        Intercom.initialize(application, apiKey, appId);
    }
}
