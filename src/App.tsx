import { useState } from "react";
import "./App.css";
import TextEditor from "./lib/TextEditor";

function App() {
  const [value, setValue] = useState(
    `<h1>You have received a new booking request (Booking ID: 120938293)</h1>
<p></p>
<p>Dear Yukisawa Ski School,</p>
<p>
  You have received a new booking request from Jade Hotel Group. Booking ID:
  120938293
</p>
<p></p>
<p><a href="https://google.com" data-type="button" class="button">Hello</a></p>
<p></p>
<h3>Guest Information</h3>
<section data-type="text-highlight" class="text-highlight">
  Jane Doe - jane.doe@gmail.com<br />4517 Washington Ave. Manchester, Kentucky
  39495
</section>
<p></p>
<p></p>

`
  );

  return (
    <div className="App">
      <div className="grid">
        <TextEditor value={value} />
      </div>
    </div>
  );
}

export default App;
