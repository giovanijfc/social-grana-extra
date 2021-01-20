import { WindowRunBot } from "./WindowRunBot";
import { instagram } from "./instagram";
import { createBrowserWindow } from "../../../utils/electronUtils";
import { sleep } from "../../../utils/sleep";
import { addMinutes, isBefore } from "date-fns";

const WindowRunBotInstance = WindowRunBot.getInstance();
let isRunWorks = false;

export const startGNI = async () => {
  let alreadyShowModal = false;
  let startInterval = undefined;

  WindowRunBotInstance.window.on("close", () => {
    startInterval && clearInterval(startInterval);
    startInterval = undefined;
    isRunWorks = false;
  });

  startInterval = setInterval(async () => {
    const isLoading = await WindowRunBotInstance.getIsLoading();
    const alreadyLogged = await WindowRunBotInstance.querySelector(
      "img[alt='homepage']",
      "complete",
      true
    );
    const notLogged =
      (await WindowRunBotInstance.querySelector(
        "label[for='uname']",
        "hidden",
        true
      )) === false; // hidden === false

    if (isLoading !== "complete") {
      return;
    }

    if (alreadyLogged) {
      startInterval && clearInterval(startInterval);
      startInterval = undefined;
      await goToRealizeActions();
      isRunWorks = true;
      await startWorks();
    } else if (notLogged && !alreadyShowModal) {
      const { remote } = require("electron");
      remote.dialog.showMessageBox({
        title: "Aviso!!!",
        message: "Faça login na plataforma do GanharNoInsta para continuar",
      });
      alreadyShowModal = true;
    }
  }, [1000]);
};

const goToRealizeActions = async () => {
  await WindowRunBotInstance.window.loadURL(
    "https://www.ganharnoinsta.com/painel/?pagina=sistema"
  );
};

const startWorks = async () => {
  while (isRunWorks) {
    const accountsAvailable = getAccountsAvailable();

    for (const account of accountsAvailable) {
      console.log("Indo seguir com ", account.nickname);

      await instagram.login(account);

      await WindowRunBotInstance.window.loadURL(
        "https://www.ganharnoinsta.com/painel/?pagina=sistema"
      );

      const scriptSelectAccount = `
        var selectAccounts = document.getElementById("contaig").options;
  
        for (let position = 0; position < selectAccounts.length; position++) {
          const option = selectAccounts[position];
  
          if (option.text === "${account.nickname}") {
            selectAccounts.selectedIndex = position;
            document.getElementById("playsound").checked = false;
            document.getElementById("autorefresh").checked = false;
          } 
        }
      `;

      await WindowRunBotInstance.executeScript(scriptSelectAccount);

      await sleep(1000);

      await flowFollow(account);
    }

    await sleep(5000);
  }
};

const flowFollow = async (account) => {
  const scriptStartFollow = `
    document.querySelector("button[type='submit']").click();
  `;
  await WindowRunBotInstance.executeScript(scriptStartFollow);

  for (
    let count = 1;
    count <= WindowRunBotInstance.config.numberFollowInEachAccount;

  ) {
    await new Promise((resolve) => {
      let intervalCheckHaveNewTask;

      intervalCheckHaveNewTask = setInterval(async () => {
        const haveButtonFindTask = await WindowRunBotInstance.querySelector(
          "[id='refresh']",
          "textContent"
        );

        if (haveButtonFindTask) {
          const scriptFindTask = `
              document.getElementById("refresh").click();
            `;
          await WindowRunBotInstance.executeScript(scriptFindTask);
        } else {
          clearInterval(intervalCheckHaveNewTask);
          intervalCheckHaveNewTask = undefined;
          resolve();
        }
      }, 7000);
    });

    const accountInstagramURL = await WindowRunBotInstance.getFieldById(
      "btn-acessar",
      "href"
    );

    if (!accountInstagramURL) {
      continue;
    }

    await sleep(2000);

    const winAccountInstagram = await createBrowserWindow(
      accountInstagramURL,
      800,
      800
    );

    await sleep(WindowRunBotInstance.config.timeSleepBeforeFollow * 1000);
    await instagram.follow(winAccountInstagram);
    await sleep(WindowRunBotInstance.config.timeSleepAfterFollow * 1000);

    winAccountInstagram.close();

    await sleep(3000);

    const scriptConfirmFollow = `
      document.getElementById("btn-confirmar").click();
    `;
    await WindowRunBotInstance.executeScript(scriptConfirmFollow);
    console.log("Seguiu ", count, "  ", account.nickname);
    count++;
    await sleep(3000);
  }

  account.lastDateFlowFollow = addMinutes(
    new Date(),
    WindowRunBotInstance.config.timeAwaitAfterFlowFollow
  );
};

const getAccountsAvailable = () => {
  const accountsAvailable = WindowRunBotInstance.accounts.filter((account) => {
    return isBefore(account.lastDateFlowFollow, new Date());
  });

  return accountsAvailable;
};
