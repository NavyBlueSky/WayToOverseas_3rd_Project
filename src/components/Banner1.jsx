import React from 'react';
import styled from 'styled-components';
import one from '../img/1.png';
import two from '../img/2.jpg';
import three from '../img/3.png';
import four from '../img/4.png';
import five from '../img/5.jpg';
import six from '../img/6.jpg';
import seven from '../img/7.png';
import eight from '../img/8.jpg';

const MainSection = styled.div`
    margin: 5px 30px;
    width: 80vw;
    height: 400px;
    display: flex;
    /* flex-wrap: wrap; */
    justify-content: center;
`;

const SubSection = styled.div`
    width: calc(33.33% - 20px);
    /* padding: 20px; */
    margin: 9px;
    border-radius: 10px;
    /* border: 1px solid black; */
    background-color: aliceblue;
    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }

    @media (max-width: 768px) {
        width: 30%;
    }
`;

const Imgdiv = styled.img`
    border-radius: 10px 10px 0 0;
    width: 100%;
    height: 70%;
    /* background-repeat: no-repeat; */
    /* background-size: cover; */
`;

const TextDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Linkbutton = styled.a`
    /* display: inline-block; */
    width: 100px;
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

export default function Banner1() {
    return (
        <>
            <MainSection>
                <SubSection>
                    <Imgdiv src={one} />
                    <TextDiv>
                        <Linkbutton href="https://www.airport.kr/ap/ko/shp/getDutyInfoMain.do">면세점</Linkbutton>
                    </TextDiv>
                </SubSection>
                <SubSection>
                    <Imgdiv src={two} />
                    <TextDiv>
                        <Linkbutton href="https://www.airport.kr/ap/ko/shp/getShopInfoMain.do">일반 쇼핑</Linkbutton>
                    </TextDiv>
                </SubSection>
                <SubSection>
                    <Imgdiv src={three} />
                    <TextDiv>
                        <Linkbutton href="https://www.airport.kr/ap/ko/shp/getFoodInfoMain.do">식당</Linkbutton>
                    </TextDiv>
                </SubSection>
                <SubSection>
                    <Imgdiv src={four} />
                    <TextDiv>
                        <Linkbutton href="https://www.airport.kr/ap/ko/svc/getFacilityMain.do">안내·편의시설</Linkbutton>
                    </TextDiv>
                </SubSection>
            </MainSection>
            <MainSection>
                <SubSection>
                    <Imgdiv src={five} />
                    <TextDiv>
                        <Linkbutton href="https://www.airport.kr/ap/ko/svc/attractionMain.do">전시·공연</Linkbutton>
                    </TextDiv>
                </SubSection>
                <SubSection>
                    <Imgdiv src={six} />
                    <TextDiv>
                        <Linkbutton href="https://www.airport.kr/co_cnt/ko/cyberpr/gallery/ciprvi/ciprvi.do">갤러리</Linkbutton>
                    </TextDiv>
                </SubSection>
                <SubSection>
                    <Imgdiv src={seven} />
                    <TextDiv>
                        <Linkbutton href="https://www.airport.kr/co_cnt/ko/cyberpr/publicat/prbroc/prbroc.do">간행물</Linkbutton>
                    </TextDiv>
                </SubSection>
                <SubSection>
                    <Imgdiv src={eight} />
                    <TextDiv>
                        <Linkbutton href="https://www.airport.kr/co_cnt/ko/cyberpr/tour/appgui/appgui.do">견학/관람</Linkbutton>
                    </TextDiv>
                </SubSection>
            </MainSection>
        </>
    );
}
