import { createRoot } from "react-dom/client";
import React from "react";

export function injectRoot(app: React.ReactNode) {
  const root = document.createElement("div");
  root.id = "crx-root";
  document.body.append(root);

  createRoot(root).render(<React.StrictMode>{app}</React.StrictMode>);
}

export function useObjectState<T extends Record<string, any>>(
  initialState: T
): [T, (newState: Partial<T>) => void] {
  const [state, setState] = React.useState(initialState);

  const setPartialState = React.useCallback((newState: Partial<T>) => {
    setState((prevState) => ({ ...prevState, ...newState }));
  }, []);

  return [state, setPartialState];
}
