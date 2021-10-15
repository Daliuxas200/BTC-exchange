import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

const Header = ({ minimized, toggleMinimized }) => {
  return (
    <header className="calculator__header">
      <h1 className="calculator__title">BTC Exchange</h1>
      <span className="calculator__toggle">
        {minimized ? (
          <FaPlus onClick={() => toggleMinimized(!minimized)} />
        ) : (
          <FaMinus onClick={() => toggleMinimized(!minimized)} />
        )}
      </span>
      <h2 className="calculator__info">
        Input amount in BTC and get converted amount in USD, GBP or EUR. Add or
        remove currencies for your convenience. Conversion rate updated every
        60s.
      </h2>
    </header>
  );
};

export default Header;
