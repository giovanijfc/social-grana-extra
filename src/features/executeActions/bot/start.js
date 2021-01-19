import { createBrowserWindow } from "../../../utils/electronUtils";
import { startGNI } from "./gni";
import { WindowRunBot } from "./WindowRunBot";

const WindowRunBotInstance = WindowRunBot.getInstance();

const createWindowRun = async (setWindowRunBot) => {
  const browserWindow = await createBrowserWindow(
    "https://www.ganharnoinsta.com/painel/"
  );

  setWindowRunBot(browserWindow);
  WindowRunBotInstance.window = browserWindow;

  startGNI();
};

export const start = async (setWindowRunBot) => {
  await createWindowRun(setWindowRunBot);
};
