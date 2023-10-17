import React from 'react';
import styled from 'styled-components';

const MBdiv = styled.div`
    width: 80vw;
    height: 400px;
    border-radius: 10px;
    border: solid 1px black;
    background-color: aliceblue;
    margin: 10px;
`;

export default function Banner1() {
    return (
        <>
            <MBdiv>
                배너1 입니다
                <div>배너2 - 환율 계산기 바로 가기</div>
            </MBdiv>
        </>
    );
}
