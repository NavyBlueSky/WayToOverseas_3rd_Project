import React from 'react';
import styled from 'styled-components';

const Exdiv = styled.div`
    width: 80vw;
    height: 200px;
    border-radius: 10px;
    border: solid 1px black;
    background-color: aliceblue;
    margin: 10px;
`;

export default function ExchangeBanner() {
    return (
        <>
            <Exdiv>
                <h1>환율 계산기 입니다</h1>
                <div>환율 배너 - 설명</div>
            </Exdiv>
        </>
    );
}
