import React from 'react';
import styled from 'styled-components';

const AirMdiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 270px;
    /* border-radius: 10px; */
    /* border: solid 1px black; */
    /* background-color: aliceblue; */
    /* margin: 10px; */
    background-image: url(/img/Airline.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

const AirLogo = styled.div`
    width: 220px;
    height: 150px;
    background-image: url(/img/AirlineLogo.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    opacity: 1;
    margin: 10px;
`;

export default function AirlineBanner() {
    return (
        <>
            <AirMdiv>
                <AirLogo />
            </AirMdiv>
        </>
    );
}
