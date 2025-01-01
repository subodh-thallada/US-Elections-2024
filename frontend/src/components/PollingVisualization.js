import React from 'react';
import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Static betting odds data
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

// Convert percentages to numbers for the chart
const chartData = bettingOddsData.map(item => ({
  state: item.state,
  democrat: parseFloat(item.dem_percentage),
  republican: parseFloat(item.rep_percentage),
}));

const PollingVisualization = () => {
  return (
    <div>
      <h2>Polling Visualization</h2>
      <div style={{ height: '500px', width: '100%' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="state" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="democrat" fill="#0000FF" name="Democrat" />
            <Bar dataKey="republican" fill="#FF0000" name="Republican" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PollingVisualization;
