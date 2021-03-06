import React from 'react';

const MCQOption = ({ val, handleChange, isSel }) => (
  <div className="mcq">
    <div className="check-cont">
      <div
        className={`checkmark ${isSel && 'is-sel'}`}
        onClick={handleChange}
      />
    </div>

    <div className="opt-text">{val}</div>
  </div>
);

const QAnswer = ({ answers, handleClick, sel }) => {
  console.log(answers);
  return (
    <div className="ans-cont">
      {answers.map((ans, i) => {
        return (
          <MCQOption
            val={ans}
            isSel={sel.includes(i)}
            handleChange={() => handleClick(i)}
          />
        );
      })}
    </div>
  );
};

export default QAnswer;
