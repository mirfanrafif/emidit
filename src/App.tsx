import { useState } from "react";
import "./App.css";
import TextEditor from "./lib/TextEditor";

function App() {
  const [value, setValue] = useState(
    ` <p>
      <img
        data-type="image-placeholder"
        src="{{delta_logo}}"
        style="
          width: 174px;
          height: 80px;
          object-fit: cover;
          border-radius: 8px;
        "
      />
    </p>
    <h1><strong>Partner with Us!</strong></h1>
    <p></p>
    <p>Dear Yukisawa Ski School,</p>
    <p>
      We are pleased to inform you that <strong>Jade Hotel Group</strong> has
      invited you to connect as a <strong>trusted partner</strong>.
    </p>
    <p>
      By accepting this invitation, you will gain the ability to offer your
      services directly through their booking system, along with setting your
      partnership policies such as commission rates and other terms.
    </p>
    <p>
      To accept this invitation and join <strong>Jade Hotel Group</strong> as a
      partner, please click the button below:
    </p>
    <p></p>
    <p>
      <a href="{{invitation_url}}" data-type="button" class="button"
        >Accept Invitation</a
      >
    </p>
    <hr />
    <p>Benefits of Partnering with <strong>Jade Hotel Group</strong>:</p>
    <ol>
      <li>
        <p>
          <strong>Increased Bookings</strong>: Reach more customers through
          their platform.
        </p>
      </li>
      <li>
        <p>
          <strong>Flexible Terms</strong>: Set your own partnership terms,
          including commissions and special rates.
        </p>
      </li>
      <li>
        <p>
          <strong>Mutual Growth</strong>: Collaborate to enhance guest
          experiences and grow your business.
        </p>
      </li>
    </ol>
    <p></p>
    <p>
      We are excited to support you in creating memorable experiences for your
      customers.
    </p>
    <p></p>
    <p>
      <img
        data-type="image-placeholder"
        src="{{delta_logo}}"
        style="
          width: 182px;
          height: 96px;
          object-fit: cover;
          border-radius: 8px;
        "
      />
    </p>
    <h5>
      <span style="color: #999999"
        >Copyright © 2024 Delta HQ.<br />The All-in-One Platform for Smarter
        Property and Experience Management</span
      >
    </h5>
`
  );

  return (
    <div className="App">
      <div className="grid">
        <TextEditor
          defaultValue={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        />
      </div>
    </div>
  );
}

export default App;
