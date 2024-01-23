import styles from './NotFound.module.scss'
import image from './notFound.svg'

function NotFound () {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Sorry, it seems that this page doesn`t exist ):
      </h1>
      <div className={styles.imageContainer}>
        <img
          src={image}
          alt='Not Found Image'
          className={styles.image}
        />
      </div>
    </div>
  );
}

export default NotFound;
