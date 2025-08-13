import React from "react";
import { useState } from "react";

function CurrencyConvertor(){
    const exchangerate = 0.011;

    const [inr, setinr] = useState('');

    const handleinrChange = (event) => {
        setinr(event.target.value);
    };

    const usd = inr ? (inr * exchangerate).toFixed(2) : '';

    return (
        <div>
            <h2>Currency Converter</h2>
            <div>
                <label>INR:</label>
                <input type="number" value={inr} onChange={handleinrChange} />
            </div>
            <div>
                <h3>USD: {usd}</h3>
            </div>
        </div>
    );
}

export default CurrencyConvertor;
