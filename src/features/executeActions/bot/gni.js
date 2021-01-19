import { WindowRunBot } from "./WindowRunBot";
import { instagram } from "./instagram";
import { createBrowserWindow } from "../../../utils/electronUtils";
import { sleep } from "../../../utils/sleep";

const WindowRunBotInstance = WindowRunBot.getInstance();

export const startGNI = async () => {
  let alreadyShowModal = false;
  let startInterval = undefined;

  WindowRunBotInstance.window.on("close", () => {
    startInterval && clearInterval(startInterval);
    startInterval = undefined;
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
  console.log("Indo para Realizar ações");
  await WindowRunBotInstance.window.loadURL(
    "https://www.ganharnoinsta.com/painel/?pagina=sistema"
  );
};

const startWorks = async () => {
  console.log("Começando a ganhar");
  for (const account of WindowRunBotInstance.accounts) {
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

    await flowFollow();
  }
};

const flowFollow = async () => {
  const scriptStartFollow = `
    document.querySelector("button[type='submit']").click();
  `;
  await WindowRunBotInstance.executeScript(scriptStartFollow);

  // Quantidade de vezes que é pra seguir com a mesma conta
  for (let count = 0; count < 3; count++) {
    await sleep(2000);

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
      }, 4000);
    });

    const accountInstagramURL = await WindowRunBotInstance.getFieldById(
      "btn-acessar",
      "href"
    );

    await sleep(2000);

    const winAccountInstagram = await createBrowserWindow(
      accountInstagramURL,
      800,
      800
    );

    // TODO: TEMPO DE ESPERA ANTES DE SEGUIR
    await sleep(5000);
    await instagram.follow(winAccountInstagram);
    // TODO: TEMPO DE ESPERA DEPOIS DE SEGUIR
    await sleep(5000);

    winAccountInstagram.close();

    await sleep(3000);

    const scriptConfirmFollow = `
     document.getElementById("btn-confirmar").click();
  `;
    await WindowRunBotInstance.executeScript(scriptConfirmFollow);

    await sleep(3000);
  }
};
