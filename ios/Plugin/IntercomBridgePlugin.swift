import Foundation
import Capacitor
import Intercom

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(IntercomBridgePlugin)
public class IntercomBridgePlugin: CAPPlugin {
    private let implementation = IntercomBridge()

    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.echo(value)
        ])
    }
    
    @objc func registerUserWithUserId(_ call: CAPPluginCall) {
        let userId = call.getString("userId") ?? ""
        
        Intercom.registerUser(withUserId: userId)
        
        call.resolve([
            "value": "<#success#>"
        ])
    }
    
    @objc func presentMessenger(_ call: CAPPluginCall) {
        Intercom.presentMessenger()
        
        call.resolve([
            "value": "<#success#>"
        ])
    }
}
