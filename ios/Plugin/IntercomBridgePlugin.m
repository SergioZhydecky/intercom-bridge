#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

// Define the plugin using the CAP_PLUGIN Macro, and
// each method the plugin supports using the CAP_PLUGIN_METHOD macro.
CAP_PLUGIN(IntercomBridgePlugin, "IntercomBridge",
           CAP_PLUGIN_METHOD(echo, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(registerUserWithUserId, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(registerUndefinedUser, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(logout, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(updateUser, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(presentMessenger, CAPPluginReturnPromise);
)
