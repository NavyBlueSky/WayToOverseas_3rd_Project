import React from 'react';
import styled from 'styled-components';

const MBdiv = styled.div`
    margin: 30px;
    width: 80vw;
    height: 400px;
    border-radius: 10px;
    background-color: aliceblue;
    display: flex;
    flex-direction: row;
`;

const MBimg = styled.div`
    /* border: solid 1px black; */
    /* align-items: center; */
    /* justify-content: center; */
    /* background-color: aliceblue; */
    width: 60%;
    height: 400px;
    /* margin-left: 0; */
    border-radius: 10px 0 0 10px;
    background-image: url(/img/INC1.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    opacity: 1;
`;

const MBtext = styled.div`
    width: 40%;
    background-color: aliceblue;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const MBbutton = styled.a`
    /* display: inline-block; */
    width: 150px;
    margin: 30px;
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

const Textdiv = styled.div`
    padding: 8px;
`;

export default function MainBanner() {
    return (
        <>
            <MBdiv>
                <MBimg></MBimg>
                <MBtext>
                    <Textdiv>해외 여행을 생각하는 당신,</Textdiv>
                    <Textdiv>여러 항공편을 찾다가 인천 국제 공항에서 출발하지 않으면</Textdiv>
                    <Textdiv> 최소 하나의 경유지를 꼭 들르게 되는 일이 발생합니다.</Textdiv>
                    <Textdiv>맞습니다. 어차피 출발은 인천 국제 공항이 될 것 입니다!</Textdiv>
                    <Textdiv>그런 의미에서 그저 출국 장소만이 아닌 이 인천 국제 공항에서</Textdiv>
                    <Textdiv>다양한 서비스를 이용하고 출국 하는 건 어떠세요?</Textdiv>
                    <MBbutton href="https://www.airport.kr/ap/ko/index.do">인천 국제 공항</MBbutton>
                </MBtext>
            </MBdiv>
        </>
    );
}
