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
            "value": "<#success#> registerUserWithUserId"
        ])
    }

    @objc func registerUndefinedUser(_ call: CAPPluginCall) {

        Intercom.registerUnidentifiedUser()

        call.resolve([
            "value": "<#success#> registerUndefinedUser"
        ])
    }
    
    @objc func logout(_ call: CAPPluginCall) {

        Intercom.logout()

        call.resolve([
            "value": "<#success#> logout"
        ])
    }
    
    @objc func updateUser(_ call: CAPPluginCall) {
        let name = call.getString("name") ?? ""
        let userId = call.getString("user_id") ?? ""
        
        let userAttributes = ICMUserAttributes()
        userAttributes.name = name
        if (userId != "") {
            userAttributes.userId = userId
        }
        
        Intercom.updateUser(userAttributes)

        call.resolve([
            "value": "<#success#> updateUser"
        ])
    }
    
    @objc func presentMessenger(_ call: CAPPluginCall) {
        Intercom.presentMessenger()
        
        call.resolve([
            "value": "<#success#> presentMessenger"
        ])
    }
}
