import { motion } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import Header from '../../Components/Header/Header.jsx'
import Footer from '../../Components/Footer/Footer.jsx'
import Index from '../../Components/Index/Index.jsx'
import ViewTitle from '../../Components/ViewTitle/ViewTitle.jsx'
import { Text, Title, Subtitle, Margin, Images1, Images2, Images3 } from '../../Components/Common/Common.jsx'
import { Schedule_ViewTitle } from '../../JavaScript/Contents_Text.js'

import './Schedule.css'
import '../Page.css'

function Schedule({ size }) {

    const scrollRef = useRef(null);
        const [scrollPercent, setScrollPercent] = useState(0);
    
        useEffect(() => {
            const el = scrollRef.current;
            if (!el) return;
    
            const handleScroll = () => {
                const maxScroll = el.scrollHeight - el.clientHeight;
                const percent = maxScroll > 0 ? (el.scrollTop / maxScroll) * 100 : 0;
                setScrollPercent(percent);
            };
    
            el.addEventListener('scroll', handleScroll);
            return () => el.removeEventListener('scroll', handleScroll);
        }, []);

    return (
        <div style={{ transform: `scale(${size})`, transformOrigin: 'top center' }}>
            <Header page = '/Schedule'/>
            <div className = 'body'>
                <aside>
                    <Index 
                        text1 = 'SCHEDULE · 06'
                        text2 = '개발'
                        text3 = '일정'
                    />
                    <ViewTitle scroll = { scrollPercent } contents = { Schedule_ViewTitle } />
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
                    ref = { scrollRef }
                    initial = {{ opacity: 0, x: -20 }}
                    animate = {{ opacity: 1, x: 0 }}
                    transition = {{ duration: 0.5,
                                    delay: 0.5}}>
                    <Title 
                        title = '전체 프로젝트 기간'
                        count = '01'
                        text = '현재 계획하고 있는 프로젝트 기간은 총 20주이며, 9월부터 시작하여 2027년 1월 완성을 목표로 하고 있습니다.////다소 긴 일정처럼 보일 수 있지만, 학업과 병행하여 진행되는 프로젝트인 만큼 각 단계마다 충분한 시간을 두고 완성도를 높이는 데 집중하고자 합니다. 일정에 대한 양해 부탁드립니다.'/>

                    
                    <Margin distance_w = '100%' distance_h = '200px'/>
                    <Title 
                        title = '단계별 일정'
                        count = '02'
                        text = '비체담 웹사이트 리빌딩을 위해 아래와 같은 단계로 프로젝트를 진행할 예정입니다.//각 단계별 세부 일정은 프로젝트 진행 상황과 협의 내용에 따라 조정될 수 있으며, 구체적인 일정은 추후 논의를 통해 확정하는 것을 제안드립니다.'/>
                    <Margin distance_w = '100%' distance_h = '50px'/>
                    <Subtitle 
                        text1 = '02 - 1' 
                        text2 = ' 기획'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = '기존 비체담 웹사이트를 분석하여 유지할 요소와 개선이 필요한 부분을 파악합니다. 이를 바탕으로 새롭게 추가하거나 수정하고 싶은 내용에 대해 충분한 논의를 거쳐 방향성을 구체화합니다.'/>
                    
                    <Margin distance_w = '100%' distance_h = '100px'/>
                    <Subtitle 
                        text1 = '02 - 2' 
                        text2 = ' 디자인'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = '기획 단계에서 수집된 의견을 바탕으로 와이어프레임을 제작하여 전체적인 구조를 설계하고, 이를 토대로 실제 디자인 시안을 제작합니다. 피드백을 반영해 수정 과정을 거치며 최종 디자인을 완성합니다.'/>

                    <Margin distance_w = '100%' distance_h = '100px'/>
                    <Subtitle 
                        text1 = '02 - 3' 
                        text2 = ' 프론트엔드 개발'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = '확정된 디자인을 기반으로 사용자가 실제로 보고 상호작용하는 화면을 구현하는 단계입니다. 다양한 디바이스 환경에서도 자연스럽게 작동할 수 있도록 반응형 구조로 개발을 진행합니다.'/>

                    <Margin distance_w = '100%' distance_h = '100px'/>
                    <Subtitle 
                        text1 = '02 - 4' 
                        text2 = ' 백엔드 개발'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = '서버 구축과 CMS 연동을 통해 콘텐츠 관리 시스템을 구성하고, 기존 웹사이트에 작성된 게시글과 데이터를 불러와 새로운 사이트에 안전하게 이전합니다.'/>

                    <Margin distance_w = '100%' distance_h = '100px'/>
                    <Subtitle 
                        text1 = '02 - 5' 
                        text2 = ' QA / 테스트'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = '실 서버 배포에 앞서 전체 페이지와 기능을 꼼꼼히 점검하는 단계입니다. 다양한 디바이스와 브라우저 환경에서 테스트를 진행하여 발견된 문제를 수정하고 완성도를 높입니다.'/>

                    <Margin distance_w = '100%' distance_h = '100px'/>
                    <Subtitle 
                        text1 = '02 - 6' 
                        text2 = ' 오픈 / 배포'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = '모든 점검이 완료된 웹사이트를 실 서버에 배포하여 정식으로 오픈합니다.'/>

                    

                    <Margin distance_w = '100%' distance_h = '100px'/>
                    <Title 
                        title = '비용'
                        count = '03'
                        text = ''/>
                    <Margin distance_w = '100%' distance_h = '50px'/>
                    <Subtitle 
                        text1 = '03 - 1' 
                        text2 = ' 비용 산정 기준'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = '아직 학업 중인 학생의 입장에서 진행하는 프로젝트이기 때문에 기존 사이트맵에 포함된 페이지는 별도의 비용 없이 진행하며, 새롭게 추가되는 페이지에 한해 페이지당 비용을 책정하였습니다.'/>
                    
                    <Margin distance_w = '100%' distance_h = '50px'/>
                    <Subtitle 
                        text1 = '03 - 2' 
                        text2 = ' 상세 비용'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = '추가로 진행 가능한 항목에 대한 비용입니다.//비체담 웹사이트에 어울릴 만한 항목만 선별하여 작성하였습니다.'/>
                    <Margin distance_w = '100%' distance_h = '50px'/>
                    <Text text = '추가 사이드맵 또는 페이지 : 페이지당 10만원 ( 별도 기능 미포함 )'/>
                    <Margin distance_w = '100%' distance_h = '10px'/>
                    <Text text = '다국어 : 페이지당 4만원 ( 영어 제외 )'/>
                    <Margin distance_w = '100%' distance_h = '10px'/>
                    <Text text = '사이트 내 통합 검색 : 15만원'/>
                    <Margin distance_w = '100%' distance_h = '10px'/>
                    <Text text = ' 모션/애니메이션 : 디자인 논의 후 책정 ( 기존 페이지 무료 )'/>
                    
        

                    <Margin distance_w = '100%' distance_h = '200px'/>
                    <Footer title = '• 개발 일정'/>
                </motion.div>
            </div>
        </div>
    )
}

export default Schedule