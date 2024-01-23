import React from 'react';

function ProcessorCard ({ processor }) {
  const { name } = processor;

  return (
    <article>
      <div>{`Processor: ${name}`}</div>
    </article>
  );
}

export default ProcessorCard;
