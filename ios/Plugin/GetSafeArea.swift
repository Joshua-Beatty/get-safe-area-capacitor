import Foundation

@objc public class GetSafeArea: NSObject {
    @objc public func getSafeArea() -> [String:Float] {
        var insets = ["top": Float(0),
                      "bottom": Float(0),
                      "left": Float(0),
                      "right": Float(0)]
        if #available(iOS 13.0, *) {
            DispatchQueue.main.sync {
                let window = UIApplication.shared.windows.first
                insets["top"] = Float(window!.safeAreaInsets.top)
                insets["bottom"] = Float(window!.safeAreaInsets.bottom)
                insets["left"] = Float(window!.safeAreaInsets.left)
                insets["right"] = Float(window!.safeAreaInsets.right)
            }
        }
            return insets
        
    }
}
