import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function ProcessorCard ({ processor }) {
  const { name, id } = processor;

  return (
    <article>
      <Link to={`/processors/${id}`}>
        <div>{`${name}`}</div>
      </Link>
    </article>
  );
}

export default ProcessorCard;
