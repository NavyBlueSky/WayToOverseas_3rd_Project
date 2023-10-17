import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function ExchangeMain() {
    const [currencyData, setCurrencyData] = useState(null);
    const [fromCurrency, setFromCurrency] = useState('usd');
    const [toCurrency, setToCurrency] = useState('krw');
    const [isAmount, setAmount] = useState(0);

    useEffect(() => {
        axios
            .get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromCurrency}/${toCurrency}.min.json`)
            .then((response) => {
                setCurrencyData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [isAmount]);

    function handleFromCurrencyChange(event) {
        setFromCurrency(event.target.value);
    }

    function handleToCurrencyChange(event) {
        setToCurrency(event.target.value);
    }

    function handleAmountChange(event) {
        setAmount(event.target.value);
    }

    function convertCurrency() {
        if (!currencyData) return;

        return isAmount * currencyData[toCurrency];
    }

    return (
        <>
            <div>
                <div>
                    <div>
                        <select
                            id="from-currency"
                            value={fromCurrency}
                            onChange={handleFromCurrencyChange}
                            className="border border-gray-400 rounded-md p-2 w-full"
                        >
                            <option value="usd">USD</option>
                            <option value="eur">EUR</option>
                            <option value="gbp">GBP</option>
                            <option value="krw">KRW</option>
                            <option value="jpy">JPY</option>
                        </select>
                        <label htmlFor="from-currency">를</label>
                    </div>
                    <div>
                        <select id="to-currency" value={toCurrency} onChange={handleToCurrencyChange}>
                            <option value="usd">USD</option>
                            <option value="eur">EUR</option>
                            <option value="gbp">GBP</option>
                            <option value="krw">KRW</option>
                            <option value="jpy">JPY</option>
                        </select>
                        <label htmlFor="to-currency">로</label>
                    </div>
                </div>

                <div>
                    <div>
                        <label htmlFor="amount">계산할 금액:</label>
                        <input id="amount" type="number" min="0" value={isAmount} onChange={handleAmountChange} />
                    </div>
                    {isAmount} {fromCurrency} 은/는<p> 결과 금액 : {convertCurrency()} </p>
                    결과 단위: {toCurrency}
                    <p>환율 정보 기준일 : {currencyData?.date}</p>
                </div>
            </div>
        </>
    );
}
