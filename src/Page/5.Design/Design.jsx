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

function Design({ size }) {

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
                        text = '본격적인 디자인 작업에 들어가기에 앞서, 유사 업종 웹사이트를 와이어프레임 형태로 제작해보았습니다. 아래 디자인을 참고하여 비체담 웹사이트의 디자인 방향성을 함께 논의할 수 있습니다.////또한 저희는 유사 업종 웹사이트에 사용된 스타일을 모두 구현할 수 있는 역량을 보유하고 있습니다.//(아래 와이어프레임은 AI를 사용하지 않고 직접 제작하였습니다.)'/>
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
                    <Text text = '웹사이트 첫 진입 시 모션그래픽과 스크롤 위치에 따른 애니메이션을 활용한 동적인 웹사이트 구성' />
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
                        text = '마우스 이벤트에 따라 요소가 변형·등장·이동하며 페이지에 동적인 느낌을 더합니다. 스크롤, 호버, 클릭에 따른 변형 요소를 통해 방문자는 웹사이트를 단순히 읽는 것이 아니라 경험하는 느낌을 받을 수 있습니다.//또한 사용자의 시선을 유도하고 싶은 부분에 애니메이션을 추가하여 자연스럽게 집중을 이끌어낼 수 있습니다.'/>
                    <Margin distance_w = '100%' distance_h = '50px'/>
                    <Subtitle 
                        text1 = '02 - 1' 
                        text2 = ' Hover'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = '클릭 가능한 컴포넌트에 마우스를 올렸을 때, 시각적인 반응을 주어 마우스가 해당 요소 위에 있다는 것을 명확히 인지시킵니다.//이를 통해 사용자는 클릭하고자 하는 부분을 정확히 구분할 수 있고, 해당 요소가 클릭 가능한 컴포넌트인지 직관적으로 알 수 있습니다.' />

                    <Margin distance_w = '100%' distance_h = '100px'/>
                    <Subtitle 
                        text1 = '02 - 2' 
                        text2 = ' Motion'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = '컴포넌트별로 첫 로딩 시 애니메이션 효과를 부여합니다.//사용자가 웹사이트에 처음 방문했을 때, 컴포넌트가 순서대로 나타나는 Motion을 적용하면 사용자의 시선이 자연스럽게 컴포넌트가 생성되는 순서를 따라가게 되어 정보 전달에 도움을 줄 수 있습니다.' />
                    
                    <Margin distance_w = '100%' distance_h = '100px'/>
                    <Subtitle 
                        text1 = '02 - 3' 
                        text2 = ' Transition'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = '배경 또는 카드에 트랜지션 효과를 적용하여 슬라이드 형태의 연출을 줍니다.//여러 이미지가 자동으로 반복 전환되며, 사용자의 별다른 동작 없이도 다양한 정보를 자연스럽게 보여줄 수 있습니다.' />
                    


                    <Margin distance_w = '100%' distance_h = '200px'/>
                    <Title 
                        title = '반응형 디자인'
                        count = '03'
                        text = '사용자의 환경에 따라 레이아웃과 콘텐츠 배치가 유연하게 조정되어, 어떤 환경에서도 일관된 완성도를 유지합니다.////아래는 유한양행 웹사이트를 예시로 반응형 디자인을 와이어프레임으로 구현한 모습입니다.//(실제 유한양행 웹사이트는 반응형이 올바르게 구현되어 있지 않아, 저희가 임의로 개선된 버전을 구성해보았습니다.)'/>
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