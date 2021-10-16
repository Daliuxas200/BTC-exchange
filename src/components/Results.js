import React from 'react';
import ResultsList from './ResultsList';
import Dropdown from './Dropdown';

const Results = ({ input, rates, trackedRates, untrackRate, trackRate }) => {
  return (
    <>
      <ResultsList
        trackedRates={trackedRates}
        untrackRate={untrackRate}
        rates={rates}
        input={input}
      />
      {trackedRates.length < rates.length && (
        <Dropdown
          trackedRates={trackedRates}
          trackRate={trackRate}
          rates={rates}
        />
      )}
    </>
  );
};

export default Results;
