// requires the contextMenus API permission

export default class ContextMenu {
  static LIMIT = chrome.contextMenus.ACTION_MENU_TOP_LEVEL_LIMIT;
  static menuCount = 0;
  constructor(public menuId: string) {}

  create(args: chrome.contextMenus.CreateProperties) {
    if (ContextMenu.menuCount >= ContextMenu.LIMIT) {
      throw new Error(
        `Exceeds the maximum number of top level menu items, which is ${ContextMenu.LIMIT}`
      );
    }
    chrome.contextMenus.create({
      ...args,
      id: this.menuId,
    });
    ContextMenu.menuCount++;
  }

  update(args: chrome.contextMenus.UpdateProperties) {
    chrome.contextMenus.update(this.menuId, args);
  }

  remove() {
    chrome.contextMenus.remove(this.menuId);
    ContextMenu.menuCount--;
  }

  removeAll() {
    chrome.contextMenus.removeAll();
    ContextMenu.menuCount = 0;
  }
}
