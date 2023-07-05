import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./options.css";

const container = document.createElement("div");
document.querySelector("#root")?.appendChild(container);
const root = createRoot(container);
root.render(<App />);
