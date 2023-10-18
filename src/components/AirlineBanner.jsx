import React from 'react';
import styled from 'styled-components';

const AirMdiv = styled.div`
    width: 100%;
    height: auto;
    /* border-radius: 10px; */
    /* border: solid 1px black; */
    /* background-color: aliceblue; */
    /* margin: 10px; */
    background-image: url(/img/Airline.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

export default function AirlineBanner() {
    return (
        <>
            <AirMdiv>
                <h1>항공편 검색 배너</h1>
                <div>
                    <h1>인천공항 여객기 정기운항편 현황 조회 -</h1>
                </div>
                <div>인천공항에서 출발 후 도착하는 공항의 취항 여부와 편명을 제공합니다. </div>
                <div>현재 조회되는 정보는 2023년 3월26일부터 2023년 10월 28일까지의 운행현황이며 6개월 씩 연 2회 업데이트 됩니다.</div>
                <div>상세한 운행편 조회 검색은 지원되지 않습니다.</div>
            </AirMdiv>
        </>
    );
}
