import { useEffect } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import { connect } from 'react-redux';
import { getPhonesThunk } from '../../store/slices/phonesSlice';

function PhonesList ({ phones, isFetching, error, getPhones }) {
  useEffect(() => {
    getPhones();
  }, []);

  return (
    <div>
      <BeatLoader loading={isFetching} />
      {error && <div>error</div>}
      <h2>Phones List</h2>
      {/* <ul>
        {phones.map(phone => (
          <li key={phone.id}>{phone.brand}</li>
        ))}
      </ul> */}
    </div>
  );
}

const mapStateToProps = ({ phonesData }) => phonesData;

const mapDispatchToProps = dispatch => ({
  getPhones: () => dispatch(getPhonesThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhonesList);