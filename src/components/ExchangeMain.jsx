import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ExchangeSection = styled.div`
    flex-direction: column;
    width: 50vw;
    height: 400px;
    border-radius: 10px;
    background-color: aliceblue;
    margin: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1000px) {
        width: 80%;
    }
`;

const ExLogo = styled.div`
    width: 170px;
    height: 115px;
    background-image: url(/img/ExchangeLogo.png);
    background-size: cover;
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

const ResultEx = styled.div`
    justify-content: center;
`;

const ResultCom = styled.div`
    margin: 10px;
    text-align: center;
`;

const SelectDiv = styled.div``;

const SelectEx = styled.select`
    width: 200px;
    border: 1px solid #3954a3;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 12px 13px;
    /* font-family: 'Roboto'; */
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    justify-content: space-between;
    margin: 10px;
    :focus {
        border: 1px solid #f1f1f1;
        box-sizing: border-box;
        border-radius: 10px;
        outline: 1.5px solid #3954a3;
        border-radius: 10px;
    }
    @media screen {
    }
`;

const InputM = styled.input`
    width: 200px;
    border: 1px solid #3954a3;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 12px 13px;
    /* font-family: 'Roboto'; */
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    justify-content: space-between;
    margin: 10px;
    :focus {
        border: 1px solid #f1f1f1;
        box-sizing: border-box;
        border-radius: 10px;
        outline: 1.5px solid #3954a3;
        border-radius: 10px;
    }
`;

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
                <ExLogo />
                <Exdiv>
                    <FromEx>
                        <SelectEx id="from-currency" value={fromCurrency} onChange={handleFromCurrencyChange}>
                            <option id="달러(USD)" value="usd">
                                달러(USD)
                            </option>
                            <option value="eur">유로(EUR)</option>
                            <option value="gbp">파운드(GBP)</option>
                            <option id="원(KRW)" value="krw">
                                원(KRW)
                            </option>
                            <option value="jpy">엔(JPY)</option>
                        </SelectEx>
                        <label htmlFor="from-currency">를</label>
                        <SelectEx id="to-currency" value={toCurrency} onChange={handleToCurrencyChange}>
                            <option value="usd">달러(USD)</option>
                            <option value="eur">유로(EUR)</option>
                            <option value="gbp">파운드(GBP)</option>
                            <option value="krw">원(KRW)</option>
                            <option value="jpy">엔(JPY)</option>
                        </SelectEx>
                        <label htmlFor="to-currency">로</label>
                    </FromEx>
                    <ToEx></ToEx>
                </Exdiv>
                <ResultEx>
                    <label htmlFor="amount">계산할 금액:</label>
                    <InputM id="amount" type="number" min="0" value={isAmount} onChange={handleAmountChange} />
                </ResultEx>

                <ResultEx>
                    {/*{isAmount} {fromCurrency} 은/는*/}
                    <ResultCom>
                        결과 금액(단위) : {convertCurrency()}({toCurrency})
                    </ResultCom>

                    <ResultCom>※본 서비스에서 제공되는 환율은 전일 기준입니다.</ResultCom>
                    <ResultCom>환율 정보 제공 - Fawaz Ahmed</ResultCom>
                </ResultEx>
            </ExchangeSection>
        </>
    );
}
