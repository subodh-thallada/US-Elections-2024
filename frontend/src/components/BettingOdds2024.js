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

  const getRowStyle = (repOdds, demOdds) => {
    // Convert odds to numbers for comparison
    const repValue = parseFloat(repOdds);
    const demValue = parseFloat(demOdds);
    
    if (repValue > demValue) {
      return { backgroundColor: 'rgba(0, 0, 255, 0.05)' }; // Light red for Republican
    } else if (demValue > repValue) {
      return { backgroundColor: 'rgba(255, 0, 0, 0.05)' }; // Light blue for Democrat
    }
    return {}; // No tint if equal
  };

  return (
    <div className="betting-odds-2024">
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
            <tr 
              key={index}
              style={getRowStyle(item.republican_odds, item.democrat_odds)}
            >
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
