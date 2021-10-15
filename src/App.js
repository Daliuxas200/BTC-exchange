import React from 'react';
import { FaMinus, FaPlus, FaTimes, FaEquals } from 'react-icons/fa';
import { HiRefresh } from 'react-icons/hi';

const App = () => {
  return (
    <div className="page">
      <div className="calculator">
        <header className="calculator__header">
          <h1 className="calculator__title">BTC Exchange</h1>
          <span className="calculator__toggle">
            <FaMinus />
          </span>
          <desc className="calculator__info">
            Input amount in BTC and get converted amount in USD, GBP or EUR. Add
            or remove currencies for your convenience. Conversion rate updated
            every 60s.
          </desc>
        </header>
        <main className="calculator__main">
          <div className="calculator__main__left">
            <div className="input">
              <input
                type="number"
                className="input__field wrapper"
                placeholder="Input amount"
              />
              <span className="input__indicator">BTC</span>
            </div>
            <div className="details wrapper">
              <h3 className="details__title">BTC Exchange Rates</h3>
              <h4 className="details__subtitle">
                <span> Last updated 21:41 </span>
                <HiRefresh />
              </h4>
              {/* <p className="details__pair">
                <span> EUR </span> <span> 15.418465681</span>
              </p>
              <p className="details__pair">
                <span> GBP </span> <span> 4615.4681</span>
              </p>
              <p className="details__pair">
                <span> USD </span> <span> 465415.481</span>
              </p> */}
              <div className="loader">
                <HiRefresh className="loader__icon" />
              </div>
            </div>
          </div>
          <div className="calculator__main__center">
            <FaEquals />
          </div>
          <div className="calculator__main__right">
            <ul className="results">
              <li className="wrapper results__item">
                <span>1,000,000$</span>
                <span>GBP</span>
                <FaTimes className="results__item__remove" />
              </li>
              <li className="wrapper results__item">
                <span>1,000,000$</span>
                <span>GBP</span>
                <FaTimes className="results__item__remove" />
              </li>
              <li className="wrapper results__item">
                <span>1,000,000$</span>
                <span>GBP</span>
                <FaTimes className="results__item__remove" />
              </li>
            </ul>
            <div className="dropdown">
              <button className="wrapper dropdown__button">
                <FaPlus />
              </button>
              {/* <ul className="dropdown__list">
                <li className="dropdown__list__item">USD</li>
                <li className="dropdown__list__item">EUR</li>
              </ul> */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
