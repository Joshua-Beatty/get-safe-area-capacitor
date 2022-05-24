export interface GetSafeAreaPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
