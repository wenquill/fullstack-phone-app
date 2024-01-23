import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import styles from './../PhonesList.module.scss';

function PhoneCard ({ phone }) {
  const { id, brand, model, screenDiagonal, Processor, processorId } = phone;

  return (
    <article>
      <Link to={`/phones/${id}`}>
        <h2>{`${brand} ${model}`}</h2>
        <p>
          <strong>Screen diagonal</strong>: {screenDiagonal}
        </p>
      </Link>
      <Link to={`/processors/${processorId}`}>
        <strong>Processor</strong>: {Processor.name}
      </Link>
    </article>
  );
}

export default PhoneCard;
