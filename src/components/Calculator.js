import React, { useState, useEffect } from 'react';
import Details from './Details';
import Results from './Results';
import { parseRates } from '../helperFunctions';
import { FaEquals } from 'react-icons/fa';

/**
 * ! For testing only
 */
// import testData from '../testingData';

const Calculator = () => {
  const [rates, setRates] = useState([]);
  const [trackedRates, setTrackedRates] = useState(false);
  const [loading, setLoading] = useState(true);
  const [reloadTrigger, setReloadTrigger] = useState(false);
  const [input, setInput] = useState('');
  const [updatedTime, setUpdatedTime] = useState(false);

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
      // const data = testData;
      const parsedRates = parseRates(data);
      setRates(parsedRates);
      setUpdatedTime(new Date());
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
   * Checks to see if value is numeric before updating Input field
   */
  const handleInput = (value) => {
    const numberRegex = /^([0-9]+\.?[0-9]*|\.[0-9]+)$/;
    if (value === '' || numberRegex.test(value)) {
      setInput(value);
    }
  };

  const untrackRate = (code) => {
    const newTrackedRates = trackedRates.filter(
      (trackedCode) => trackedCode !== code
    );
    setTrackedRates(newTrackedRates);
  };

  const trackRate = (code) => {
    const newTrackedRates = [...trackedRates, code];
    setTrackedRates(newTrackedRates);
  };

  /*
   * Loads initial Rates after first render, sets interval for data refetch. Can be reset manually by triggering the reloadTrigger state.
   */
  useEffect(() => {
    fetchRates();
    const updater = setInterval(fetchRates, 60000);
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
            type="text"
            className="input__field wrapper"
            placeholder="Input amount"
            value={input}
            onChange={(e) => handleInput(e.target.value)}
          />
          <span className="input__indicator">BTC</span>
        </div>
        <Details
          loading={loading}
          reload={reload}
          rates={rates}
          trackedRates={trackedRates}
          updatedTime={updatedTime}
        />
      </div>
      <div className="calculator__center">
        <FaEquals />
      </div>
      <div className="calculator__right">
        <Results
          input={input}
          rates={rates}
          trackedRates={trackedRates}
          untrackRate={untrackRate}
          trackRate={trackRate}
        />
      </div>
    </main>
  );
};

export default Calculator;
