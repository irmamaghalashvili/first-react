import React from 'react';
import '../../Assets/styles/button.css';

function Button({ onClick, text, icon }) {
  return (
    <button onClick={onClick} className="button">
      {icon}
      {text}
    </button>
  );
}

export default Button;
