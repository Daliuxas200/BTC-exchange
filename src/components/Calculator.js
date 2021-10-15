import React, { useState, useEffect } from 'react';
import { FaPlus, FaTimes, FaEquals } from 'react-icons/fa';
import { HiRefresh } from 'react-icons/hi';

const Calculator = () => {
  const [rates, setRates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reloadTrigger, setReloadTrigger] = useState(false);

  /*
   * Function for fetching the rates and triggering the loading State.
   */
  const fetchRates = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        'https://api.coindesk.com/v1/bpi/currentprice.json'
      );
      const data = await response.json();
      setLoading(false);
      setRates(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  /*
   * Function for switching the reload state, which triggers the useEffect to fetch new rates and resets the interval counter.
   */
  const reload = () => setReloadTrigger(!reloadTrigger);

  /*
   * Loads initial Rates after first render, sets interval for data refetch. Can be reset manually by triggering the reloadTrigger state.
   */
  useEffect(() => {
    fetchRates();
    /**
     * TODO timer set to 10 minutes so i dont get my IP banned, reset back to 1min before final deployment
     */
    const updater = setInterval(fetchRates, 600000);
    return () => {
      clearInterval(updater);
    };
  }, [reloadTrigger]);

  return (
    <main className="calculator">
      <div className="calculator__left">
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
      <div className="calculator__center">
        <FaEquals />
      </div>
      <div className="calculator__right">
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
  );
};

export default Calculator;
