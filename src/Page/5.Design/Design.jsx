import { motion } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import Header from '../../Components/Header/Header.jsx'
import Footer from '../../Components/Footer/Footer.jsx'
import Index from '../../Components/Index/Index.jsx'
import ViewTitle from '../../Components/ViewTitle/ViewTitle.jsx'
import { Text, Title, Subtitle, Margin, Images1, Images2, Images3, MoodBoard } from '../../Components/Common/Common.jsx'
import { Design_ViewTitle } from '../../JavaScript/Contents_Text.js'

import './Design.css'
import '../Page.css'

function Design() {

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
            <Header page = '/Design'/>
            <div className = 'body'>
                <aside>
                    <Index 
                        text1 = 'DESIGN · 05'
                        text2 = '디자인'
                        text3 = '전략'
                    />
                    <ViewTitle scroll = { scrollPercent } contents = { Design_ViewTitle } />
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
                        title = '와이어 프레임'
                        count = '01'
                        text = '본격적인 디자인 작업에 들어가기 앞서 유사 회사의 웹사이트를 와이어 프레임으로 만들어 봤습니다. 아래 디자인을 참고로 비체담 웹사이트의 디자인 방향성을 정할 수 있습니다.////또한 유사회사의 웹사이트들은 모두 구현할 수 있는 역량을 보유하고 있습니다.//(아래의 와이어 프레임은 AI를 사용하지 않았습니다.)'/>
                    <Margin distance_w = '100%' distance_h = '50px'/>
                    <Subtitle 
                        text1 = '01 - 1' 
                        text2 = ' 유한양행'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = 'PPT스러운 홈 구성을 통한 정보전달' />
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <MoodBoard image1 = 'Design/111.png' image2 = 'Design/112.png' width = '500px' height = '665px' text1 = '상단 페이지' text2 = '하단 페이지'/>
                    
                    <Margin distance_w = '100%' distance_h = '100px'/>
                    <Subtitle 
                        text1 = '01 - 2' 
                        text2 = ' GC녹십자'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = '첫 웹사이트 진입시 모션그래픽, 스크롤 위치에 따른 애니메이션 모션을 통한 동적인 웹사이트 구성' />
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <MoodBoard image1 = 'Design/121.png' image2 = 'Design/122.png' width = '500px' height = '1029px' text1 = '상단 페이지' text2 = '하단 페이지'/>
                    
                    <Margin distance_w = '100%' distance_h = '100px'/>
                    <Subtitle 
                        text1 = '01 - 3' 
                        text2 = ' 대웅제약'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = '카드 기반의 정보 구성으로 사용자가 원하는 정보를 빠르게 확인할 수 있도록 구성' />
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <MoodBoard image1 = 'Design/131.png' image2 = 'Design/132.png' width = '500px' height = '584px' text1 = '상단 페이지' text2 = '하단 페이지'/>
                    


                    <Margin distance_w = '100%' distance_h = '200px'/>
                    <Title 
                        title = '동적 디자인'
                        count = '02'
                        text = '마우스 이벤트마다 요소가 변형·등장·이동하며 페이지에 동적인 느낌을 추가합니다. 스크롤, 호버, 클릭에 따른 변형요소를 통해 방문자는 웹사이트를 읽는 것이 아니라 경험하는 느낌을 받을 수 있습니다. 또한 사용자의 집중을 유하고싶은 부분에 애니메이션을 추가해 시선을 유도할 수 있습니다.'/>
                    <Margin distance_w = '100%' distance_h = '100px'/>
                    <Subtitle 
                        text1 = '01 - 1' 
                        text2 = ' Hover'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = '클릭 가능한 컴포넌트에 마우스를 올릴 경우 컴포넌트에 마우스가 올라갔다는 느낌을 줍니다.//사용자는 내가 클릭하고자 하는 부분이 어딘지 확실하게 구분 할 수 있고 클릭 가능한 컴포넌트인지 알 수 있습니다.' />

                    <Margin distance_w = '100%' distance_h = '100px'/>
                    <Subtitle 
                        text1 = '01 - 2' 
                        text2 = ' Motion'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = '컴포넌트 별로 첫 로딩시 애니메이션을 줍니다.//사용자가 웹사이트에 첫 방문 했을때 순서대로 컴포넌트에 Motion을 주게 되면 자연스럽게 사용자의 시선이 생성되는 컴포넌트 순서에 맞춰 이동하게 되고 정보 전달에 도움을 줄 수 있습니다.' />
                    
                    <Margin distance_w = '100%' distance_h = '100px'/>
                    <Subtitle 
                        text1 = '01 - 3' 
                        text2 = ' Transition'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = '배경또는 카드에 트랜지션을 통해 슬라이더 효과를 줍니다.//여러 이미지가 반복적으로 슬라이더 되며 사용자의 별다른 동작 없이도 여러 정보를 보여줄 수 있습니다.' />
                    


                    <Margin distance_w = '100%' distance_h = '200px'/>
                    <Title 
                        title = '반응형 디자인'
                        count = '03'
                        text = '사용자의 환경에 따라서 레이아웃과 콘텐츠 배치가 유연하게 조정되어 어떤 환경에서도 일관된 완성도를 유지합니다.////아래는 유한양행 웹사이트의 반응형을 와이어 프레임으로 구현한 모습입니다.//(실제 유한양행 웹사이트는 반응형이 올바르게 구현되어있지 않아서 임의로 개선된 버전을 구성해 보았습니다.)'/>
                    <Margin distance_w = '100%' distance_h = '100px'/>
                    <Subtitle 
                        text1 = '03 - 1' 
                        text2 = ' PC'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <MoodBoard image1 = 'Design/111.png' image2 = 'Design/112.png' width = '500px' height = '665px' text1 = '상단 페이지' text2 = '하단 페이지'/>
                    
                    <Margin distance_w = '100%' distance_h = '100px'/>
                    <Subtitle 
                        text1 = '03 - 2' 
                        text2 = ' Tablet'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <MoodBoard image1 = 'Design/321.png' image2 = 'Design/322.png' width = '500px' height = '882px' text1 = '상단 페이지' text2 = '하단 페이지'/>
                    
                    <Margin distance_w = '100%' distance_h = '100px'/>
                    <Subtitle 
                        text1 = '03 - 3' 
                        text2 = ' Mobile'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <MoodBoard image1 = 'Design/331.png' image2 = 'Design/332.png' width = '500px' height = '851px' text1 = '상단 페이지' text2 = '하단 페이지'/>
                    
                    <Margin distance_w = '100%' distance_h = '200px'/>
                    <Footer title = '• 디자인 전략'/>
                </motion.div>
            </div>
        </div>
    )
}

export default Design