import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PollingData = () => {
  const [polling, setPolling] = useState([]);

  useEffect(() => {
    const fetchPolling = async () => {
      const response = await axios.get('http://127.0.0.1:5000/polling-data');
      setPolling(response.data);
    };

    fetchPolling();
  }, []);

  return (
    <div>
      <h2>Polling Data</h2>
      <ul>
        {polling.map((item, index) => (
          <li key={index}>
            {item.state}: Candidate A - {item.candidate_a}%, Candidate B - {item.candidate_b}%
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PollingData;
