import React, { useState } from 'react';
import Airline from '../components/Airline';
import styled from 'styled-components';

const SelectAirline = styled.select`
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
    margin: 5px;
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

const SearchButton = styled.button`
    display: inline-block;
    padding: 10px 20px;
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid #3954a3;
    transition: background-color 0.3s, color 0.3s;
    background-color: white;
    color: #3954a3;
    border-color: #3954a3;
    :hover {
        background-color: #3954a3;
        color: #fff;
    }
`;

export default function AirlineSelect() {
    const [continentValue, setContinentValue] = useState('');
    const [airportValue, setAirportValue] = useState('');
    const [airportOptions, setAirportOptions] = useState([]);
    const [airportCode, setAirportCode] = useState('');

    // 대륙 선택이 변경될 때 호출되는 함수
    const handleContinentChange = (event) => {
        const selectedValue = event.target.value;
        setContinentValue(selectedValue);

        // 선택한 대륙에 따라 공항 옵션을 업데이트
        if (selectedValue === 'AS') {
            setAirportOptions(['공항 선택', '도쿄 하네다 공항', '오사카 간사이 공항', '후쿠오카 공항', '홍콩 국제 공항', '상하이 푸둥 국제 공항']);
        } else if (selectedValue === 'EU') {
            setAirportOptions(['공항 선택', '뮌헨 국제 공항', '취리히 국제 공항', '파리 샤를 드골 국제 공항', '마드리드 바라하스 국제 공항']);
        } else if (selectedValue === 'AM') {
            setAirportOptions([
                '공항 선택',
                '로스앤젤레스 국제공항',
                '뉴욕 스튜어트 국제공항',
                '마이애미 국제공항',
                '밴쿠버 국제공항',
                '리우데자네이루 갈레앙 국제공항',
            ]);
        } else if (selectedValue === 'OC') {
            setAirportOptions(['공항 선택', '시드니 국제공항', '오클랜드 국제공항']);
        }
    };

    // 공항 선택이 변경될 때 호출되는 함수
    const handleAirportChange = (event) => {
        const selectedValue = event.target.value;
        setAirportValue(selectedValue);
    };

    // 검색 버튼 클릭 시 호출되는 함수
    const handleSearchClick = () => {
        if (airportValue === '도쿄 하네다 공항') {
            setAirportCode('HND');
        } else if (airportValue === '후쿠오카 공항') {
            setAirportCode('FUK');
        } else if (airportValue === '오사카 간사이 공항') {
            setAirportCode('KIX');
        } else if (airportValue === '홍콩 국제 공항') {
            setAirportCode('HKG');
        } else if (airportValue === '상하이 푸둥 국제 공항') {
            setAirportCode('PVG');
        } else if (airportValue === '뮌헨 국제 공항') {
            setAirportCode('MUC');
        } else if (airportValue === '취리히 국제 공항') {
            setAirportCode('ZRH');
        } else if (airportValue === '파리 샤를 드골 국제 공항') {
            setAirportCode('CDG');
        } else if (airportValue === '마드리드 바라하스 국제 공항') {
            setAirportCode('MAD');
        } else if (airportValue === '로스앤젤레스 국제공항') {
            setAirportCode('LAX');
        } else if (airportValue === '뉴욕 스튜어트 국제공항') {
            setAirportCode('SWF');
        } else if (airportValue === '마이애미 국제공항') {
            setAirportCode('MIA');
        } else if (airportValue === '밴쿠버 국제공항') {
            setAirportCode('YVR');
        } else if (airportValue === '리우데자네이루 갈레앙 국제공항') {
            setAirportCode('GIG');
        } else if (airportValue === '시드니 국제공항') {
            setAirportCode('SYD');
        } else if (airportValue === '오클랜드 국제공항') {
            setAirportCode('AKL');
        }
        // 선택한 공항 값 호출
    };

    console.log('Selected Airport:', airportValue, airportCode);
    return (
        <div>
            <SelectAirline id="continentSelect" value={continentValue} onChange={handleContinentChange}>
                <option>대륙 선택</option>
                <option value="AS">아시아</option>
                <option value="EU">유럽</option>
                <option value="AM">아메리카</option>
                <option value="OC">오세아니아</option>
            </SelectAirline>
            <SelectAirline id="airportSelect" value={airportValue} onChange={handleAirportChange}>
                {airportOptions.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </SelectAirline>
            <SearchButton onClick={handleSearchClick}>Search</SearchButton>

            <div>
                <Airline airportCodeT={airportCode} />
            </div>
        </div>
    );
}
