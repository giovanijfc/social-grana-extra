import { createBrowserWindow } from "../../../utils/electronUtils";
import { startGNI } from "./gni";
import { WindowRunBot } from "./WindowRunBot";

const WindowRunBotInstance = WindowRunBot.getInstance();

const createWindowRun = async (setWindowRunBot) => {
  const browserWindow = createBrowserWindow(
    "https://www.ganharnoinsta.com/painel/"
  );

  setWindowRunBot(browserWindow);
  WindowRunBotInstance.window = browserWindow;

  browserWindow.webContents.once("did-finish-load", () => {
    console.log("carregou");
    startGNI();
  });
};

export const start = async (setWindowRunBot) => {
  await createWindowRun(setWindowRunBot);
};
