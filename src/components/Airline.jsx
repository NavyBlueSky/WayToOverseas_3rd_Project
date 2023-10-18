import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

// let week = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

const PrintAir = styled.div`
    justify-content: center;
    align-items: center;
`;

const TopAirline = styled.div`
    width: 130px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* margin-left: 30px; */
`;

const TopLogo = styled.div`
    margin: 3px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: grey;
`;

const TopLogoK = styled.div`
    margin: 3px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-image: url(/img/KoreanAir.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

const TopName = styled.div`
    margin: 3px;
`;

const MiddleMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const MiddleText = styled.div`
    padding: 7px;
`;

const WeekDivMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const WeekName = styled.div`
    padding: 7px;
`;

const GreenLight = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: green;
`;

const RedLight = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: red;
`;

const Resultdiv = styled.div`
    background-color: #b3cde4;
    width: 90vw;
    height: 150px;
    border-radius: 10px;
    /* border: solid 1px black; */
    margin: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    @media screen and (min-width: 1100px) {
        width: 750px;
    }
`;

const WeekDiv = styled.div`
    display: flex;
    flex-direction: row;
    div {
        margin: 3px;
    }
`;

export default function Airline(props) {
    const SERVICE_KEY = process.env.REACT_APP_API_KEY;
    const Airport_Name = props.airportCodeT;
    // console.log(SERVICE_KEY);
    console.log('받은 코드', Airport_Name);
    const [sampledatas, setSampledatas] = useState([]);
    // const weekDay = ['Sunnday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const [dayC, setDayC] = useState([]);

    useEffect(() => {
        console.log('유즈', Airport_Name);
        async function loadData() {
            try {
                const res = await axios.get(
                    // `https://api.odcloud.kr/api/FlightStatusListDTL/v1/getFlightStatusListDetail?page=17&perPage=2000&returnType=JSON&serviceKey=${SERVICE_KEY}`
                    `https://apis.data.go.kr/B551177/StatusOfPaxFltSched/getPaxFltSchedDeparturesDeOdp?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=50&type=json&airport=${Airport_Name}&lang=K`
                );
                // console.log(res.data.response.body.items);
                setSampledatas(res.data.response.body.items);
                // console.log(res.data.response.body);
            } catch (error) {
                console.error(error);
            }
        }
        loadData();
    }, [Airport_Name]);

    function Datasample({ sampledatas }) {
        // console.log(sampledatas[0].sunday, sampledatas.length);
        // let count = sampledatas.length;
        // console.log(week[0]);
        // for (let i = 0; i < count; i++) {
        //     for (let j = 0; j < 7; j++) {
        //         console.log('1', week[j]);
        //         if (sampledatas.i.week[j] === 'Y') {
        //             signal[j] = 'YES';
        //             console.log('2', signal[j]);
        //         } else {
        //             signal[j] = 'NO';
        //         }
        //     }
        // }
        return (
            <PrintAir className="datalist">
                {sampledatas.map((sampledata) => (
                    <Resultdiv className="datali" key={uuidv4()}>
                        <TopAirline>
                            {sampledata.airline === '대한항공' ? <TopLogoK /> : <TopLogo />}
                            <TopName>{sampledata.airline}</TopName>
                        </TopAirline>
                        <MiddleMain>
                            <MiddleText>도착지 : {sampledata.airport}</MiddleText>
                            {/* 항공사명 */}
                            <MiddleText> 편명 : {sampledata.flightid}</MiddleText>
                        </MiddleMain>
                        <WeekDivMain>
                            <WeekName>요일별 취항 여부▼</WeekName>
                            <WeekDiv>
                                <div>일{sampledata.sunday === 'Y' ? <GreenLight /> : <RedLight />}</div>
                                <div>월{sampledata.monday === 'Y' ? <GreenLight /> : <RedLight />}</div>
                                <div>화{sampledata.tuesday === 'Y' ? <GreenLight /> : <RedLight />}</div>
                                <div>수{sampledata.wednesday === 'Y' ? <GreenLight /> : <RedLight />}</div>
                                <div>목{sampledata.thursday === 'Y' ? <GreenLight /> : <RedLight />}</div>
                                <div>금{sampledata.friday === 'Y' ? <GreenLight /> : <RedLight />}</div>
                                <div>토{sampledata.saturday === 'Y' ? <GreenLight /> : <RedLight />}</div>
                            </WeekDiv>
                        </WeekDivMain>
                    </Resultdiv>
                ))}
            </PrintAir>
        );
    }

    return <>{Airport_Name && <Datasample sampledatas={sampledatas} />}</>;
}
