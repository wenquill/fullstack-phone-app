import { useParams } from 'react-router-dom';
import BeatLoader from 'react-spinners/BeatLoader';
import { connect } from 'react-redux';
import { getPhoneByIdThunk } from '../../../store/slices/phonesSlice';
import { useEffect } from 'react';
import defaultPhoto from './../../../components/PhonesList/PhoneCard/default.jpg';
import styles from './PhonePage.module.scss';

function PhonePage ({ phones, isFetching, error, getPhone }) {
  const { id } = useParams();

  useEffect(() => {
    getPhone(id);
  }, []);

  return (
    <article>
      <BeatLoader loading={isFetching} />
      {error && <div>ERROR</div>}
      {phones && (
        <article className={styles.article}>
          <div className={styles.firstItem}>
            <div className={styles.imageContainer}>
              <img
                src={
                  phones.image
                    ? `http://localhost:5000/images/${phones.image}`
                    : defaultPhoto
                }
                alt={`${phones.brand} ${phones.model}`}
                className={styles.image}
              />
            </div>
          </div>
          <div className={styles.secondItem}>
            <h1>
              {phones.brand} {phones.model}
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              esse atque at repellat veniam maxime voluptatibus assumenda
              voluptatum, quasi nemo reiciendis nulla laboriosam modi fuga
              nostrum asperiores, ipsam sunt eaque. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Assumenda deleniti vero aperiam
              eligendi, qui nesciunt voluptatibus, illum voluptates fugiat
              doloribus perferendis velit in quas optio. Commodi necessitatibus
              sequi eveniet voluptatum.
            </p>
            <div className={styles.info}>
              <span>
                <strong>Screen diagonal</strong>:{' '}
                {phones.screenDiagonal ? phones.screenDiagonal : 'no info'}
              </span>
              <span>
                <strong>Processor</strong>:{' '}
                {phones.Processor?.name ? phones.Processor?.name : 'no info'}
              </span>
              <span>
                <strong>RAM size</strong>:{' '}
                {phones.ramSize ? phones.ramSize : 'no info'}
              </span>
              <span>
                <strong>Manufactured year</strong>:{' '}
                {phones.manufacturedYear ? phones.manufacturedYear : 'no info'}
              </span>
              <span>
                <strong>NFC</strong>: {phones.hasNfc ? 'yes' : 'no'}
              </span>
            </div>
          </div>
        </article>
      )}
    </article>
  );
}

const mapStateToProps = ({ phonesData }) => phonesData;

const mapDispatchToProps = dispatch => ({
  getPhone: id => dispatch(getPhoneByIdThunk(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhonePage);
