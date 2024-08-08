export const Runtime = {
  onInstall: chrome.runtime.onInstalled.addListener.bind(
    chrome.runtime.onInstalled
  ),
  openOptionsPage: chrome.runtime.openOptionsPage.bind(chrome.runtime),
  getUrl: chrome.runtime.getURL.bind(chrome.runtime),
};
