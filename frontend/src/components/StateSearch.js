import React, { useState } from 'react';
import axios from 'axios';

// Replace with your actual API key
const GOOGLE_MAPS_API_KEY = '####---- ENTER KEY ----####';

const StateSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (term.length >= 2) {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/api/search`, {
          params: { state: term }
        });
        setSearchResult(response.data);
        setError(null);
      } catch (err) {
        console.error('Error:', err);
        setError('Error fetching data');
        setSearchResult(null);
      }
    } else {
      setSearchResult(null);
      setError(null);
    }
  };

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          id="stateSearch"
          placeholder="Search for a state..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div id="searchResults">
        {error && <div>{error}</div>}
        {searchResult && !error && (
          <div className="state-result" style={{
            margin: '20px',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}>
            <h2>{searchResult.name}</h2>
            <p><strong>Winner:</strong> {searchResult.winner}</p>
            <p><strong>Margin:</strong> {searchResult.margin}%</p>
            <p><strong>2024 Betting Odds:</strong> {searchResult.odds}</p>
            
            {/* Voting Percentages */}
            <div style={{ marginTop: '20px' }}>
              <h3>Voting Percentages</h3>
              <div style={{ marginBottom: '10px' }}>
                <p><strong>Democratic:</strong> {searchResult.dem_percentage}</p>
                <div style={{
                  width: '100%',
                  backgroundColor: '#f0f0f0',
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: `${searchResult.dem_percentage}`,
                    height: '20px',
                    backgroundColor: '#0015BC',
                    transition: 'width 0.3s ease'
                  }}></div>
                </div>
              </div>
              
              <div>
                <p><strong>Republican:</strong> {searchResult.rep_percentage}</p>
                <div style={{
                  width: '100%',
                  backgroundColor: '#f0f0f0',
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: `${searchResult.rep_percentage}`,
                    height: '20px',
                    backgroundColor: '#E9141D',
                    transition: 'width 0.3s ease'
                  }}></div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div style={{ marginTop: '20px' }}>
              <h3>State Map</h3>
              <iframe
                width="100%"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${searchResult.name}+state+USA&zoom=6`}
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StateSearch; 
