import { WindowRunBot } from "./WindowRunBot";

const WindowRunBotInstance = WindowRunBot.getInstance();

export const startGNI = async () => {
  await login("gabrielachiodi666@gmail.com", "Biladi123@");
};

const login = async (email, password) => {
  const script = `
    const logoHomepage = document.querySelector("img[alt='homepage']");

    if (!logoHomepage) {
      const emailElement = document.querySelector("input[type='email']");
      const passwordElement = document.querySelector("input[type='password']");
      const loginButton = document.querySelector("button[type='submit']");
  
      setTimeout(() => {  
        emailElement.value = "${email}" ;
      }, 1000);
  
      
      setTimeout(() => {
        passwordElement.value = "${password}" ;
      }, 2000)
  
      setTimeout(() => {
        loginButton.click();
      }, 3000)
    } 
  `;

  await WindowRunBotInstance.executeScript(script);
};
