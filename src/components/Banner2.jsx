import React from 'react';
import styled from 'styled-components';

const MBdiv = styled.div`
    margin: 30px;
    width: 80vw;
    height: 400px;
    border-radius: 10px;
    background-color: aliceblue;
`;

const MBimg = styled.div`
    /* border: solid 1px black; */
    /* align-items: center; */
    /* justify-content: center; */
    /* background-color: aliceblue; */
    width: 60%;
    height: 400px;
    border-radius: 10px 0 0 10px;
    background-image: url(/img/Exchange2.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    opacity: 1;
`;

const MBtext = styled.div`
    width: 40%;
    background-color: aliceblue;
    border-radius: 10px;
`;

export default function Banner1() {
    return (
        <>
            <MBdiv>
                <MBimg></MBimg>
                <MBtext></MBtext>
            </MBdiv>
        </>
    );
}
