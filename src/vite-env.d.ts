/// <reference types="vite/client" />

declare module "*.svg" {
  const content: string;
  export default content;
}

interface HTMLElement {
  $(selector: string): HTMLElement | null;
  $$(selector: string): NodeListOf<HTMLElement>;
}
