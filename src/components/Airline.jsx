import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

let week = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
let signal = [];

const GreenLight = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: green;
`;

const RedLight = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: red;
`;

const Resultdiv = styled.div`
    background-color: aliceblue;
    width: 80vw;
    height: auto;
    border-radius: 10px;
    /* border: solid 1px black; */
    margin: 10px;
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
            <div className="datalist">
                {sampledatas.map((sampledata) => (
                    <Resultdiv className="datali" key={uuidv4()}>
                        공항이름:{sampledata.airport}
                        <br />
                        정기운항시작일:{sampledata.firstdate}
                        <br />
                        정기운항종료일:{sampledata.lastdate}
                        <br />
                        항공사명:{sampledata.airline}
                        <br />
                        연도:{sampledata.season}
                        <br />
                        편명:{sampledata.flightid}
                        <br />
                        요일별 취항여부: {sampledata.sunday}/{sampledata.monday}/{sampledata.tuesday}/{sampledata.wednesday}/{sampledata.thursday}/
                        {sampledata.friday}/{sampledata.saturday}
                        <br />일{sampledata.sunday === 'Y' ? <GreenLight /> : <RedLight />}
                        <br />
                    </Resultdiv>
                ))}
            </div>
        );
    }

    return <>{Airport_Name && <Datasample sampledatas={sampledatas} />}</>;
}
