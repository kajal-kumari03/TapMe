// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './apollo/client';
import CoinBalance from './components/CoinBalance';
import TapButton from './components/TapButton';

const App: React.FC = () => {
  const [userId] = useState("user-123");  // Example user ID

  const handleCoinsIncremented = () => {
    // Logic to refresh the balance after coins are incremented
    console.log("Coins incremented!");
  };

  return (
    <ApolloProvider client={client}>
      <div className="app">
        <h1>TapMe Game</h1>
        <CoinBalance userId={userId} />
        <TapButton userId={userId} onCoinsIncremented={handleCoinsIncremented} />
      </div>
    </ApolloProvider>
  );
};

export default App;

