import React from 'react';
import './Block.css'; // Import the CSS file for styling

const Block = () => {
  return (
    <div className="blocks-container">
      <div className="block">
        <h1>27,019.96 USDT</h1>
        <img src="marketf.png" alt="Image 1" />
        <h2>ETH/USDT</h2>
        <h3>22,027.06</h3>
      </div>
      <div className="block">
        <h1>217.63 USDT</h1>
        <img src="marketf4.png" alt="Image 2" />
        <h2>BMX/USDT</h2>
        <h4>0.12523</h4>
      </div>
      <div className="block">
        <h1>0.12 USDT</h1>
        <img src="marketf2.png" alt="Image 3" />
        <h2>BMX/USDT</h2>
        <h4>0.12523</h4>
      </div>
      <div className="block">
        <h1>0.12 USDT</h1>
        <img src="marketf3.png" alt="Image 4" />
        <h2>PEKA/USDT</h2>
        <h4>0.000317</h4>
      </div>
    </div>
  );
};

export default Block;
