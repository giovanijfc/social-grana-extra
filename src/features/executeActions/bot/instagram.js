import { WindowRunBot } from "./WindowRunBot";
import { setNativeValue } from "../../../utils/electronUtils";

const WindowRunBotInstance = WindowRunBot.getInstance();

const logout = async () => {
  await WindowRunBotInstance.window.webContents.session.cookies.remove(
    "https://www.instagram.com/",
    "sessionid"
  );
};

const login = async (account) => {
  return new Promise(async (resolve) => {
    const loginScript = `
        new Promise((resolve) => {
            setTimeout(() => {
                const emailInput = document.querySelector("input[name='username'");
                ${setNativeValue("emailInput", account.email)}
            }, 1000)    
            
            setTimeout(() => {
                const passwordInput = document.querySelector("input[name='password']");
                ${setNativeValue("passwordInput", account.password)}
            }, 2000)

            setTimeout(() => {
                const loginButton = document.querySelector("button[type='submit']");
                loginButton.disabled = false;
                loginButton.click();
                resolve();
            }, 3000)
        })
  `;

    await WindowRunBotInstance.window.loadURL("https://www.instagram.com/");
    await logout();
    await WindowRunBotInstance.window.loadURL("https://www.instagram.com/");
    await WindowRunBotInstance.executeScript(loginScript);
    WindowRunBotInstance.window.webContents.once("did-finish-load", () => {
      console.log("finish loading login in instagram");
      resolve();
    });
  });
};

const follow = async (window) => {
  await window.webContents.executeJavaScript(`
      var findByTagWithTexts = (tagName, texts) => {
        const elementsToFind = document.getElementsByTagName(tagName);
      
        for (let i = 0; i < elementsToFind.length; i++) {
          const tag = elementsToFind[i];
      
          if (texts.includes(tag?.innerText || tag.value)) {
            return tag;
          }
        }
      
        return;
      };

      const buttonFollow = findByTagWithTexts("button", ["Seguir", "Follow"]);

      buttonFollow.click();
    `);
};

export const instagram = {
  login,
  follow,
};
