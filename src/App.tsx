import { useMemo, useState } from 'react';
import './App.css';
import TextEditor from './lib/TextEditor';
import classNames from 'classnames';

const initialValue = `<p>
  <img
    data-type="image-placeholder"
    src="{{vendor_logo}}"
    style="width: 188px; height: 82px; object-fit: cover; border-radius: 8px"
  />
</p>
<p>
  <span style="font-size: 24px"
    >Confirmation needed - Changes to Booking ID: 120938293</span
  >
</p>
<p></p>
<p>Dear Jade Hotel Group,</p>
<p>
  Changes have been proposed to the booking for Jane Doe - Booking ID: 120938293
</p>
<p>
  An email has&nbsp;also&nbsp;been sent to Jane for their&nbsp;confirmation. To
  keep the booking, we require either Jane’s or your confirmation before
  <strong>12 April 2024</strong>.
</p>
<p></p>
<p>
  <a href="{{review_changes_link}}" data-type="button" class="button"
    >Review Changes</a
  >
</p>
<hr />
<p><span style="color: rgb(153, 153, 153); font-size: 14px">Note</span></p>
<p>
  <span style="color: rgb(153, 153, 153); font-size: 14px"
    >If you have any questions, you can reach out to Yukisawa Ski School at
    yukisawa@jadehotelgroup.com</span
  >
</p>
<p></p>
<p>
  <span style="color: rgb(153, 153, 153); font-size: 14px"
    >This is a system generated message. Do not reply.</span
  >
</p>
<hr />
<p>
  <span style="color: rgb(153, 153, 153)"
    ><img
      data-type="image-placeholder"
      src="{{delta_logo}}"
      style="width: 205px; height: 84px; object-fit: cover; border-radius: 8px"
  /></span>
</p>
<p>
  <span style="color: rgb(176, 176, 176); font-size: 14px"
    >Copyright © 2024 Delta HQ.<br />The All-in-One Platform for Smarter
    Property and Experience Management</span
  >
</p>
`;

function App() {
  const [value, setValue] = useState(initialValue);

  const preview = useMemo(() => {
    const placeholders: Record<string, string> = {
      delta_logo:
        'https://cdn.ems.beta.deltahq.com/public/images/logo/ems-logo-all-colored.svg',
      vendor_logo: 'https://placehold.co/600x400?text=Vendor+Logo',
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
          <textarea value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
      </div>
    </div>
  );
}

export default App;
