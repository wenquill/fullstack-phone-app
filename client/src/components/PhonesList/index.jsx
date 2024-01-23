import { useEffect } from 'react';

function PhonesList () {
  useEffect(() => {
    fetch('http://localhost:5000/api/phones')
      .then(res => res.json())
      .then(data => {});
  }, []);

  return (
    <div>
      <h2>Phones List</h2>
      <ul>
        <li></li>
      </ul>
    </div>
  );
}

export default PhonesList;
