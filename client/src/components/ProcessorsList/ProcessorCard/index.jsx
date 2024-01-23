import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import defaultImage from './default.webp';
import styles from './../ProcessorsList.module.scss';

function ProcessorCard ({ processor }) {
  const { name, id } = processor;

  return (
    <article className={styles.article}>
      <Link to={`/processors/${id}`}>
        <div className={styles.imageContainer}>
          <img src={defaultImage} alt='processor' className={styles.image} />
        </div>
        <h2>{`${name}`}</h2>
      </Link>
    </article>
  );
}

export default ProcessorCard;
