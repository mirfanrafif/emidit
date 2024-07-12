import { useState } from "react";
import "./App.css";
import TextEditor from "./lib/TextEditor";

function App() {
  const [value, setValue] = useState(
    ` <p style="text-align: center">
      <img
        data-type="image-placeholder"
        src="{{image}}"
        style="
          width: 235px;
          height: 106px;
          object-fit: cover;
          border-radius: 8px;
        "
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
    <p>
      <a data-type="button" class="button" href="">Review booking request</a>
    </p>
    <p></p>
    <hr />
    <h3>Guest Information</h3>
    <section data-type="text-highlight" class="text-highlight">
      Jane Doe - jane.doe@gmail.com<br />4517 Washington Ave. Manchester,
      Kentucky 39495
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
            <h5 style="text-align: left"><strong>Date</strong></h5>
          </th>
          <th colspan="1" rowspan="1" colwidth="281">
            <h5 style="text-align: left"><strong>Product Name</strong></h5>
          </th>
          <th colspan="1" rowspan="1" colwidth="109">
            <h5 style="text-align: right"><strong>Rate</strong></h5>
          </th>
          <th colspan="1" rowspan="1" colwidth="81">
            <h5 style="text-align: right"><strong>Qty</strong></h5>
          </th>
          <th colspan="1" rowspan="1" colwidth="103">
            <h5 style="text-align: right"><strong>Total</strong></h5>
          </th>
        </tr>
        <tr>
          <td colspan="1" rowspan="1" colwidth="58"><h5>2024/01/01</h5></td>
          <td colspan="1" rowspan="1" colwidth="281">
            <h5>Ski Full Day in Goryu<br />5 People</h5>
          </td>
          <td colspan="1" rowspan="1" colwidth="109">
            <h5 style="text-align: right">¥ 40.000</h5>
          </td>
          <td colspan="1" rowspan="1" colwidth="81">
            <h5 style="text-align: right">01</h5>
          </td>
          <td colspan="1" rowspan="1" colwidth="103">
            <h5 style="text-align: right">¥ 40.000</h5>
          </td>
        </tr>
        <tr>
          <td colspan="1" rowspan="1" colwidth="58"><h5>2024/01/02</h5></td>
          <td colspan="1" rowspan="1" colwidth="281">
            <h5>Ski Full Day in Goryu<br />6 People</h5>
          </td>
          <td colspan="1" rowspan="1" colwidth="109">
            <h5 style="text-align: right">¥ 40.000</h5>
          </td>
          <td colspan="1" rowspan="1" colwidth="81">
            <h5 style="text-align: right">02</h5>
          </td>
          <td colspan="1" rowspan="1" colwidth="103">
            <h5 style="text-align: right">¥ 80.000</h5>
          </td>
        </tr>
      </tbody>
    </table>
    <p></p>
    <p><span style="color: rgb(153, 153, 153)">Note</span></p>
    <ul>
      <li>
        <p>
          <span style="color: rgb(153, 153, 153)"
            >The invoice and payment schedule will be sent to your customer once
            the booking is confirmed.</span
          >
        </p>
      </li>
      <li>
        <p>
          <span style="color: rgb(153, 153, 153)"
            >If you have any questions, you can reach out to Jade Hotel Group at
            info@jadehotelgroup.com</span
          >
        </p>
      </li>
    </ul>
    <hr />
    <p>
      <span style="color: rgb(153, 153, 153)"
        >This is a system generated message. Do not reply.</span
      >
    </p>
    <p></p>
    <p>
      <img
        data-type="image-placeholder"
        src="{{delta_logo_url}}"
        style="
          width: 207px;
          height: 93px;
          object-fit: cover;
          border-radius: 8px;
        "
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
