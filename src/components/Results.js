import React, { useState } from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';
import { formatNumber } from '../helperFunctions';

const Results = ({ input, rates, trackedRates, untrackRate, trackRate }) => {
  const [dropdownToggle, setDropdownToggle] = useState(false);
  const handleBlur = (e) => {
    if (
      e.nativeEvent.explicitOriginalTarget &&
      e.nativeEvent.explicitOriginalTarget === e.nativeEvent.originalTarget
    ) {
      return;
    }

    if (dropdownToggle) {
      setTimeout(() => {
        setDropdownToggle(false);
      }, 200);
    }
  };

  const trackedList =
    trackedRates &&
    trackedRates.map((code) => {
      const rate = rates.find((r) => r.code === code);
      return (
        <li key={rate.code} className="wrapper results__item">
          <span className="results__item__value">
            {formatNumber(input * rate.rate_float, rate.code)}
          </span>
          <span className="results__item__currency">{rate.code}</span>
          <FaTimes
            className="results__item__remove"
            onClick={() => {
              untrackRate(rate.code);
              setDropdownToggle(false);
            }}
          />
        </li>
      );
    });

  const untrackedList = rates
    .filter(
      (rate) => trackedRates !== false && !trackedRates.includes(rate.code)
    )
    .map((rate) => {
      return (
        <li
          className="dropdown__list__item"
          key={rate.code}
          onClick={() => {
            trackRate(rate.code);
            setDropdownToggle(false);
          }}
        >
          {rate.code}
        </li>
      );
    });

  return (
    <>
      <ul className="results">{trackedList}</ul>
      {!!untrackedList.length && (
        <div className="dropdown">
          <button
            className="wrapper dropdown__button"
            onClick={() => setDropdownToggle(true)}
            onBlur={(e) => handleBlur(e)}
          >
            <FaPlus />
          </button>
          <ul className={`dropdown__list ${dropdownToggle ? 'active' : ''}`}>
            {untrackedList}
          </ul>
        </div>
      )}
    </>
  );
};

export default Results;
