import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyComponent = () => {
  const { currency, dispatch } = useContext(AppContext);

  const handleCurrencyChange = (newCurrency) => {
    dispatch({ type: 'CHG_CURRENCY', payload: newCurrency });
  };

  return (
    <div>
      
      <select
        value={currency}
        onChange={(e) => handleCurrencyChange(e.target.value)}
      >
        <option value="$">US Dollar ($)</option>
        <option value="£">Pound Sterling (£)</option>
        <option value="€">Euro (€)</option>
        <option value="₹">Indian Rupee (₹)</option>
        {/* Add more currency options as needed */}
      </select>
    </div>
  );
};

export default CurrencyComponent;
