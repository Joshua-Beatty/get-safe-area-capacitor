import { Capacitor, registerPlugin } from '@capacitor/core';

import type { GetSafeAreaPlugin } from './definitions';

const GetSafeAreaRegisteredPlugin = registerPlugin<GetSafeAreaPlugin>('GetSafeArea', {
  web: () => import('./web').then(m => new m.GetSafeAreaWeb()),
});
const GetSafeArea = async ()=>{
  const insets = await GetSafeAreaRegisteredPlugin.getSafeArea()
  
  if(Capacitor.getPlatform() == "android"){
    insets.top = insets.top / window.devicePixelRatio
    insets.bottom = insets.bottom / window.devicePixelRatio
    insets.right = insets.right / window.devicePixelRatio
    insets.left = insets.left / window.devicePixelRatio
  }

  return insets
}
export * from './definitions';
export { GetSafeArea };
