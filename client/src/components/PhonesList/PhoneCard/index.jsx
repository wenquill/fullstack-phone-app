import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function PhoneCard ({ phone }) {
  const { id, brand, model, screenDiagonal, Processor, processorId } = phone;

  return (
    <article>
      <Link to={`/phones/${id}`}>
        <div>{`${brand} ${model}`}</div>
        <p>{screenDiagonal}</p>
        <Link to={`/processors/${processorId}`}>{Processor.name}</Link>
      </Link>
    </article>
  );
}

export default PhoneCard;
