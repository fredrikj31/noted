import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import { Button } from "./shadcn-ui/components/ui/button";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <main>
      <h1>Welcome to Tauri + React</h1>
      <p>Click on the Tauri, Vite, and React logos to learn more.</p>

      <form
        className="flex flex-col w-52"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        <input
          className="border border-black/50"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <Button type="submit">Greet</Button>
      </form>
      <p className="text-base font-bold">{greetMsg}</p>
    </main>
  );
}

export default App;
