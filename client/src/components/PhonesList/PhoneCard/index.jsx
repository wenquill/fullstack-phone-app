import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import defaultPhoto from './default.jpg';
import styles from './../PhonesList.module.scss';

function PhoneCard ({ phone, deletePhone, updatePhone }) {
  const {
    id,
    brand,
    model,
    screenDiagonal,
    Processor,
    processorId,
    image,
    hasNfc,
  } = phone;

  const hasNFCHandler = (id, checked) => {
    updatePhone(id, {hasNfc: checked });
  };

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

      <label className={styles.label}>
        <input
          className={styles.checkbox}
          type='checkbox'
          checked={hasNfc}
          onChange={({ target: { checked } }) => hasNFCHandler(id, checked)}
        />
        <span> NFC</span>
      </label>

      <button className={styles.removeButton} onClick={() => deletePhone(id)}>
        Remove
      </button>
    </article>
  );
}

export default PhoneCard;
