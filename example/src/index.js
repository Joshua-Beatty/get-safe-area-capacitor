import { StatusBar } from '@capacitor/status-bar';
import { GetSafeArea } from 'get-safe-area-capacitor'

(async () => {
  await StatusBar.setOverlaysWebView({ overlay: true });
  GetSafeArea.getSafeArea().then((e) => {
     console.log("insets", JSON.stringify(e)) 
     var insets = document.createElement("div");
     insets.textContent = JSON.stringify(e) + " " + window.devicePixelRatio;
     insets.style.marginTop = `${e.top / window.devicePixelRatio}px`; 
     document.body.appendChild(insets);
    })
})();