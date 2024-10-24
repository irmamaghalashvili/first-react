import React from 'react';
import '../../Assets/styles/infoWrapper.css';

function InfoWrapper({ children }) {
  return (
    <div className="info-wrapper">
      {children}
    </div>
  );
}

export default InfoWrapper;
