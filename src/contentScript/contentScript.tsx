import { injectRoot } from "app/utils/ReactUtils";
import { App } from "./App";

injectRoot(<App />, "content-script-crx-root");
