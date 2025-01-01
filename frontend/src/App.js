import React from 'react';
import './App.css';
import BettingOdds from './components/BettingOdds';
import BettingOdds2024 from './components/BettingOdds2024';
import PollingVisualization from './components/PollingVisualization';
import StateSearch from './components/StateSearch';
import BettingOddsMap from "./components/BettingOddsMap";



function App() {
  return (
    <div className="App">
      <h1>Interactive Data Visualization</h1>
      <BettingOdds />
      <BettingOdds2024 />
      <PollingVisualization />
      <StateSearch />
      <BettingOddsMap />
    </div>
  );
}

export default App;
