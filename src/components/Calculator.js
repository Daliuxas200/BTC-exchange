import React, { useState, useEffect } from 'react';
import Details from './Details';
import { parseRates } from '../helperFunctions';
import { FaPlus, FaTimes, FaEquals } from 'react-icons/fa';

/**
 * TODO For testing only, remove later
 */
import testData from '../testingData';

const Calculator = () => {
  const [rates, setRates] = useState([]);
  const [trackedRates, setTrackedRates] = useState(false);
  const [loading, setLoading] = useState(true);
  const [reloadTrigger, setReloadTrigger] = useState(false);

  /*
   * Function for fetching the rates and triggering the loading State.
   */
  const fetchRates = async () => {
    try {
      setLoading(true);
      //   const response = await fetch(
      //     'https://api.coindesk.com/v1/bpi/currentprice.json'
      //   );
      //   const data = await response.json();
      const data = testData;
      const parsedRates = parseRates(data);
      setRates(parsedRates);
      setLoading(false);
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

  /*
   * Triggers when Rates update to check if Tracked rates have been set
   * If not, sets all as Tracked, only to later be updated manually
   */
  useEffect(() => {
    if (rates.length && trackedRates === false) {
      setTrackedRates(rates.map((rate) => rate.code));
    }
  }, [rates]);

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
        <Details
          loading={loading}
          reload={reload}
          rates={rates}
          trackedRates={trackedRates}
        />
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
