import React from 'react';

const Telbox = () => {
  return (
    <div className="tel_box">
      <div className="tel_i">
        <img src={require('../containers/img/tel_i.png')} alt="전화아이콘" />
      </div>
      <div className="tel_text">
        <span>가맹상담전화/온라인상담</span>
        <strong>1111-1234</strong>
      </div>
    </div>
  );
};

export default Telbox;
