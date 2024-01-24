import { useEffect } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import { connect } from 'react-redux';
import { deletePhoneByIdThunk, getPhonesThunk } from '../../store/slices/phonesSlice';
import PhoneCard from './PhoneCard';
import styles from './PhonesList.module.scss';

function PhonesList ({ phones, isFetching, error, getPhones, deletePhone }) {
  useEffect(() => {
    getPhones();
  }, []);

  return (
    <div>
      <BeatLoader loading={isFetching} />
      {error && <div>error</div>}
      <h1 className={styles.title}>Available phones</h1>
      <ul className={styles.list}>
        {Array.isArray(phones) &&
          phones.map(phone => (
            <li key={phone.id} className={styles.card}>
              <PhoneCard phone={phone} deletePhone={deletePhone} />
            </li>
          ))}
      </ul>
    </div>
  );
}

const mapStateToProps = ({ phonesData }) => phonesData;

const mapDispatchToProps = dispatch => ({
  getPhones: () => dispatch(getPhonesThunk()),
  deletePhone: id => dispatch(deletePhoneByIdThunk(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PhonesList);
