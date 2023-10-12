import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <Link to="/">
                <h2>메인 로고</h2>
            </Link>
            <nav>
                <ul>
                    <li style={{ margin: '4px' }}>
                        <Link to="/airline">항공편 검색</Link>
                    </li>
                    <li style={{ margin: '4px' }}>
                        <Link to="/exchange">환율 계산기</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
