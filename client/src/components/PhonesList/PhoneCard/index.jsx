import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import defaultPhoto from './default.jpg';
import styles from './../PhonesList.module.scss';

function PhoneCard ({ phone, deletePhone }) {
  const { id, brand, model, screenDiagonal, Processor, processorId, image } =
    phone;

  return (
    <article className={styles.article}>
      <Link to={`/phones/${id}`} className={styles.info}>
        <div className={styles.imageContainer}>
          <img
            src={image ? `http://localhost:5000/images/${image}` : defaultPhoto}
            alt={`${brand} ${model}`}
            className={styles.image}
          />
        </div>
        <h2>{`${brand} ${model}`}</h2>
        <p>
          <strong>Screen diagonal</strong>:{' '}
          {screenDiagonal ? screenDiagonal : 'no information'}
        </p>
      </Link>
      <Link to={`/processors/${processorId}`}>
        <strong>Processor</strong>:{' '}
        {Processor?.name ? Processor?.name : 'no information'}
      </Link>
      <button className={styles.removeButton} onClick={() => deletePhone(id)}>Remove</button>
    </article>
  );
}

export default PhoneCard;
