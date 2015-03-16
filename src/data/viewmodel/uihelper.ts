// uihelper.ts
declare var window;
class UIHelper {
  constructor() { }
  public confirm(message: string): boolean {
    return window.confirm(message);
  }
  public alert(message: string): void {
    window.alert(message);
  }
  public prompt(message: string, response?: string): string {
    return window.prompt(message, response);
  }
} // class UIHelper
export = UIHelper;
