// BettingOddsMap.js
import React from "react";
import Plot from "react-plotly.js";

const VotingMap = () => {
    const bettingOddsData = [
        { state: "Alabama", dem_percentage: "34%", rep_percentage: "65%" },
        { state: "Alaska", dem_percentage: "41%", rep_percentage: "55%" },
        { state: "Arizona", dem_percentage: "46%", rep_percentage: "54%" },
        { state: "Arkansas", dem_percentage: "34%", rep_percentage: "64%" },
        { state: "California", dem_percentage: "58%", rep_percentage: "38%" },
        { state: "Colorado", dem_percentage: "54%", rep_percentage: "43%" },
        { state: "Connecticut", dem_percentage: "56%", rep_percentage: "42%" },
        { state: "Delaware", dem_percentage: "57%", rep_percentage: "42%" },
        { state: "District of Columbia", dem_percentage: "90%", rep_percentage: "6%" },
        { state: "Florida", dem_percentage: "43%", rep_percentage: "56%" },
        { state: "Georgia", dem_percentage: "46%", rep_percentage: "54%" },
        { state: "Hawaii", dem_percentage: "61%", rep_percentage: "37%" },
        { state: "Idaho", dem_percentage: "30%", rep_percentage: "67%" },
        { state: "Illinois", dem_percentage: "54%", rep_percentage: "43%" },
        { state: "Indiana", dem_percentage: "40%", rep_percentage: "59%" },
        { state: "Iowa", dem_percentage: "43%", rep_percentage: "56%" },
        { state: "Kansas", dem_percentage: "41%", rep_percentage: "57%" },
        { state: "Kentucky", dem_percentage: "34%", rep_percentage: "64%" },
        { state: "Louisiana", dem_percentage: "38%", rep_percentage: "60%" },
        { state: "Maine", dem_percentage: "52%", rep_percentage: "45%" },
        { state: "Maryland", dem_percentage: "63%", rep_percentage: "34%" },
        { state: "Massachusetts", dem_percentage: "61%", rep_percentage: "36%" },
        { state: "Michigan", dem_percentage: "45%", rep_percentage: "55%" },
        { state: "Minnesota", dem_percentage: "51%", rep_percentage: "47%" },
        { state: "Mississippi", dem_percentage: "38%", rep_percentage: "61%" },
        { state: "Missouri", dem_percentage: "40%", rep_percentage: "58%" },
        { state: "Montana", dem_percentage: "38%", rep_percentage: "58%" },
        { state: "Nebraska", dem_percentage: "39%", rep_percentage: "59%" },
        { state: "Nevada", dem_percentage: "44%", rep_percentage: "56%" },
        { state: "New Hampshire", dem_percentage: "51%", rep_percentage: "48%" },
        { state: "New Jersey", dem_percentage: "52%", rep_percentage: "46%" },
        { state: "New Mexico", dem_percentage: "52%", rep_percentage: "46%" },
        { state: "New York", dem_percentage: "56%", rep_percentage: "43%" },
        { state: "North Carolina", dem_percentage: "46%", rep_percentage: "54%" },
        { state: "North Dakota", dem_percentage: "31%", rep_percentage: "67%" },
        { state: "Ohio", dem_percentage: "44%", rep_percentage: "55%" },
        { state: "Oklahoma", dem_percentage: "32%", rep_percentage: "66%" },
        { state: "Oregon", dem_percentage: "55%", rep_percentage: "41%" },
        { state: "Pennsylvania", dem_percentage: "45%", rep_percentage: "55%" },
        { state: "Rhode Island", dem_percentage: "56%", rep_percentage: "42%" },
        { state: "South Carolina", dem_percentage: "40%", rep_percentage: "58%" },
        { state: "South Dakota", dem_percentage: "34%", rep_percentage: "63%" },
        { state: "Tennessee", dem_percentage: "34%", rep_percentage: "64%" },
        { state: "Texas", dem_percentage: "42%", rep_percentage: "56%" },
        { state: "Utah", dem_percentage: "38%", rep_percentage: "59%" },
        { state: "Vermont", dem_percentage: "64%", rep_percentage: "32%" },
        { state: "Virginia", dem_percentage: "52%", rep_percentage: "46%" },
        { state: "Washington", dem_percentage: "57%", rep_percentage: "39%" },
        { state: "West Virginia", dem_percentage: "28%", rep_percentage: "70%" },
        { state: "Wisconsin", dem_percentage: "46%", rep_percentage: "54%" },
        { state: "Wyoming", dem_percentage: "26%", rep_percentage: "72%" },
      ];

    const stateAbbreviations = {
    "Alabama": "AL",
    "Alaska": "AK",
    "Arizona": "AZ",
    "Arkansas": "AR",
    "California": "CA",
    "Colorado": "CO",
    "Connecticut": "CT",
    "Delaware": "DE",
    "Florida": "FL",
    "Georgia": "GA",
    "Hawaii": "HI",
    "Idaho": "ID",
    "Illinois": "IL",
    "Indiana": "IN",
    "Iowa": "IA",
    "Kansas": "KS",
    "Kentucky": "KY",
    "Louisiana": "LA",
    "Maine": "ME",
    "Maryland": "MD",
    "Massachusetts": "MA",
    "Michigan": "MI",
    "Minnesota": "MN",
    "Mississippi": "MS",
    "Missouri": "MO",
    "Montana": "MT",
    "Nebraska": "NE",
    "Nevada": "NV",
    "New Hampshire": "NH",
    "New Jersey": "NJ",
    "New Mexico": "NM",
    "New York": "NY",
    "North Carolina": "NC",
    "North Dakota": "ND",
    "Ohio": "OH",
    "Oklahoma": "OK",
    "Oregon": "OR",
    "Pennsylvania": "PA",
    "Rhode Island": "RI",
    "South Carolina": "SC",
    "South Dakota": "SD",
    "Tennessee": "TN",
    "Texas": "TX",
    "Utah": "UT",
    "Vermont": "VT",
    "Virginia": "VA",
    "Washington": "WA",
    "West Virginia": "WV",
    "Wisconsin": "WI",
    "Wyoming": "WY"
    };
      
  // Prepare data for the gradient map
  const gradientData = bettingOddsData.map((item) => {
    const demPercentage = parseFloat(item.dem_percentage.replace("%", ""));
    return { ...item, demPercentage };
  });

  const gradientMap = {
    type: "choropleth",
    locationmode: "USA-states",
    locations: gradientData.map((item) => stateAbbreviations[item.state]),
    z: gradientData.map((item) => item.demPercentage), // Gradient based on Democratic percentage
    text: gradientData.map(
      (item) => `
        State: ${item.state}<br>
        Dem %: ${item.dem_percentage}<br>
        Rep %: ${item.rep_percentage}
      `
    ),
    colorscale: [
      [0, "#FF0000"], // Red for lower Democratic percentages
      [1, "#0000FF"], // Blue for higher Democratic percentages
    ],
    colorbar: { title: "Democratic Percentage" },
  };

  const gradientLayout = {
    geo: {
      locationmode: "USA-states",
      scope: "usa",
      lakecolor: "lightblue",
    },
    title: "2024 U.S. Election Betting Odds: Gradient by Democratic Percentage",
    titlefont: { size: 20 },
  };

  // Prepare data for the winner map
  const winnerData = bettingOddsData.map((item) => {
    const demPercentage = parseFloat(item.dem_percentage.replace("%", ""));
    const repPercentage = parseFloat(item.rep_percentage.replace("%", ""));
    const winner = demPercentage > repPercentage ? "Democrat" : "Republican";
    return { ...item, winner };
  });

  const winnerMap = {
    type: "choropleth",
    locationmode: "USA-states",
    locations: winnerData.map((item) => stateAbbreviations[item.state]),
    z: winnerData.map((item) => (item.winner === "Democrat" ? 1 : 0)),
    text: winnerData.map(
      (item) => `
        State: ${item.state}<br>
        Dem %: ${item.dem_percentage}<br>
        Rep %: ${item.rep_percentage}<br>
        Winner: ${item.winner}
      `
    ),
    colorscale: [
      [0, "#FF0000"], // Republican (Red)
      [1, "#0000FF"], // Democrat (Blue)
    ],
    colorbar: { title: "Winner" },
  };

  const winnerLayout = {
    geo: {
      locationmode: "USA-states",
      scope: "usa",
      lakecolor: "lightblue",
    },
    title: "2024 U.S. Election Betting Odds: State-by-State Results",
    titlefont: { size: 20 },
  };

  return (
    <div>
      <h1>Betting Odds Maps</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div>
          <h2>Gradient Map</h2>
          <Plot
            data={[gradientMap]}
            layout={gradientLayout}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div>
          <h2>Winner Map</h2>
          <Plot
            data={[winnerMap]}
            layout={winnerLayout}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default VotingMap;
