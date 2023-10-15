import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Airline() {
    const SERVICE_KEY = process.env.REACT_APP_API_KEY;
    // console.log(SERVICE_KEY);
    const [sampledatas, setSampledatas] = useState([]);
    useEffect(() => {
        async function loadData() {
            try {
                const res = await axios.get(
                    // `https://api.odcloud.kr/api/FlightStatusListDTL/v1/getFlightStatusListDetail?page=17&perPage=2000&returnType=JSON&serviceKey=${SERVICE_KEY}`
                    `https://apis.data.go.kr/B551177/StatusOfPaxFltSched/getPaxFltSchedDeparturesDeOdp?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=100&type=json&airport=FUK&lang=K`
                );
                setSampledatas(res.data.response.body.items);
                console.log(res.data.response.body.items);
            } catch (error) {
                console.error(error);
            }
        }
        loadData();
    }, []);

    function Datasample({ sampledatas }) {
        return (
            <ul>
                {sampledatas.map((sampledata) => (
                    <li key={uuidv4()}>
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
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <>
            <div>
                <h1>인천공항 여객기 정기운항편 현황 조회 -</h1>
            </div>
            <div> 배너입니다.</div>
            <div>인천공항에서 출발하는 </div>
            <div>조건문--- 현재 조회되는 정보는 3월말~10월초의 운행현황입니다.</div>
            <div>상세한 운행편 조회 검색은 지원되지 않습니다.</div>

            <select name="" id="">
                공항 선택
                <option value="HND">하네다공항</option>
                <option value="KIX">간사이공항</option>
                <option value="FUK">후쿠오카공항</option>
            </select>
            <button>검색</button>

            <Datasample sampledatas={sampledatas} />
            <ul>
                정보 목록
                <li>요일별 취항여부</li>
                <li>항공사명</li>
                <li>도착 공항이름</li>
                <li>도착 공항코드</li>
                <li>정기운항시작일</li>
                <li>편명</li>
                <li>정기운항종료일</li>
                <li>시즌명-연도</li>
                <li>정기운항 시작시간</li>
            </ul>
        </>
    );
}
