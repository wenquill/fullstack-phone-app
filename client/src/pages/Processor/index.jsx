import { useParams } from 'react-router-dom';

function Processor () {
  const { id } = useParams();
  return <div>Processor {id}</div>;
}

export default Processor;
