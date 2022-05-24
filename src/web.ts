import { WebPlugin } from '@capacitor/core';

import type { GetSafeAreaPlugin } from './definitions';

export class GetSafeAreaWeb extends WebPlugin implements GetSafeAreaPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
