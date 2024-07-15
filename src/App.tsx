import { useMemo, useState } from 'react';
import './App.css';
import TextEditor from './lib/TextEditor';
import classNames from 'classnames';

function App() {
  const [value, setValue] = useState(
    `<p><img data-type="image-placeholder" src="{{delta_logo}}" style="width: 206px; height: 83px; object-fit: cover; border-radius: 8px;"></p><h1><strong>Partner with Us!</strong></h1><p></p><p>Dear Yukisawa Ski School,</p><p>We are pleased to inform you that <strong>Jade Hotel Group</strong> has invited you to connect as a <strong>trusted partner</strong>.</p><p>By accepting this invitation, you will gain the ability to offer your services directly through their booking system, along with setting your partnership policies such as commission rates and other terms.</p><p>To accept this invitation and join <strong>Jade Hotel Group</strong> as a partner, please click the button below:</p><p></p><p><a href="{{invitation_url}}" data-type="button" class="button">Accept Invitation</a></p><hr><p>Benefits of Partnering with <strong>Jade Hotel Group</strong>:</p><ol><li><p><strong>Increased Bookings</strong>: Reach more customers through their platform.</p></li><li><p><strong>Flexible Terms</strong>: Set your own partnership terms, including commissions and special rates.</p></li><li><p><strong>Mutual Growth</strong>: Collaborate to enhance guest experiences and grow your business.</p></li></ol><p></p><p>We are excited to support you in creating memorable experiences for your customers.</p><p></p><p><img data-type="image-placeholder" src="{{delta_logo}}" style="width: 207px; height: 83px; object-fit: cover; border-radius: 8px;"></p><h5><span style="color: rgb(153, 153, 153)">Copyright © 2024 Delta HQ.<br>The All-in-One Platform for Smarter Property and Experience Management</span></h5>`,
  );

  const preview = useMemo(() => {
    const placeholders: Record<string, string> = {
      delta_logo:
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
