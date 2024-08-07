export default class Scripting {
  private static getArray(scripts: string | string[]): string[] {
    let scriptsArray: string[] = [];
    if (typeof scripts === "string") {
      scriptsArray = [scripts];
    } else {
      scriptsArray = scripts;
    }
    return scriptsArray;
  }
  async executeScripts(tabId: number, scripts: string | string[]) {
    await chrome.scripting.executeScript({
      files: Scripting.getArray(scripts),
      target: { tabId },
    });
  }

  async insertCss(tabId: number, cssFiles: string | string[]) {
    await chrome.scripting.insertCSS({
      files: Scripting.getArray(cssFiles),
      target: { tabId },
    });
  }

  async removeCss(tabId: number, cssFiles: string | string[]) {
    await chrome.scripting.removeCSS({
      files: Scripting.getArray(cssFiles),
      target: { tabId },
    });
  }
}
