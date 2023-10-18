import React from 'react';
import styled from 'styled-components';

const AirMdiv = styled.div`
    width: 100%;
    height: 300px;
    border-radius: 10px;
    /* border: solid 1px black; */
    background-color: aliceblue;
    /* margin: 10px; */
`;

export default function AirlineBanner() {
    return (
        <>
            <AirMdiv>
                <h1>항공편 검색 배너</h1>
                <div>설명</div>
                <div>
                    <h1>인천공항 여객기 정기운항편 현황 조회 -</h1>
                </div>
                <div>인천공항에서 출발하는 </div>
                <div>현재 조회되는 정보는 3월말~10월초의 운행현황입니다.</div>
                <div>상세한 운행편 조회 검색은 지원되지 않습니다.</div>
            </AirMdiv>
        </>
    );
}
