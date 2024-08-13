import viteLogo from "/vite.svg";
import "./index.css";

function App() {
  function onClick() {}
  return (
    <>
      <div className="w-[20rem] h-[30rem] p-4">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <h1 className="text-2xl text-purple-400">Vite + React</h1>
        <button onClick={onClick}>click me</button>
      </div>
    </>
  );
}

export default App;
