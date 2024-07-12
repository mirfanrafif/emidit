import { useState } from "react";
import "./App.css";
import TextEditor from "./lib/TextEditor";

function App() {
  const [value, setValue] = useState(
    `<p style="text-align: center">
  <img
    data-type="image-placeholder"
    src="{{image}}"
    style="width: 235px; height: 106px; object-fit: cover; border-radius: 8px"
  />
</p>
<p></p>
<h1>You have received a new booking request (Booking ID: 120938293)</h1>
<p></p>
<p>Dear Yukisawa Ski School,</p>
<p>
  You have received a new booking request from Jade Hotel Group. Booking ID:
  120938293
</p>
<p></p>
<p><a data-type="button" class="button" href="">Review booking request</a></p>
<p></p>
<hr />
<h3>Guest Information</h3>
<section data-type="text-highlight" class="text-highlight">
  Jane Doe - jane.doe@gmail.com<br />4517 Washington Ave. Manchester, Kentucky
  39495
</section>
<p></p>
<h3>Notes</h3>
<section data-type="text-highlight" class="text-highlight">-</section>
<p></p>
<h3>Booked Experiences</h3>
<table style="width: 632px">
  <colgroup>
    <col style="width: 58px" />
    <col style="width: 281px" />
    <col style="width: 109px" />
    <col style="width: 81px" />
    <col style="width: 103px" />
  </colgroup>
  <tbody>
    <tr>
      <th colspan="1" rowspan="1" colwidth="58">
        <p style="text-align: left">Date</p>
      </th>
      <th colspan="1" rowspan="1" colwidth="281">
        <p style="text-align: left">Product Name</p>
      </th>
      <th colspan="1" rowspan="1" colwidth="109">
        <p style="text-align: right">Rate</p>
      </th>
      <th colspan="1" rowspan="1" colwidth="81">
        <p style="text-align: right">Qty</p>
      </th>
      <th colspan="1" rowspan="1" colwidth="103">
        <p style="text-align: right">Total</p>
      </th>
    </tr>
    <tr>
      <td colspan="1" rowspan="1" colwidth="58"><p>2024/01/01</p></td>
      <td colspan="1" rowspan="1" colwidth="281">
        <p>Ski Full Day in Goryu<br />5 People</p>
      </td>
      <td colspan="1" rowspan="1" colwidth="109">
        <p style="text-align: right">¥ 40.000</p>
      </td>
      <td colspan="1" rowspan="1" colwidth="81">
        <p style="text-align: right">01</p>
      </td>
      <td colspan="1" rowspan="1" colwidth="103">
        <p style="text-align: right">¥ 40.000</p>
      </td>
    </tr>
    <tr>
      <td colspan="1" rowspan="1" colwidth="58"><p>2024/01/02</p></td>
      <td colspan="1" rowspan="1" colwidth="281">
        <p>Ski Full Day in Goryu<br />6 People</p>
      </td>
      <td colspan="1" rowspan="1" colwidth="109">
        <p style="text-align: right">¥ 40.000</p>
      </td>
      <td colspan="1" rowspan="1" colwidth="81">
        <p style="text-align: right">02</p>
      </td>
      <td colspan="1" rowspan="1" colwidth="103">
        <p style="text-align: right">¥ 80.000</p>
      </td>
    </tr>
  </tbody>
</table>
<p></p>
<p>Note</p>
<ul>
  <li>
    <p>
      The invoice and payment schedule will be sent to your customer once the
      booking is confirmed.
    </p>
  </li>
  <li>
    <p>
      If you have any questions, you can reach out to Jade Hotel Group at
      info@jadehotelgroup.com
    </p>
  </li>
</ul>
<hr />
<p>This is a system generated message. Do not reply.</p>
<p></p>
<p>
  <img
    data-type="image-placeholder"
    src="{{delta_logo_url}}"
    style="width: 207px; height: 93px; object-fit: cover; border-radius: 8px"
  />
</p>

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
