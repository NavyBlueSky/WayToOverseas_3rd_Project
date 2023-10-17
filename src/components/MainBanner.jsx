import React from 'react';
import styled from 'styled-components';

const MBdiv = styled.div`
    width: 80vw;
    height: 400px;
    border-radius: 10px;
    border: solid 1px black;
    /* align-items: center; */
    /* justify-content: center; */
    background-color: aliceblue;
    margin: 10px;
`;

export default function MainBanner() {
    return (
        <>
            <MBdiv>메인 배너 입니다 섹션 배경 넣고 볼더 지우기</MBdiv>
        </>
    );
}
