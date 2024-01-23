import { useEffect } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import BeatLoader from 'react-spinners/BeatLoader';
import { connect } from 'react-redux';
import ProcessorCard from './ProcessorCard';
import { getProcessorsThunk } from '../../store/slices/processorsSlice';
import styles from './ProcessorsList.module.scss'

function ProcessorsList ({ processors, isFetching, error, getProcessors }) {
  useEffect(() => {
    getProcessors();
  }, []);

  return (
    <div>
      <BeatLoader loading={isFetching} />
      {error && <div>error</div>}
      <h1 className={styles.title}>Processors List</h1>
      <ul className={styles.list}>
        {Array.isArray(processors) ? (
          processors.map(processor => (
            <li key={processor.id} className={styles.card}>
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
