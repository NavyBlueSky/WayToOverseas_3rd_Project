import React, { useState } from 'react';
import Airline from '../components/Airline';

export default function AirlineSearch() {
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
            setAirportOptions(['공항 선택', '도쿄 하네다 공항', '오사카 간사이 공항', '후쿠오카 공항', '홍콩 국제 공항']);
        } else if (selectedValue === 'EU') {
            setAirportOptions(['공항 선택', '영국', '프랑스', '스페인']);
        } else if (selectedValue === 'AM') {
            setAirportOptions(['공항 선택', '미국', '캐나다', '아르헨티나']);
        } else if (selectedValue === 'OC') {
            setAirportOptions(['공항 선택', '호주', '뉴질랜드']);
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
        }
        // 선택한 공항 값 호출
    };

    console.log('Selected Airport:', airportValue, airportCode);
    return (
        <div>
            <h1>결합 테스트</h1>
            <select id="continentSelect" value={continentValue} onChange={handleContinentChange}>
                <option>대륙 선택</option>
                <option value="AS">아시아</option>
                <option value="EU">유럽</option>
                <option value="AM">아메리카</option>
                <option value="OC">오세아니아</option>
            </select>
            <select id="airportSelect" value={airportValue} onChange={handleAirportChange}>
                {airportOptions.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <button onClick={handleSearchClick}>Search</button>

            <div>
                <Airline airportCodeT={airportCode} />
            </div>
        </div>
    );
}
