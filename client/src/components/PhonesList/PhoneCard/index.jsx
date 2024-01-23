import React from 'react';

function PhoneCard ({ phone }) {
  const { brand, model, screenDiagonal, Processor } = phone;

  return (
    <article>
      <div>{`${brand} ${model}`}</div>
      <p>{screenDiagonal}</p>
      <p>{Processor.name}</p>
    </article>
  );
}

export default PhoneCard;
