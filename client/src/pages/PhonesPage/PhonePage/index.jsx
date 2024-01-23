import { useParams } from 'react-router-dom';
import BeatLoader from 'react-spinners/BeatLoader';
import { connect } from 'react-redux';
import { getPhoneByIdThunk } from '../../../store/slices/phonesSlice';
import { useEffect } from 'react';

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
        <div>
          Phone {phones.id} {phones.brand} {phones.model}
        </div>
      )}
    </article>
  );
}

const mapStateToProps = ({ phonesData }) => phonesData;

const mapDispatchToProps = dispatch => ({
  getPhone: id => dispatch(getPhoneByIdThunk(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhonePage);
