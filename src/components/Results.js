import React from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';
import { formatNumber } from '../helperFunctions';

const Results = ({ input, rates, trackedRates, untrackRate }) => {
  const resultsList = rates
    .filter((rate) => trackedRates && trackedRates.includes(rate.code))
    .map((rate) => {
      return (
        <li key={rate.code} className="wrapper results__item">
          <span>{formatNumber(input * rate.rate_float, rate.code)}</span>
          <span>{rate.code}</span>
          <FaTimes
            className="results__item__remove"
            onClick={() => untrackRate(rate.code)}
          />
        </li>
      );
    });

  return (
    <>
      <ul className="results">{resultsList}</ul>
      <div className="dropdown">
        <button className="wrapper dropdown__button">
          <FaPlus />
        </button>
        {/* <ul className="dropdown__list">
          <li className="dropdown__list__item">USD</li>
          <li className="dropdown__list__item">EUR</li>
        </ul> */}
      </div>
    </>
  );
};

export default Results;
