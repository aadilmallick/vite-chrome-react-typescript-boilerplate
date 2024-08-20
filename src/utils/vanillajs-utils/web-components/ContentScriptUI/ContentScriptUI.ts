import WebComponent from "../WebComponent";
import HTMLContent from "./template.html?raw";
import CSSContent from "./template.css?raw";

const observedAttributes = [] as const;

export default class ContentScriptUI extends WebComponent<
  typeof observedAttributes
> {
  constructor() {
    super({
      HTMLContent,
      templateId: "content-script-ui",
      cssContent: CSSContent,
    });
  }

  static get observedAttributes() {
    return observedAttributes;
  }

  static registerSelf() {
    WebComponent.register("content-script-ui", ContentScriptUI);
  }
}
