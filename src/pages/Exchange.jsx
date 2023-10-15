import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function Exchange() {
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
                <h1>환율 검색 페이지입니다.</h1>
            </div>
            <div>환율 검색 배너</div>
            <div className="p-4 bg-gray-100">
                <h1 className="text-lg font-semibold mb-4">환율 계산기</h1>
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1 max-w-xs">
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
                    <div className="flex-1 max-w-xs">
                        <select
                            id="to-currency"
                            value={toCurrency}
                            onChange={handleToCurrencyChange}
                            className="border border-gray-400 rounded-md p-2 w-full"
                        >
                            <option value="usd">USD</option>
                            <option value="eur">EUR</option>
                            <option value="gbp">GBP</option>
                            <option value="krw">KRW</option>
                            <option value="jpy">JPY</option>
                        </select>
                        <label htmlFor="to-currency">로</label>
                    </div>
                </div>

                <div className="mt-4">
                    <div className="max-w-sm">
                        <label htmlFor="amount">계산할 금액:</label>
                        <input
                            id="amount"
                            type="number"
                            min="0"
                            value={isAmount}
                            onChange={handleAmountChange}
                            className="border border-gray-400 rounded-md p-2 w-full"
                        />
                    </div>
                    {isAmount} {fromCurrency} 은/는<p> 결과 금액 : {convertCurrency()} </p>
                    결과 단위: {toCurrency}
                    <p>환율 정보 기준일 : {currencyData?.date}</p>
                </div>
            </div>
        </>
    );
}
