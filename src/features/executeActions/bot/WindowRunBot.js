export class WindowRunBot {
  _instance = undefined;
  window = undefined;

  constructor() {
    if (!WindowRunBot._instance) {
      WindowRunBot._instance = this;
    }

    return WindowRunBot._instance;
  }

  static getInstance() {
    return new WindowRunBot();
  }

  click(element) {
    this.window.focus();
  }

  async executeScript(script) {
    this.window.focus();
    await this.window.webContents.executeJavaScript(script);
  }
}
