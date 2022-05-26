import { StatusBar } from '@capacitor/status-bar';
import { GetSafeArea } from 'get-safe-area-capacitor'
import { Capacitor } from '@capacitor/core';
(async () => {
  if(Capacitor.getPlatform() == "android")
  await StatusBar.setOverlaysWebView({ overlay: true });
  GetSafeArea().then((e) => {
     console.log("insets", JSON.stringify(e)) 
     var insets = document.createElement("div");
     insets.textContent = JSON.stringify(e) + " " + window.devicePixelRatio;
     insets.style.marginTop = `${e.top}px`; 
     document.body.appendChild(insets);
    })
})();