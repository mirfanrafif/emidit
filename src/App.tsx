import { useMemo, useState } from 'react';
import './App.css';
import TextEditor from './lib/TextEditor';
import classNames from 'classnames';

function App() {
  const [value, setValue] = useState(
    `<p><img data-type="image-placeholder" src="{{vendor_logo}}" style="width: 188px; height: 82px; object-fit: cover; border-radius: 8px;"></p><p><span style="font-size: 24px">Your booking request (Booking ID: 120938293) has been sent for review</span></p><p></p><p>Dear Jane Doe,</p><p>We have received your booking request and we are currently reviewing it. Your Booking ID is 120938293.</p><p>Please note that we will provide an update regarding your booking status within the next 7 days.</p><hr><p>Guest Information</p><section class="text-highlight" data-type="custom-section">Jane Doe - jane.doe@gmail.com<br>4517 Washington Ave. Manchester, Kentucky 39495</section><p></p><p>Booking Notes</p><section class="text-highlight" data-type="custom-section">-</section><p></p><p>Booked Experiences</p><table style="minWidth: 125px"><colgroup><col><col><col><col><col></colgroup><tbody><tr><th colspan="1" rowspan="1"><p style="text-align: left"><span style="font-size: 14px">Date</span></p></th><th colspan="1" rowspan="1"><p style="text-align: left"><span style="font-size: 14px">Product</span></p></th><th colspan="1" rowspan="1"><p style="text-align: right"><span style="font-size: 14px">Price</span></p></th><th colspan="1" rowspan="1"><p style="text-align: right"><span style="font-size: 14px">Qty</span></p></th><th colspan="1" rowspan="1"><p style="text-align: right"><span style="font-size: 14px">Total</span></p></th></tr><tr><td colspan="1" rowspan="1"><p style="text-align: left"><span style="font-size: 14px">2024/02/05</span></p></td><td colspan="1" rowspan="1"><p style="text-align: left"><span style="font-size: 14px">Ski Full Day in Goryu</span></p></td><td colspan="1" rowspan="1"><p style="text-align: right"><span style="font-size: 14px">¥ 40.000</span></p></td><td colspan="1" rowspan="1"><p style="text-align: right"><span style="font-size: 14px">1</span></p></td><td colspan="1" rowspan="1"><p style="text-align: right"><span style="font-size: 14px">¥ 40.000</span></p></td></tr><tr><td colspan="1" rowspan="1"><p style="text-align: left"><span style="font-size: 14px">2024/02/05</span></p></td><td colspan="1" rowspan="1"><p style="text-align: left"><span style="font-size: 14px">Ski Full Day in Goryu</span></p></td><td colspan="1" rowspan="1"><p style="text-align: right"><span style="font-size: 14px">¥ 40.000</span></p></td><td colspan="1" rowspan="1"><p style="text-align: right"><span style="font-size: 14px">1</span></p></td><td colspan="1" rowspan="1"><p style="text-align: right"><span style="font-size: 14px">¥ 40.000</span></p></td></tr></tbody></table><p></p><p><span style="color: #b0b0b0">Note</span></p><ul><li><p><span style="color: #b0b0b0">The invoice and payment schedule will be sent to you once the booking is confirmed.</span></p></li><li><p><span style="color: #b0b0b0">If you do not receive any confirmation within 7 days, or if you have any questions please feel free to contact us.</span></p></li></ul><p></p><p><span style="color: #b0b0b0">This is a system generated message. Do not reply.</span></p><p></p><hr><p><img data-type="image-placeholder" src="{{vendor_logo}}" style="width: 205px; height: 84px; object-fit: cover; border-radius: 8px;"></p><p><span style="color: #b0b0b0; font-size: 14px">Copyright © 2024 Delta HQ.<br>The All-in-One Platform for Smarter Property and Experience Management</span></p>`,
  );

  const preview = useMemo(() => {
    const placeholders: Record<string, string> = {
      delta_logo:
        'https://cdn.ems.beta.deltahq.com/public/images/logo/ems-logo-all-colored.svg',
      vendor_logo:
        'https://cdn.ems.beta.deltahq.com/public/images/logo/ems-logo-all-colored.svg',
      invitation_url: 'https://example.com',
      vendor_name: 'Yukisawa Ski School',
      host_name: 'Jade Hotel Group',
    };
    const result = value.replace(/{{(.*?)}}/g, (match, p1) => {
      return placeholders[p1] || match;
    });

    return result;
  }, [value]);

  const [json, setJson] = useState('');

  return (
    <div className="App">
      <div className="App__grid">
        <TextEditor
          defaultValue={value}
          onChange={(newData) => {
            setValue(newData);
          }}
          onChangeJson={(newJson) => {
            setJson(newJson);
          }}
        />

        <div>
          <div
            className={classNames('ProseMirror', 'App__preview')}
            dangerouslySetInnerHTML={{ __html: preview }}
          ></div>
        </div>

        <div>
          <pre className="App__previewJSON">{json}</pre>
        </div>

        <div>
          <pre className="App__previewJSON">{value}</pre>
        </div>
      </div>
    </div>
  );
}

export default App;
