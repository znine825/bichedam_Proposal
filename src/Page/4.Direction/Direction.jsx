import { motion } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import Header from '../../Components/Header/Header.jsx'
import Footer from '../../Components/Footer/Footer.jsx'
import Index from '../../Components/Index/Index.jsx'
import ViewTitle from '../../Components/ViewTitle/ViewTitle.jsx'
import { Text, Title, Subtitle, Margin, Images1, Images2, Images3 } from '../../Components/Common/Common.jsx'
import { Direction_ViewTitle } from '../../JavaScript/Contents_Text.js'

import './Direction.css'
import '../Page.css'

function Direction({ size }) {

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
            <Header page = '/Direction'/>
            <div className = 'body'>
                <aside>
                    <Index 
                        text1 = 'DIRECTION · 04'
                        text2 = '리빌딩'
                        text3 = '방향'
                    />
                    <ViewTitle scroll = { scrollPercent } contents = { Direction_ViewTitle } />
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
                        title = '핵심 목표'
                        count = '01'
                        text = ''/>
                    
                    <Subtitle 
                        text1 = '01 - 1' 
                        text2 = ' 전체적인 버그 수정'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = '진단된 기술 이슈를 전부 수정하여 콘텐츠 신뢰도와 서비스 완성도를 높입니다.' />

                    <Margin distance_w = '100%' distance_h = '100px'/>
                    <Subtitle 
                        text1 = '01 - 2' 
                        text2 = ' 디자인 체계 수립'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = '컬러·컴포넌트·간격 시스템을 정립하고 모든 페이지에 일관되게 적용합니다. 현재 페이지별로 상이한 디자인 요소를 통합하여 브랜드 일관성과 전문성을 강화합니다. ////다만 디자인 방향성은 충분한 의견 수렴(메인 색상, 추가하고 싶은 내용 등)이 필요한 부분입니다. 따라서 추후 협의를 통해 진행할 것을 제안드립니다.' />

                    <Margin distance_w = '100%' distance_h = '100px'/>
                    <Subtitle 
                        text1 = '01 - 3' 
                        text2 = ' 정보구조 개선'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = '기존 사이드맵 구조를 유지하되, 추후 협의를 통해 새로운 메뉴나 사이드맵 항목을 추가하며 점진적으로 개선하는 방향으로 진행할 예정입니다.' />
                    
                    <Margin distance_w = '100%' distance_h = '100px'/>
                    <Subtitle 
                        text1 = '01 - 4' 
                        text2 = ' 반응형 완전 대응'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = '모바일·태블릿·데스크탑 전 환경에서 자연스러운 레이아웃을 구현합니다. 현재 모바일 메뉴의 링크 오류 등 디바이스별 버그를 해소하고, 사용자가 어떤 환경에서도 쾌적하게 열람할 수 있도록 합니다.' />

                    <Margin distance_w = '100%' distance_h = '100px'/>
                    <Subtitle 
                        text1 = '01 - 5' 
                        text2 = ' 성능 최적화'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = '현재 비체담 웹사이트에 접속해보면, 구조가 단순함에도 불구하고 로딩 시간이 다소 발생하고 있습니다. 따라서 이미지 최적화, 코드 경량화, 리액트 라우터 도입을 통해 로딩 속도를 대폭 개선하고자 합니다.////초기 진입 속도 향상으로 이탈률을 낮추고, 검색엔진 노출(SEO) 순위 개선 효과도 함께 기대할 수 있습니다.' />
                    

                    
                    <Margin distance_w = '100%' distance_h = '200px'/>
                    <Title 
                        title = '기술스택 / 개발환경'
                        count = '02'
                        text = ''/>
                    <Subtitle 
                        text1 = '02 - 1' 
                        text2 = ' 프론트엔드'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = 'React 기반으로 전면 재구축합니다. 컴포넌트 단위 설계로 페이지 간 디자인 일관성을 구조적으로 보장하며, 향후 페이지 추가·수정 시 재사용 가능한 컴포넌트를 통해 유지보수 비용을 줄일 수 있습니다.////이 페이지 또한 리액트를 이용해 제작되었습니다.' />
                    
                    <Margin distance_w = '100%' distance_h = '100px'/>
                    <Subtitle 
                        text1 = '02 - 2' 
                        text2 = ' 라우팅 / 렌더링'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = '리액트 Router 기능을 통해 렌더링 시간을 단축시킬 수 있습니다. 빠른 초기 로딩을 확보할 수 있으며, 이미지 부분에서 점진적 정적 생성을 통해 빠른 렌더링 시간을 보장합니다.' />
                    
                    <Margin distance_w = '100%' distance_h = '100px'/>
                    <Subtitle 
                        text1 = '02 - 3' 
                        text2 = ' 배포'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = '현재 배포되고 있는 서버 자체를 수정할 수 없는 경우, AWS를 통해 배포할 수 있습니다. AWS로 배포할 경우 도메인·SSL 설정을 통해 HTTP/HTTPS 혼용 문제도 함께 해결할 수 있습니다.' />
                    
                    <Margin distance_w = '100%' distance_h = '100px'/>
                    <Subtitle 
                        text1 = '02 - 4' 
                        text2 = '콘텐츠 관리'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = '공지사항, 보도자료 등에 글을 작성하기 위해서는 "bichedam.co.kr/wp-admin"에 로그인하여 작업이 이루어지는 것으로 알고 있습니다. 관리자 페이지 주소가 기본값 그대로 노출되어 있어 누구나 로그인을 시도할 수 있으며, 이는 주요 해킹 타깃이 되는 이유 중 하나입니다.' />
                    <Text text = '//현재 방식 대신 외부 CMS를 도입하면 해킹 위험에서 벗어날 수 있으며, 어떤 CMS를 선택하는지에 따라 지금보다 더 높은 퀄리티의 글을 작성할 수 있게 됩니다.' />
                    <Text text = '//CMS에는 여러 종류가 있습니다.// - Notion// - 그누보드 (현재 사용 중인 방식과 유사)// - 깃허브 (약간의 개발 지식 필요)'/>
                    <Text text = '//어떤 CMS를 사용할지는 추후 협의를 통해 정할 것을 제안드립니다.' />
                    
                    <Margin distance_w = '100%' distance_h = '200px'/>
                    <Footer title = '• 리빌딩 방향'/>
                </motion.div>
            </div>
        </div>
    )
}

export default Direction