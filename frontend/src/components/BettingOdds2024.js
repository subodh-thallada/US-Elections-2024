import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './BettingOdds2024.css';

function BettingOdds2024() {
  const [bettingOdds2024, setBettingOdds2024] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:5000/betting-odds-2024')
      .then((response) => {
        setBettingOdds2024(response.data);
      })
      .catch((error) => {
        console.error('Error fetching 2024 betting odds:', error);
      });
  }, []);

  return (
    <div className="betting-odds-2024">
      <h2>2024 Presidential Election Betting Odds</h2>
      <table>
        <thead>
          <tr>
            <th>State</th>
            <th>Republican Odds</th>
            <th>Democrat Odds</th>
          </tr>
        </thead>
        <tbody>
          {bettingOdds2024.map((item, index) => (
            <tr key={index}>
              <td>{item.state}</td>
              <td>{item.republican_odds}</td>
              <td>{item.democrat_odds}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BettingOdds2024;
