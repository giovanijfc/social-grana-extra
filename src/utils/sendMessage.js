/* eslint-disable no-undef */
export const sendMessage = (data, onReceiveResponse) => {
  chrome.runtime.sendMessage(data, onReceiveResponse);
};
