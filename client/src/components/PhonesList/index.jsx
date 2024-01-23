import { useEffect } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import { connect } from 'react-redux';
import { getPhonesThunk } from '../../store/slices/phonesSlice';
import PhoneCard from './PhoneCard';

function PhonesList ({ phones, isFetching, error, getPhones }) {
  useEffect(() => {
    getPhones();
  }, []);

  return (
    <div>
      <BeatLoader loading={isFetching} />
      {error && <div>error</div>}
      <h2>Phones List</h2>
      <ul>
        {phones.map(phone => (
          <PhoneCard key={phone.id} phone={phone} />
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = ({ phonesData }) => phonesData;

const mapDispatchToProps = dispatch => ({
  getPhones: () => dispatch(getPhonesThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhonesList);
