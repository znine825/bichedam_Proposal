import { motion } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import Header from '../../Components/Header/Header.jsx'
import Footer from '../../Components/Footer/Footer.jsx'
import Index from '../../Components/Index/Index.jsx'
import ViewTitle from '../../Components/ViewTitle/ViewTitle.jsx'
import { Text, Title, Subtitle, Margin, Images1, Images2, Images3 } from '../../Components/Common/Common.jsx'
import { Diagnosis_ViewTitle } from '../../JavaScript/Contents_Text.js'

import './Diagnosis.css'
import '../Page.css'

function Diagnosis() {

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
            <Header page = '/Diagnosis'/>
            <div className = 'body'>
                <aside>
                    <Index 
                        text1 = 'DIAGNOSIS · 03'
                        text2 = '현황'
                        text3 = '진단'
                    />
                    <ViewTitle scroll = { scrollPercent } contents = { Diagnosis_ViewTitle } />
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
                        title = '기술적 문제'
                        count = '01'
                        text = '웹 개발에서 기술적인 부분의 문제입니다. 알고리즘이나 로직의 오류로 인해 생기는 문제들을 나열했습니다.'/>
                    
                    <Margin distance_w = '100%' distance_h = '100px'/>
                    <Subtitle 
                        text1 = '01 - 1' 
                        text2 = ' News 슬라이드 버그'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Images1 image1 = 'Diagnosis/111.png' text1 = 'News 부분의 카드 슬라이드를 계속 오른쪽으로 반복해서 넘길경우 좌측의 메인 카드가 변하지 않는 모습' />

                    <Margin distance_w = '100%' distance_h = '200px'/>
                    <Subtitle 
                        text1 = '01 - 2' 
                        text2 = ' Pipeline 스크롤 버그'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Images1 image1 = 'Diagnosis/121.png' text1 = '상하 비율이 낮은 기기의 경우 Pipeline 부분에 갇히는 모습 탈출하기위해선 꾀많은 스크롤을 요구함' />

                    <Margin distance_w = '100%' distance_h = '200px'/>
                    <Subtitle 
                        text1 = '01 - 3' 
                        text2 = ' 공시정보 피드백 버그'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Images1 image1 = 'Diagnosis/131.png' text1 = '좌측 원형 그래프는 우측의 표를 기반으로 만들어진 것이 아닌 개별 이미지로 구성이 되어있음//즉 표를 수정하더라도 그래프는 바뀌지 않음. 지금도 내용이 다른 모습' />

                    <Margin distance_w = '100%' distance_h = '200px'/>
                    <Subtitle 
                        text1 = '01 - 4' 
                        text2 = ' 추천순 정렬 기능'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Images1 image1 = 'Diagnosis/141.png' text1 = '보도자료 개시글에는 추천기능이 없음, 그런데 정렬 기능에는 추천순 정렬이 있는 모습. 웹사이트를 탬플릿을 통해 찍어내다보니 디테일이 부족함.' />
                
                    <Margin distance_w = '100%' distance_h = '200px'/>
                    <Subtitle 
                        text1 = '01 - 5' 
                        text2 = ' 문의하기 오류메시지 버그'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Images1 image1 = 'Diagnosis/151.png' text1 = '문의하기에서 내용을 적지않고 문의하기 버튼을 연속 클릭할시 오류 메시지가 반복해서 출력되는 모습, 완성도 측면에서 부정적인 이미지를 줌' />

                    <Margin distance_w = '100%' distance_h = '200px'/>
                    <Subtitle 
                        text1 = '01 - 6' 
                        text2 = ' 사진 비율 최적화 버그'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = '화면 비율이 작아졌을 경우 사진은 기존크기를 유지해서 잘려서 나오거나, 사진으로 구현을 하면 안되는 부분을 사진으로 구현해 비율이 작아지는 경우 내용이 보이지 않는 버그'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Images3 image1 = 'Diagnosis/161.png' image2 = 'Diagnosis/162.png' image3 = 'Diagnosis/163.png'
                             text1 = '사이드 멥이 잘리는 모습'
                             text2 = '화면 비율이 세로로길면//사진이 잘리는 모습'
                             text3 = '모바일 화면에서는 작아지는 모습'/>



                    <Margin distance_w = '100%' distance_h = '200px'/>
                    <Title 
                        title = '디자인적 문제'
                        count = '02'
                        text = '웹 개발에서 디자인적인 부분의 문제입니다. 일관되지 않은 디자인으로 인해 생기는 시각적 문제들을 나열했습니다.'/>
                    
                    <Margin distance_w = '100%' distance_h = '100px'/>
                    <Subtitle 
                        text1 = '02 - 1' 
                        text2 = ' News 통일되지않은 마감'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = '두 사진 모두 메인 홈 화면의 쳅터입니다. 하지만 같은 화면인데도 불구하고 각각 다른 마진 또는 패딩을 사용하고 있으며 이는 웹사이트의 시각적 불균형을 생기게 합니다. 아래 사진 뿐만아니라 다른 메뉴들에도 똑같은 문제가 반복되고 있습니다. ////지금 비체담 웹사이트의 가장 불편한 부분이며 이러한 통일성이 꼭 필요하다고 생각합니다.'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Images2 image1 = 'Diagnosis/211.png' text1 = '제목과 내용의 마진이 같은 모습'
                             image2 = 'Diagnosis/212.png' text2 = '제목과 내용의 마진이 다른 모습' />

                    <Margin distance_w = '100%' distance_h = '200px'/>
                    <Subtitle 
                        text1 = '02 - 2' 
                        text2 = ' News 잘못된 컴포넌트의 재활용'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = '아래 4가지 사진은 모두 다른 기능을 하고 있습니다. 하지만 전부 같은 컴포넌트를 사용해 같은 시각적 디자인을 보여주고 있습니다.'/>
                    <Text text = '//아래에 사용된 컴포넌트의 기능은 클릭시 지정된 링크로 이동, 마우스 호버시 반응, 이 2가지 기능을 가지고 있습니다. 하지만 이 2개의 기능을 모두 사용하는건 보도자료에 사용된 컴포넌트 뿐이며 나머지 컴포넌트는 링크이동없이 마우스 이벤트만 존재하고 있습니다. 이로인해 사용자의 불필요한 클릭을 유도하게 됩니다.'/>
                    <Text text = '//특히 판메처 부분은 저도 처음볼 당시 판메 링크로 이동되는줄 알고 속은 경험이 있습니다.'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Images2 image1 = 'Diagnosis/221.png' text1 = '보도자료 카드'
                             image2 = 'Diagnosis/222.png' text2 = 'G케어 카드' />
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Images2 image1 = 'Diagnosis/223.png' text1 = '판매처 카드'
                             image2 = 'Diagnosis/224.png' text2 = 'G케어 제춤구성 카드' />


                    

                    <Margin distance_w = '100%' distance_h = '200px'/>
                    <Title 
                        title = '콘텐츠 완성도 문제'
                        count = '03'
                        text = '웹사이트 디테일적인 부분의 문제입니다. 웹 배포전 검토 과정을 통해 고쳤어야할 사소한 문제들을 나열했습니다.'/>
                    
                    <Margin distance_w = '100%' distance_h = '100px'/>
                    <Subtitle 
                        text1 = '03 - 1' 
                        text2 = ' 기본적인 문법, 오타'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = '아래 사진은 메인 화면의 일부분입니다. 웹사이트를 검색해서 들어오면 바로 보이는 곳에 심각한 영어 오타가 있습니다. ////HISTROY → HISTORY//PATNERS → PARTNERS////전부 확인해보진 못했지만 여기 뿐만아니라 다른 곳에도 오타가 있었습니다. ( Ex. 영문 사이트에도 똑같이 오타가 있다 )'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Images1 image1 = 'Diagnosis/311.png' text1 = '홈화면 3번째 카드' />

                    <Margin distance_w = '100%' distance_h = '200px'/>
                    <Subtitle 
                        text1 = '03 - 2' 
                        text2 = ' 링크연결 문제'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = '모바일 메뉴 (/profile, /history, /pipeline 등)에서 보도자료 링크가 /press 대신 /news로 잘못 연결되어 있습니다. '/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Images2 image1 = 'Diagnosis/321.png' text1 = '홈화면 3번째 카드'
                             image2 = 'Diagnosis/322.png' text2 = '홈화면 3번째 카드' />

                    <Margin distance_w = '100%' distance_h = '200px'/>
                    <Subtitle 
                        text1 = '03 - 3' 
                        text2 = ' 동일한 디자인의 웹사이트'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = '여러 제약회사 웹사이트를 찾아보다가 프로티움 사이언스 라는 회사의 웹사이트를 찾게 되었습니다. 디자인을 살펴보니 현제 비체담 웹사이트와 굉장히 유사한 구조를 가지고 있었으며 제작된 날짜도 2024 년으로 비체담 웹사이트보다 먼저 제작되었습니다.'/>
                    <Text text = '////정부지원사업을 통해 웹사이트 작업을 맡기고 외주를 받은 업체에서 프로티움사이언스 웹사이트를 그대로 카피 하여 제작한 것으로 생각이 됩니다.' />
                    <Text text = '////디자인만 같은것이 아니라 사용된 문구, 사이드멥 구조 또한 동일합니다. 이렇게 되면 저작권 침해 분쟁 소지가 생겨 법적 리스크가 발생할 수 있으며, 업계 관계자나 투자자가 두 사이트를 동시에 접했을 때 표절 의혹으로 기업 이미지에 타격을 입을 수 있습니다.' />
                    <Text text = '////비체담 웹사이트를 리빌딩 해야하는 가장 중요한 이유라고 생각합니다.' />
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Images2 image1 = 'Diagnosis/331.png' text1 = '홈화면 3번째 카드'
                             image2 = 'Diagnosis/332.png' text2 = '홈화면 3번째 카드' />
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Images2 image1 = 'Diagnosis/333.png' text1 = '홈화면 3번째 카드'
                             image2 = 'Diagnosis/334.png' text2 = '홈화면 3번째 카드' />

                    <Margin distance_w = '100%' distance_h = '200px'/>
                    <Footer title = '• 현황 진단'/>
                </motion.div>
            </div>
        </div>
    )
}

export default Diagnosis