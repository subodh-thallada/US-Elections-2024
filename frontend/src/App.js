/** 
import React from 'react';
import './App.css';
import BettingOdds from './components/BettingOdds';
import BettingOdds2024 from './components/BettingOdds2024';
import PollingVisualization from './components/PollingVisualization';
import StateSearch from './components/StateSearch';
import VotingMap from "./components/VotingMap";



function App() {
  return (
    <div className="App">
      <h1>Interactive Data Visualization</h1>
      <BettingOdds />
      <BettingOdds2024 />
      <PollingVisualization />
      <StateSearch />
      <VotingMap />
    </div>
  );
}

export default App;
*/

import React from 'react';
import './App.css';
import BettingOdds2024 from './components/BettingOdds2024';
import StateSearch from './components/StateSearch';
import VotingMap from "./components/VotingMap";
import PollingVisualization from './components/PollingVisualization';

function App() {
  // Function to handle scrolling to sections
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <h1 className="title">U.S. Presidential Election Data Visualization</h1>
      
      <div className="tab-container">
        {/* Buttons that navigate to their respective sections */}
        <button className="tab-button" onClick={() => scrollToSection('google-earth-section')}>Google Earth Map</button>
        <button className="tab-button" onClick={() => scrollToSection('voting-map-section')}>Voting Map</button>
        <button className="tab-button" onClick={() => scrollToSection('betting-odds-section')}>Betting Odds</button>
        <button className="tab-button" onClick={() => scrollToSection('polling-graph-section')}>Voting Graph</button>
      </div>

      <div className="sections-container">
        {/* Google Earth Map Section */}
        <section id="google-earth-section" className="section">
          <h2>Google Earth Map</h2>
          <p>View Google Maps view and voting statistics of a state!</p>
          <StateSearch />
        </section>
        
        {/* Voting Map Section */}
        <section id="voting-map-section" className="section">
          <VotingMap />
        </section>

        {/* Betting Odds Section */}
        <section id="betting-odds-section" className="section">
          <h2>Betting Odds</h2>
          <h3>How to read the betting odds:</h3>
          <p>The "-" indicates the favorite, while the "+" indicates the underdog.</p>
          <p>Large numbers (like -10000 or +5000) show extremely strong favorites or long-shot underdogs, respectively.</p>
          <p>In swing states, odds are closer (like -200 or +100), indicating a competitive race where either candidate has a viable chance of winning.</p>
          <p>These numbers represent how much you'd need to bet to win $100 (for favorites) or how much you'd win on a $100 bet (for underdogs).</p>
          <BettingOdds2024 />
        </section>

        <section id="polling-graph-section" className="section">
          <h2>Polling Data</h2>
          <p>View bar graph of voting statistics</p>
          <PollingVisualization />
        </section>
      </div>
    </div>
  );
}

export default App;
