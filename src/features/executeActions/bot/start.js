import { createBrowserWindow } from "../../../utils/electronUtils";
import { startGNI } from "./gni";
import { WindowRunBot } from "./WindowRunBot";
import { getAccounts } from "../api/executeActionsApi";

const WindowRunBotInstance = WindowRunBot.getInstance();

export const start = async (setWindowRunBot, config) => {
  const browserWindow = await createBrowserWindow(
    "https://www.ganharnoinsta.com/painel/"
  );
  const accounts = await getAccounts();

  if (!accounts) {
    const { remote } = require("electron");
    remote.dialog.showMessageBox({
      title: "Aviso!!!",
      message:
        "Você não possui nenhuma conta do instagram adicionada, tente adicionar para continuar.",
    });
    return browserWindow.close();
  }

  setWindowRunBot(browserWindow);
  WindowRunBotInstance.accounts = accounts.map((account) => ({
    ...account,
    lastDateFlowFollow: new Date(),
    isLightBlocked: false,
    isFullBlocked: false,
  }));
  WindowRunBotInstance.window = browserWindow;
  WindowRunBotInstance.config = config;

  startGNI();
};
