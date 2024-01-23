import { useParams } from 'react-router-dom';

function PhonePage () {
  const { id } = useParams();
  return <div>Phone {id}</div>;
}

export default PhonePage;
