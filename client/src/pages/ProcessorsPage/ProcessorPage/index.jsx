import { useParams } from 'react-router-dom';

function ProcessorPage () {
  const { id } = useParams();
  return <div>Processor {id}</div>;
}

export default ProcessorPage;
