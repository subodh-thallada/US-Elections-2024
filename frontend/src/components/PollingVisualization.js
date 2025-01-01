import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PollingVisualization = () => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    const fetchVisualization = async () => {
      const response = await axios.get('http://127.0.0.1:5000/polling-visualization');
      setImageData(response.data.image_data);
    };

    fetchVisualization();
  }, []);

  return (
    <div>
      <h2>Polling Visualization</h2>
      {imageData && <img src={imageData} alt="Polling Visualization" />}
    </div>
  );
};

export default PollingVisualization;
