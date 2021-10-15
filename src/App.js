import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Calculator from './components/Calculator';

const App = () => {
  const [minimized, setMinimized] = useState(false);

  return (
    <div className="page">
      <div className={`modal ${minimized ? 'closed' : ''}`}>
        <Header minimized={minimized} toggleMinimized={setMinimized} />
        <Calculator />
      </div>
    </div>
  );
};

export default App;
