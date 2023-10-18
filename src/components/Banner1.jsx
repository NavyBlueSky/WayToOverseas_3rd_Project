import React from 'react';
import styled from 'styled-components';

const MBdiv = styled.div`
    width: 80vw;
    height: 400px;
    border-radius: 10px;
    /* border: solid 1px black; */
    /* background-color: aliceblue; */
    background-image: url(/img/Airline2.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin: 10px;
`;

export default function Banner1() {
    return (
        <>
            <MBdiv>
                배너1 입니다
                <div>배너1 - 항공권 검색 바로 가기</div>
            </MBdiv>
        </>
    );
}
