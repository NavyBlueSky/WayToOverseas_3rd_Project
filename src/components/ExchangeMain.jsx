import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ExchangeSection = styled.div`
    flex-direction: column;
    width: 50vw;
    height: 400px;
    border-radius: 10px;
    background-color: aliceblue;
    margin: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Exdiv = styled.div`
    /* flex-direction: row; */
    /* justify-content: center; */
    /* align-items: center; */
`;

const FromEx = styled.div`
    margin: 10px;
`;

const ToEx = styled.div`
    margin: 10px;
`;

const ResultEx = styled.div``;

const SelectDiv = styled.div``;

const SelectEx = styled.select``;

export default function ExchangeMain() {
    const [currencyData, setCurrencyData] = useState(null);
    const [fromCurrency, setFromCurrency] = useState('usd');
    const [fromCurrencyName, setFromCurrencyName] = useState('달러(USD)');
    const [toCurrency, setToCurrency] = useState('krw');
    const [toCurrencyName, setToCurrencyName] = useState('원(KRW)');
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
        setFromCurrencyName(event.target.id);
        console.log(fromCurrencyName);
    }

    function handleToCurrencyChange(event) {
        setToCurrency(event.target.value);
        setToCurrencyName(event.target.id);
        console.log(toCurrencyName);
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
            <ExchangeSection>
                <div>
                    <h1>환율 계산기</h1>
                </div>
                <Exdiv>
                    <FromEx>
                        <SelectEx id="from-currency" value={fromCurrency} onChange={handleFromCurrencyChange}>
                            <option id="달러(USD)" value="usd">
                                달러(USD)
                            </option>
                            <option value="eur">EUR</option>
                            <option value="gbp">GBP</option>
                            <option id="원(KRW)" value="krw">
                                원(KRW)
                            </option>
                            <option value="jpy">JPY</option>
                        </SelectEx>
                        <label htmlFor="from-currency">를</label>
                    </FromEx>
                    <ToEx>
                        <SelectEx id="to-currency" value={toCurrency} onChange={handleToCurrencyChange}>
                            <option value="usd">달러(USD)</option>
                            <option value="eur">EUR</option>
                            <option value="gbp">GBP</option>
                            <option value="krw">원(KRW)</option>
                            <option value="jpy">JPY</option>
                        </SelectEx>
                        <label htmlFor="to-currency">로</label>
                    </ToEx>
                </Exdiv>
                <ResultEx>
                    <label htmlFor="amount">계산할 금액:</label>
                    <input id="amount" type="number" min="0" value={isAmount} onChange={handleAmountChange} />
                </ResultEx>

                <ResultEx>
                    {' '}
                    {isAmount} {fromCurrency} 은/는<p> 결과 금액 : {convertCurrency()} </p>
                    결과 단위: {toCurrency}
                    <p>환율 정보 기준일 : {currencyData?.date}</p>
                </ResultEx>
            </ExchangeSection>
        </>
    );
}
