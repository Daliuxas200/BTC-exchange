import React from 'react';
import Loader from './Loader';
import { HiRefresh } from 'react-icons/hi';
import { formatNumber } from '../helperFunctions';

const Details = ({ loading, rates, reload, trackedRates }) => {
  const filteredRates = rates.filter(
    (rate) => trackedRates && trackedRates.includes(rate.code)
  );

  const detailsList = filteredRates.map((rate) => (
    <p key={rate.code} className="details__pair">
      <span>{rate.code}</span>
      <span>{formatNumber(rate.rate_float, rate.code)}</span>
    </p>
  ));

  return (
    <div className="details wrapper">
      <h3 className="details__title">BTC Exchange Rates</h3>
      <h4 className="details__subtitle">
        <span> Last updated 21:41 </span>
        <HiRefresh onClick={reload} />
      </h4>
      {loading ? <Loader /> : detailsList}
    </div>
  );
};

export default Details;
