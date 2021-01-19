export class WindowRunBot {
  _instance = undefined;
  window = undefined;
  accounts = undefined;
  auth = {
    email: "",
    password: "",
  };

  constructor() {
    if (!WindowRunBot._instance) {
      WindowRunBot._instance = this;
    }

    return WindowRunBot._instance;
  }

  static getInstance() {
    return new WindowRunBot();
  }

  async executeScript(script, eviteFocus) {
    !eviteFocus && this.window.focus();
    const value = await this.window.webContents.executeJavaScript(script);

    return value;
  }

  async querySelector(selector, field, eviteFocus) {
    console.log(`document.querySelector("${selector}").${field}`);
    const fieldValue = await this.executeScript(
      `document.querySelector("${selector}").${field}`,
      eviteFocus
    ).catch((error) =>
      console.log("QuerySelector->ExecuteJavascriptError ", error)
    );

    return fieldValue;
  }

  async getFieldById(id, field, eviteFocus) {
    console.log(`document.querySelector("${id}").${field}`);
    const fieldValue = await this.executeScript(
      `document.getElementById("${id}")?.${field}`,
      eviteFocus
    ).catch((error) =>
      console.log("QuerySelector->ExecuteJavascriptError ", error)
    );

    return fieldValue;
  }

  async getIsLoading() {
    const isLoading = await this.window.webContents.executeJavaScript(
      `document.readyState`
    );

    return isLoading;
  }
}
