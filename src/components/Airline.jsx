import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Airline(props) {
    const SERVICE_KEY = process.env.REACT_APP_API_KEY;
    const Airport_Name = props.airportCodeT;
    // console.log(SERVICE_KEY);
    console.log('받은 코드', Airport_Name);
    const [sampledatas, setSampledatas] = useState([]);

    useEffect(() => {
        console.log('유즈', Airport_Name);
        async function loadData() {
            try {
                const res = await axios.get(
                    // `https://api.odcloud.kr/api/FlightStatusListDTL/v1/getFlightStatusListDetail?page=17&perPage=2000&returnType=JSON&serviceKey=${SERVICE_KEY}`
                    `https://apis.data.go.kr/B551177/StatusOfPaxFltSched/getPaxFltSchedDeparturesDeOdp?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=50&type=json&airport=${Airport_Name}&lang=K`
                );
                //console.log(res.data.response.body.items);
                setSampledatas(res.data.response.body.items);
                console.log(res.data.response.body);
            } catch (error) {
                console.error(error);
            }
        }
        loadData();
    }, [Airport_Name]);

    function Datasample({ sampledatas }) {
        return (
            <div className="datalist">
                {sampledatas.map((sampledata) => (
                    <div className="datali" key={uuidv4()}>
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
                        요일별 취항여부: {sampledata.sunday}
                        <br />
                        <br />
                    </div>
                ))}
            </div>
        );
    }

    return <>{Airport_Name && <Datasample sampledatas={sampledatas} />}</>;
}
