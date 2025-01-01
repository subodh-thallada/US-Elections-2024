import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BettingOdds = () => {
  const [odds, setOdds] = useState([]);

  useEffect(() => {
    const fetchOdds = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/betting-odds');
        setOdds(response.data);
      } catch (error) {
        console.error('Error fetching betting odds:', error);
      }
    };

    fetchOdds();
  }, []);

  return (
    <div>
      <h2>Betting Odds Data</h2>
      <table border="1" style={{ width: '100%', textAlign: 'left', margin: '20px 0' }}>
        <thead>
          <tr>
            <th>State</th>
            <th>Democratic (%)</th>
            <th>Republican (%)</th>
            <th>Winner</th>
          </tr>
        </thead>
        <tbody>
          {odds.map((item, index) => (
            <tr key={index}>
              <td>{item.state}</td>
              <td>{item.dem_percentage}</td>
              <td>{item.rep_percentage}</td>
              <td>{item.winner}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BettingOdds;
