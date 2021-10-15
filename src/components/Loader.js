import React from 'react';
import { HiRefresh } from 'react-icons/hi';

const Loader = () => {
  return (
    <div className="loader">
      <HiRefresh className="loader__icon" />
    </div>
  );
};

export default Loader;
