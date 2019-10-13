import React, { useState, useEffect } from 'react';

const App = () => {
  const [boats, setBoats] = useState([]);

  useEffect(() => {
    fetch('./data.json')
      .then((data) => data.json())
      .then((data) => {
        setBoats(data.results);
      });
  }, []);

  return (
    <div>
      {boats.map(({ id, boat_summary: { name } }) => (
        <div key={id}>
          <p>{name}</p>
        </div>
      ))}
    </div>
  );
};

export default App;