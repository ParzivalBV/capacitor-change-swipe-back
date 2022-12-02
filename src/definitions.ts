export interface SwipeEditPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
