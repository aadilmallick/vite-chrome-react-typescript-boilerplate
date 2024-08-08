// requires tab permission

export default class Tabs {
  /**
   * when url of the current tab is updated
   */
  static onTabUpdated = chrome.tabs.onUpdated.addListener.bind(
    chrome.tabs.onUpdated
  );

  /**
   * when a tab is created
   */
  static onTabCreated = chrome.tabs.onCreated.addListener.bind(
    chrome.tabs.onCreated
  );

  /**
   * when a user navigates to a new tab
   */
  static onTabActivated = chrome.tabs.onActivated.addListener.bind(
    chrome.tabs.onActivated
  );

  static async getCurrentTab() {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });
    return tab;
  }
}
