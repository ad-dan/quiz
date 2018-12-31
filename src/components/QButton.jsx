import React from 'react';

const QButton = ({ handleClick, txt }) => {
  return (
    <div className="btn" onClick={handleClick}>
      {txt}
    </div>
  );
};

export default QButton;
