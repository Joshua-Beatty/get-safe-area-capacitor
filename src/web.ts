import { WebPlugin } from '@capacitor/core';
import safeAreaInsets from 'safe-area-insets';

import type { GetSafeAreaPlugin } from './definitions';

export class GetSafeAreaWeb extends WebPlugin implements GetSafeAreaPlugin {
  async getSafeArea(): Promise<{ top: number, bottom: number, left: number, right: number }> {
    const insets = { top: safeAreaInsets.top || 0, bottom: safeAreaInsets.bottom || 0, left: safeAreaInsets.left || 0, right: safeAreaInsets.right || 0 }
    return insets;
  }
}
