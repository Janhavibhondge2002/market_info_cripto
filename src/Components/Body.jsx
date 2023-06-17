// import React, { useState } from 'react';
// import './Body.css';



// function Body() {
//   const [selectedOption, setSelectedOption] = useState('ALL');

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//   };

//   const Card = ({ content }) => {
//     return <div className="card">{content}</div>;
//   };

//   return (
//     <>
    
//     <div className="App">
//       <header className="header">All Crypto's</header>
//       <div className="taskbar">
//         <div className={`option ${selectedOption === 'ALL' ? 'active' : ''}`} onClick={() => handleOptionClick('ALL')}>
//           ALL
//         </div>
//         <div className={`option ${selectedOption === 'Meme' ? 'active' : ''}`} onClick={() => handleOptionClick('Meme')}>
//           Meme
//         </div>
//         <div className={`option ${selectedOption === 'BRC20' ? 'active' : ''}`} onClick={() => handleOptionClick('BRC20')}>
//           BRC20
//         </div>
//         <div className={`option ${selectedOption === 'HongKong' ? 'active' : ''}`} onClick={() => handleOptionClick('HongKong')}>
//           HongKong
//         </div>
//         <div className={`option ${selectedOption === 'AI' ? 'active' : ''}`} onClick={() => handleOptionClick('AI')}>
//           AI
//         </div>
//         <div className={`option ${selectedOption === 'Base' ? 'active' : ''}`} onClick={() => handleOptionClick('Base')}>
//           Base
//         </div>
//         <div className={`option ${selectedOption === 'NFT' ? 'active' : ''}`} onClick={() => handleOptionClick('NFT')}>
//           NFT
//         </div>
//         <div className={`option ${selectedOption === 'BTC' ? 'active' : ''}`} onClick={() => handleOptionClick('BTC')}>
//           BTC
//         </div>
//         <div className={`option ${selectedOption === 'ETH' ? 'active' : ''}`} onClick={() => handleOptionClick('ETH')}>
//           ETH
//         </div>
//       </div>
//       <div className="grid-container">
//         <div className="row">
//           <Card content="BTC Bitcoin" />
//           <Card content="ETH Ethereum" />
//           <Card content="LINK Chainlink" />
//           <Card content="APE Apecoin" />
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }

// export default Body;


// import React, { useState } from 'react';
// import './Body.css';

// function Body() {
//   const [selectedOption, setSelectedOption] = useState('ALL');

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//   };

//   const Card = ({ content }) => {
//     return <div className="card">{content}</div>;
//   };

//   return (
//     <div className="App">
//       <header className="header">All Crypto's</header>
//       <div className="taskbar">
//         <div className={`option ${selectedOption === 'ALL' ? 'active' : ''}`} onClick={() => handleOptionClick('ALL')}>
//           ALL
//         </div>
//         <div className={`option ${selectedOption === 'Meme' ? 'active' : ''}`} onClick={() => handleOptionClick('Meme')}>
//           Meme
//         </div>
//         <div className={`option ${selectedOption === 'BRC20' ? 'active' : ''}`} onClick={() => handleOptionClick('BRC20')}>
//           BRC20
//         </div>
//         <div className={`option ${selectedOption === 'HongKong' ? 'active' : ''}`} onClick={() => handleOptionClick('HongKong')}>
//           HongKong
//         </div>
//         <div className={`option ${selectedOption === 'AI' ? 'active' : ''}`} onClick={() => handleOptionClick('AI')}>
//           AI
//         </div>
//         <div className={`option ${selectedOption === 'Base' ? 'active' : ''}`} onClick={() => handleOptionClick('Base')}>
//           Base
//         </div>
//         <div className={`option ${selectedOption === 'NFT' ? 'active' : ''}`} onClick={() => handleOptionClick('NFT')}>
//           NFT
//         </div>
//         <div className={`option ${selectedOption === 'BTC' ? 'active' : ''}`} onClick={() => handleOptionClick('BTC')}>
//           BTC
//         </div>
//         <div className={`option ${selectedOption === 'ETH' ? 'active' : ''}`} onClick={() => handleOptionClick('ETH')}>
//           ETH
//         </div>
//       </div>
//       <div className="grid-container">
//         <div className="row">
//           <Card content="BTC Bitcoin" />
//           <Card content="write" />
//           <Card content="write" />
//           <Card content="write" />
//         </div>
//         <div className="row">
//           <Card content="ETH Ethereum" />
//           <Card content="write" />
//           <Card content="write" />
//           <Card content="write" />
//         </div>
//         <div className="row">
//           <Card content="LINK Chainlink" />
//           <Card content="write" />
//           <Card content="write" />
//           <Card content="write" />
//         </div>
//         <div className="row">
//           <Card content="APE Apecoin" />
//           <Card content="write" />
//           <Card content="write" />
//           <Card content="write" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Body;

import React, { useState } from 'react';
import './Body.css';

function Body() {
  const [selectedOption, setSelectedOption] = useState('ALL');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const Card = ({ content }) => {
    return <div className="card">{content}</div>;
  };

  return (
    <>
      <div className="App">
        <header className="header">All Crypto's</header>
        <div className="taskbar">
          <div className={`option ${selectedOption === 'ALL' ? 'active' : ''}`} onClick={() => handleOptionClick('ALL')}>
            ALL
          </div>
          <div className={`option ${selectedOption === 'Meme' ? 'active' : ''}`} onClick={() => handleOptionClick('Meme')}>
            Meme
          </div>
          <div className={`option ${selectedOption === 'BRC20' ? 'active' : ''}`} onClick={() => handleOptionClick('BRC20')}>
            BRC20
          </div>
          <div className={`option ${selectedOption === 'HongKong' ? 'active' : ''}`} onClick={() => handleOptionClick('HongKong')}>
            HongKong
          </div>
          <div className={`option ${selectedOption === 'AI' ? 'active' : ''}`} onClick={() => handleOptionClick('AI')}>
            AI
          </div>
          <div className={`option ${selectedOption === 'Base' ? 'active' : ''}`} onClick={() => handleOptionClick('Base')}>
            Base
          </div>
          <div className={`option ${selectedOption === 'NFT' ? 'active' : ''}`} onClick={() => handleOptionClick('NFT')}>
            NFT
          </div>
          <div className={`option ${selectedOption === 'BTC' ? 'active' : ''}`} onClick={() => handleOptionClick('BTC')}>
            BTC
          </div>
          <div className={`option ${selectedOption === 'ETH' ? 'active' : ''}`} onClick={() => handleOptionClick('ETH')}>
            ETH
          </div>
        </div>
        <div className="grid-container">

        <div className="row">
            <div className="card"></div>
            <Card content="Last Price" />
            <Card content="Percentage change" />
           <Card content="volumn" />
          </div>
          <div className="row">
            <div className="card">BTC Bitcoin</div>
            <Card content="$0.000000013"/>
            <Card content="-8.34%"  />
           <Card content="$265438.645327899" />
          </div>
          <div className="row">
            <div className="card">ETH Ethereum</div>
            <Card content="$0.000000013" />
            <Card content="-8.34%" />
           <Card content="$265438.645327899" />
          </div>
          <div className="row">
            <div className="card">LINK Chainlink</div>
            <Card content="$0.000000013" />
            <Card content="-8.34%" />
           <Card content="$265438.645327899" />
          </div>
          <div className="row">
            <div className="card">APE Apecoin</div>
            
            <Card content="$0.000000013" />
            <  Card content="-8.34%" />
           <Card content="$265438.645327899" />
        
          </div>

          

        </div>
      </div>
    </>
  );
}

export default Body;



