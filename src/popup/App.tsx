import viteLogo from "/vite.svg";
import "../utils/style-utils/globals.css";
import "./index.css";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <>
      <div className="w-[20rem] h-[30rem] p-4">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <h1 className="text-2xl text-purple-400">Vite + React</h1>
        <Button>Click me</Button>
      </div>
    </>
  );
}

export default App;
