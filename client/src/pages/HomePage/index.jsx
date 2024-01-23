import styles from './HomePage.module.scss';
import image from './home.svg';

function HomePage () {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>This is the home page</h1>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic natus
          quaerat cupiditate harum? Sunt est
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
          tempore molestias illum libero ea ullam magnam maiores dicta odio
          placeat? Minima at aperiam doloremque eveniet inventore quas
          repellendus quibusdam deserunt! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ea aliquid beatae facilis tenetur animi accusantium
          culpa, at perferendis veniam tempora adipisci inventore sapiente velit
          magni odio amet recusandae quidem a.
        </p>
      </div>

      <div className={styles.imageContainer}>
        <img src={image} alt='home image' />
      </div>
    </div>
  );
}

export default HomePage;
