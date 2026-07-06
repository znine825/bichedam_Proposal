import { motion } from 'motion/react';

import './Outline.css'
import '../Page.css'
import Header from '../../Components/Header/Header.jsx'
import Contents from '../../Components/Contents/Contents.jsx'
import Title from '../../Components/Title/Title.jsx'

function Outline() {
    return (
        <div>
            <Header page = '/'/>
            <div className = 'body'>
                <aside>
                    <Title 
                        text1 = 'OUTLINE · 01'
                        text2 = '제안'
                        text3 = '목차'
                    />
                </aside>
                <motion.div
                    className = 'line'
                    initial = {{ scaleY: 0 }}
                    animate = {{ scaleY: 1 }}
                    transition = {{ duration: 0.5, 
                                    delay: 0.5,
                                    ease: 'easeIn'}}></motion.div>
                <motion.div 
                    className = 'contentsBody'
                    initial = {{ opacity: 0, x: -20 }}
                    animate = {{ opacity: 1, x: 0 }}
                    transition = {{ duration: 0.5,
                                    delay: 0.5}}>
                    <Contents 
                        title = '개요'
                        count = '01'
                        text = '지금의 비체담 웹사이트는 다양한 버그와 비효율적인 디자인으로 정보전달과 사용자 경험이 저하되고 있습니다. 새로운 프레임워크와 디자인 변경으로 이 문제를 해결합니다.'/>
                    <Contents 
                        title = '진단'
                        count = '02'
                        text = '지금의 비체담 웹사이트는 다양한 버그와 비효율적인 디자인으로 정보전달과 사용자 경험이 저하되고 있습니다. 새로운 프레임워크와 디자인 변경으로 이 문제를 해결합니다.'/>   
                    <Contents 
                        title = '방향'
                        count = '03'
                        text = '모든 버그를 수정하고, 디자인 체계를 도입하여 일관성 있는 완성도를 달성합니다.'/>
                    <Contents 
                        title = '디자인'
                        count = '04'
                        text = '지금의 웹사이트 사이트멥을 유지하며, 전반적인 디자인을 한층 업그레이드 하는것을 목표로 합니다'/>
                    <Contents 
                        title = '일정'
                        count = '05'
                        text = '2026년 9월 ~ 2027년 1월으로 생각하고 있으며 최대한 빠르게 완성하도록 노력하겠습니다.'/>
                </motion.div>  
            </div>
        </div>
    )
}

export default Outline