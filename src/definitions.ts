export interface GetSafeAreaPlugin {
  getSafeArea(): Promise<{ top: number, bottom: number, left: number, right: number }>;
}
