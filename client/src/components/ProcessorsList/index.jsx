import { useEffect } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import BeatLoader from 'react-spinners/BeatLoader';
import { connect } from 'react-redux';
import ProcessorCard from './ProcessorCard';
import { getProcessorsThunk } from '../../store/slices/processorsSlice';

function ProcessorsList ({ processors, isFetching, error, getProcessors }) {
  useEffect(() => {
    getProcessors();
  }, []);

  return (
    <div>
      <BeatLoader loading={isFetching} />
      {error && <div>error</div>}
      <h2>Processors List</h2>
      <ul>
        {Array.isArray(processors) ? (
          processors.map(processor => (
            <li key={processor.id}>
              <ProcessorCard processor={processor} />
            </li>
          ))
        ) : (
          <div>No processors available</div>
        )}
      </ul>
    </div>
  );
}

const mapStateToProps = ({ processorsData }) => processorsData;

const mapDispatchToProps = dispatch => ({
  getProcessors: () => dispatch(getProcessorsThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProcessorsList);
