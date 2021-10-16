import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const Dropdown = ({ rates, trackedRates, trackRate }) => {
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
  );
};

export default Dropdown;
