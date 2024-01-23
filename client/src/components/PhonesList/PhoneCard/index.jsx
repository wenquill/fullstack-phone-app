import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function PhoneCard ({ phone }) {
  const { brand, model, screenDiagonal, Processor, processorId } = phone;

  return (
    <article>
      <div>{`${brand} ${model}`}</div>
      <p>{screenDiagonal}</p>
      <Link to={`/processors/${processorId}`}>{Processor.name}</Link>
    </article>
  );
}

export default PhoneCard;
