import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

const Header = ({ minimized, toggleMinimized }) => {
  return (
    <header className="modal__header">
      <h1 className="modal__title">BTC Exchange</h1>
      <span className="modal__toggle">
        {minimized ? (
          <FaPlus onClick={() => toggleMinimized(!minimized)} />
        ) : (
          <FaMinus onClick={() => toggleMinimized(!minimized)} />
        )}
      </span>
      <h2 className="modal__info">
        Input amount in BTC and get converted amount in USD, GBP or EUR. Add or
        remove currencies for your convenience. Conversion rate updated every
        60s.
      </h2>
    </header>
  );
};

export default Header;
