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

function Direction() {

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
        <div>
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
                    <Text text = '컬러·컴포넌트·간격 시스템을 정립하고 모든 페이지에 일관되게 적용합니다. 현재 페이지별로 상이한 디자인 요소를 통합하여 브랜드 일관성과 전문성을 강화합니다. ////다만 디자인 방향성은 충분한 의견수립 (메인 색상, 추가하고 싶은 내용 등)이 필요한 부분입니다. 따라서 추후 협의를 통해서 진행할 것을 제안드립니다.' />

                    <Margin distance_w = '100%' distance_h = '100px'/>
                    <Subtitle 
                        text1 = '01 - 3' 
                        text2 = ' 정보구조 개선'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = '기존 사이드멥을 유지하되 이 부분 또한 추후 협의를 통해 새로운 메뉴, 사이드멥을 추가하고 개선하는 방향으로 진행 할 예정입니다.' />
                    
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
                    <Text text = '현제 비체담 웹사이트를 들어가보면 굉장히 단순한 웹사이트임에도 불구하고 로딩시간이 조금 있습니다. 따라서 이미지 최적화·코드, 리액트 라우터 도입으로 로딩 속도를 대폭 개선합니다.////초기 진입 속도 향상으로 이탈률을 낮추고, 검색엔진 노출(SEO) 순위 개선 효과도 함께 기대할 수 있습니다.' />

                    <Margin distance_w = '100%' distance_h = '100px'/>
                    <Subtitle 
                        text1 = '01 - 6' 
                        text2 = ' 저비용 유지보수 유지'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = '지금 웹사이트의 유지보수 비용이 거의 발생하지 않고있다고 알고있습니다. 따라서 리빌딩되는 웹사이트 또한 지금 관리되고 있는 방식 (관리자 로그인을 통해 관리) 을 구현해 추가 비용이 발생하지 않도록 하겠습니다.////다만 기존 서버를 수정할 수 없는 경우 새로운 서버를 통해 호스팅을 해야하기 때문에 사용자 방문율에 따른 비용이 발생 할 수 있습니다.' />
                    

                    
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
                    <Text text = '리액트  Router 기능을 통해 렌더링 시간을 단축시킬 수 있습니다. 빠른 초기 로딩과 검색엔진 최적화(SEO)를 동시에 확보할 수 있으며, 이미지 부분에서 점진적 정적 생성을 통해 빠른 렌더링 시간을 보장합니다.' />
                    
                    <Margin distance_w = '100%' distance_h = '100px'/>
                    <Subtitle 
                        text1 = '02 - 3' 
                        text2 = ' 배포'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = '지금 배포되고있는 서버 자체 수정이 불가능할 경우, AWS를 통해 배포 할 수 있습니다. AWS를 통해 배포할 경우 도메인·SSL 설정을 통해 HTTP/HTTPS 혼용 문제를 해결 할 수 있습니다.' />
                    
                    <Margin distance_w = '100%' distance_h = '100px'/>
                    <Subtitle 
                        text1 = '02 - 4' 
                        text2 = '콘텐츠 관리'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = '공지사항, 보도자료 등에 글을 쓰기위해선 “bichedam.co.kr/wp-admin” 에 로그인을 통해 작업이 이루어지는 것으로 알고있습니다.  관리자 주소를 바꾸지 않아서 누구나 로그인을 시도할 수 있고 주 해킹 타겟이 되는 이유중에 하나입니다.' />
                    <Text text = '//지금의 방식이 아닌 외부 CMS를 이용하게 되면 해킹의 위험에서 벗어날 수 있고, 어떤 외부 CMS를 이용하냐에 따라 지금 보다 더 높은 퀄리티의 글을 작성 할 수 있게됩니다.' />
                    <Text text = '//CMS 에는 여러 종류가 있습니다.// - Notion// - 그누보드 ( 지금 사용하는 것과 굉장히 유사 )// - 깃허브 ( 개발지식이 약간 필요 )' />
                    <Text text = '//어떤 CMS를 사용할지는 추후 협의를 통해 정할 것을 제안드립니다.' />
                    
                    <Margin distance_w = '100%' distance_h = '200px'/>
                    <Footer title = '• 리빌딩 방향'/>
                </motion.div>
            </div>
        </div>
    )
}

export default Direction