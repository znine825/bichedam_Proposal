import { motion } from 'motion/react';

import './Overview.css'
import '../Page.css'
import Header from '../../Components/Header/Header.jsx'
import Contents from '../../Components/Contents/Contents.jsx'
import Title from '../../Components/Title/Title.jsx'

function Overview() {
    return (
        <div>
            <Header page = '/Overview'/>
            <div className = 'body'>
                <aside>
                    <Title 
                        text1 = 'OVERIVEW · 02'
                        text2 = '제안'
                        text3 = '개요'
                    />
                </aside>
                <motion.div
                    className = 'line'
                    initial = {{ scaleY: 0 }}
                    animate = {{ scaleY: 1 }}
                    transition = {{ duration: 0.5, 
                                    delay: 0.8,
                                    ease: 'easeIn'}}></motion.div>
                <motion.div 
                    className = 'contentsBody'
                    initial = {{ opacity: 0, x: -20 }}
                    animate = {{ opacity: 1, x: 0 }}
                    transition = {{ duration: 0.5,
                                    delay: 0.5}}>
                    <Contents 
                        title = '문제인식'
                        count = '01'
                        text = '지금의 비체담 웹사이트는 다양한 버그와 비효율적인 디자인으로 정보전달과 사용자 경험이 저하되고 있습니다. 새로운 프레임워크와 디자인 변경으로 이 문제를 해결합니다.'/>
                </motion.div>  
            </div>
        </div>
    )
}

export default Overview