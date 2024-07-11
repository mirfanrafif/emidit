import { useState } from "react";
import "./App.css";
import TextEditor from "./lib/TextEditor";

function App() {
  const [value, setValue] = useState("hello");

  return (
    <div className="App">
      <div className="grid">
        <TextEditor value={value} />
      </div>
    </div>
  );
}

export default App;
