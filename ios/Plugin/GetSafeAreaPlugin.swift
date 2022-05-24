import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(GetSafeAreaPlugin)
public class GetSafeAreaPlugin: CAPPlugin {
    private let implementation = GetSafeArea()

    @objc func getSafeArea(_ call: CAPPluginCall) {
        call.resolve(implementation.getSafeArea())
    }
}
