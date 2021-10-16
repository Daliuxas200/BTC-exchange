import React from 'react';
import { formatNumber } from '../helperFunctions';
import { FaTimes } from 'react-icons/fa';

const ResultsList = ({ trackedRates, untrackRate, rates, input }) => {
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
            }}
          />
        </li>
      );
    });

  return <ul className="results">{trackedList}</ul>;
};

export default ResultsList;
