import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './Home.css'

function Home({size}) {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1000);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (isMobile) {
        return (
            <div className="mobileWarning">
                <p>PC로 접속해주세요</p>
                <p>이 페이지는 PC 환경에 최적화되어 있습니다.</p>
            </div>
        );
    }

    return (
        <motion.div style={{ transform: `scale(${size})`, transformOrigin: 'top center' }}>
            <div className='home'
                 initial={{ opacity: 0, y: -20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.7, delay: 1 }}>
                <div>
                    <p>비체담 웹사이트</p>
                    <p>리빌딩 제안서</p>
                </div>
                <p>더 나은 사용자 경험과 완성도 높은 서비스를 위해 비체담 웹사이트의 전면 리빌딩을 제안합니다.</p>
                <Link to="/Outline">
                    <div>
                        <p>제안서 보기</p>
                    </div>
                </Link>
                <p>2027.07.06 - 2027.07.10</p>
                <p>© 2026 DETAILED. ALL Rights Reserved.</p>
            </div>
            <div className='glow'></div>
        </motion.div>
    )
}

export default Home