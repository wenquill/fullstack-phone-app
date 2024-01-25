import { useEffect } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import { connect } from 'react-redux';
import {
  deletePhoneByIdThunk,
  getPhonesThunk,
  updatePhoneByIdThunk,
} from '../../store/slices/phonesSlice';
import PhoneCard from './PhoneCard';
import styles from './PhonesList.module.scss';

function PhonesList ({
  phones,
  isFetching,
  error,
  getPhones,
  deletePhone,
  updatePhone,
}) {
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
              <PhoneCard
                phone={phone}
                deletePhone={deletePhone}
                updatePhone={updatePhone}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}

const mapStateToProps = ({ phonesData }) => phonesData;

const mapDispatchToProps = dispatch => ({
  getPhones: () => dispatch(getPhonesThunk()),
  deletePhone: id => dispatch(deletePhoneByIdThunk(id)),
  updatePhone: (id, data) => dispatch(updatePhoneByIdThunk({id, data})),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhonesList);
