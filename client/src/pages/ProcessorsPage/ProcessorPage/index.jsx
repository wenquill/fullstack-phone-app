import { useParams } from 'react-router-dom';
import BeatLoader from 'react-spinners/BeatLoader';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getProcessorByIdThunk } from '../../../store/slices/processorsSlice';

function ProcessorPage ({ processors, isFetching, error, getProcessor }) {
  const { id } = useParams();

  useEffect(() => {
    getProcessor(id);
  }, []);

  return (
    <article>
      <BeatLoader loading={isFetching} />
      {error && <div>ERROR</div>}
      <h2>Processor {processors?.name}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
        consequuntur eligendi debitis distinctio ullam molestiae! Veniam
        explicabo fugit asperiores. Tempora fuga sequi ea totam ab sapiente
        mollitia autem, explicabo ipsam.
      </p>
    </article>
  );
}

const mapStateToProps = ({ processorsData }) => processorsData;

const mapDispatchToProps = dispatch => ({
  getProcessor: id => dispatch(getProcessorByIdThunk(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProcessorPage);
