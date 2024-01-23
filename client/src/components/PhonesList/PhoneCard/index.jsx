import React from 'react';

function PhoneCard ({ phone }) {
  const { brand, model, screenDiagonal } = phone;

  return (
    <article>
      <div>{`${brand} ${model}`}</div>
      <p>{screenDiagonal}</p>
    </article>
  );
}

export default PhoneCard;
