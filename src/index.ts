import { registerPlugin } from '@capacitor/core';

import type { GetSafeAreaPlugin } from './definitions';

const GetSafeArea = registerPlugin<GetSafeAreaPlugin>('GetSafeArea', {
  web: () => import('./web').then(m => new m.GetSafeAreaWeb()),
});

export * from './definitions';
export { GetSafeArea };
