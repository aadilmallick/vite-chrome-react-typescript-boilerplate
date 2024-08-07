export default class Runtime {
  static onInstall = chrome.runtime.onInstalled.addListener;
}
