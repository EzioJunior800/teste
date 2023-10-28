export class ButtonConfig<T> {
  command?: (event?: any) => void;
  label?: string;
  escape?:boolean;
  styleClass: string;
  icon: string;
  action: string;
  groupComb: { key: string; value: string }[];

  constructor(
    options: {
      label?: string;
      escape?: boolean;
      styleClass?: string;
      icon?: string;
      action?: string;
      groupComb?: { key: string; value: string }[];
    } = {}
  ) {
    this.label = options.label !== undefined ? options.label : (null as any);
    this.escape = options.escape || true;
    this.styleClass = options.icon || "";
    this.icon = options.icon || "";
    this.action = options.action || "";
    this.groupComb = options.groupComb || [];
  }
}
