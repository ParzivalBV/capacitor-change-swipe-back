import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(SwipeEditPlugin)
public class SwipeEditPlugin: CAPPlugin {
    private let implementation = SwipeEdit()

    @objc func enable(_ call: CAPPluginCall) {
        self.bridge?.webView?.allowsBackForwardNavigationGestures = true;
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.enable(value)
        ])
    }
    @objc func disable(_ call: CAPPluginCall) {
        self.bridge?.webView?.allowsBackForwardNavigationGestures = false;
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.disable(value)
        ])
    }
}
