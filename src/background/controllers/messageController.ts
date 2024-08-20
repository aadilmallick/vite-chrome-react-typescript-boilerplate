import { MessagesOneWay } from "app/utils/api/messages";

export const blockChannel = new MessagesOneWay<{
  url: string;
}>("block");

export const focusModeChannel = new MessagesOneWay<{
  url: string;
}>("focus");

// define static methods here
export class MessageHandler {}
