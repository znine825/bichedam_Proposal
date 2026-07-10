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

function Diagnosis({ size }) {

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
                    
                    <Margin distance_w = '100%' distance_h = '50px'/>
                    <Subtitle 
                        text1 = '01 - 1' 
                        text2 = ' News 슬라이드 버그'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = 'News 부분의 카드 슬라이드를 계속 오른쪽으로 반복해서 넘길경우 좌측의 메인 카드가 변하지 않는 문제가 있습니다.' />
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Images1 image1 = 'Diagnosis/111.png' text1 = '같은 카드 2개가 있는 모습' />

                    <Margin distance_w = '100%' distance_h = '100px'/>
                    <Subtitle 
                        text1 = '01 - 2' 
                        text2 = ' Pipeline 스크롤 버그'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = '상하 비율이 낮은 기기의 경우 Pipeline 부분에 갇히는 듯한 느낌을 주며, 탈출하기 위해서는 꽤 많은 스크롤을 필요로 합니다.' />
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Images1 image1 = 'Diagnosis/121.png' text1 = 'Pipeline 부분' />

                    <Margin distance_w = '100%' distance_h = '100px'/>
                    <Subtitle 
                        text1 = '01 - 3' 
                        text2 = ' 공시정보 피드백 버그'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = '좌측 원형 그래프는 우측 표를 기반으로 생성된 것이 아니라 개별 이미지로 별도 제작되어 있습니다.//즉 표의 내용을 수정하더라도 그래프에는 반영되지 않으며, 실제로 현재 두 데이터의 내용이 서로 다른 상태입니다.' />
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Images1 image1 = 'Diagnosis/131.png' text1 = '두 정보가 다른 모습' />

                    <Margin distance_w = '100%' distance_h = '100px'/>
                    <Subtitle 
                        text1 = '01 - 4' 
                        text2 = ' 추천순 정렬 기능'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = '보도자료 게시글에는 추천 기능이 존재하지 않음에도, 정렬 옵션에는 추천순 정렬이 포함되어 있습니다.//템플릿 기반으로 제작되며 세부적인 디테일 점검이 부족했던 것으로 보입니다.' />
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Images1 image1 = 'Diagnosis/141.png' text1 = '추천순이 있는 모습' />
                
                    <Margin distance_w = '100%' distance_h = '100px'/>
                    <Subtitle 
                        text1 = '01 - 5' 
                        text2 = ' 문의하기 오류메시지 버그'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = '문의하기에서 내용을 입력하지 않고 문의하기 버튼을 연속 클릭할 시, 오류 메시지가 반복해서 출력됩니다. 이는 완성도 측면에서 부정적인 인상을 줄 수 있습니다.' />
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Images1 image1 = 'Diagnosis/151.png' text1 = '오류 메시지가 반복된 모습'/>

                    <Margin distance_w = '100%' distance_h = '100px'/>
                    <Subtitle 
                        text1 = '01 - 6' 
                        text2 = ' 사진 비율 최적화 버그'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = '화면 비율이 작아질 경우 사진이 기존 크기를 그대로 유지한 채 잘려서 노출되는 문제가 있습니다. 또한 사진이 아닌 텍스트나 코드로 구현했어야 할 요소를 이미지로 구현한 경우, 화면이 작아지면 해당 내용이 아예 보이지 않는 문제도 함께 발견되었습니다.'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Images3 image1 = 'Diagnosis/161.png' image2 = 'Diagnosis/162.png' image3 = 'Diagnosis/163.png'
                             text1 = '사이드 맵이 잘리는 모습'
                             text2 = '화면 비율이 세로로길면//사진이 잘리는 모습'   
                             text3 = '모바일 화면에서는 작아지는 모습'/>



                    <Margin distance_w = '100%' distance_h = '200px'/>
                    <Title 
                        title = '디자인적 문제'
                        count = '02'
                        text = '웹 개발에서 디자인적인 부분의 문제입니다. 일관되지 않은 디자인으로 인해 생기는 시각적 문제들을 나열했습니다.'/>
                    
                    <Margin distance_w = '100%' distance_h = '50px'/>
                    <Subtitle 
                        text1 = '02 - 1' 
                        text2 = ' News 통일되지않은 마감'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = '두 사진 모두 메인 홈 화면의 쳅터입니다. 하지만 같은 화면인데도 불구하고 각각 다른 마진 또는 패딩을 사용하고 있으며 이는 웹사이트의 시각적 불균형을 생기게 합니다. 아래 사진 뿐만아니라 다른 메뉴들에도 똑같은 문제가 반복되고 있습니다. ////지금 비체담 웹사이트의 가장 불편한 부분이며 이러한 통일성이 꼭 필요하다고 생각합니다.'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Images2 image1 = 'Diagnosis/211.png' text1 = '제목과 내용의 마진이 같은 모습'
                             image2 = 'Diagnosis/212.png' text2 = '제목과 내용의 마진이 다른 모습' />

                    <Margin distance_w = '100%' distance_h = '100px'/>
                    <Subtitle 
                        text1 = '02 - 2' 
                        text2 = ' News 잘못된 컴포넌트의 재활용'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = '아래 컴포넌트들은 클릭 시 지정된 링크로 이동하는 기능과 마우스 호버 시 반응하는 기능, 이 두 가지를 갖도록 설계되어 있습니다. 하지만 실제로 두 기능을 모두 사용하는 것은 보도자료 컴포넌트뿐이며, 나머지 컴포넌트는 링크 이동 없이 마우스 이벤트만 존재합니다. 이로 인해 사용자가 클릭 가능한 요소로 오인하고 불필요하게 클릭하게 되는 문제가 발생합니다.'/>
                    <Text text = '////특히 판매처 카드는 저 역시 처음 접했을 때 판매 링크로 이동하는 줄 알고 클릭했던 경험이 있습니다.'/>
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
                    
                    <Margin distance_w = '100%' distance_h = '50px'/>
                    <Subtitle 
                        text1 = '03 - 1' 
                        text2 = ' 기본적인 문법, 오타'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = '아래 사진은 메인 화면의 일부분입니다. 웹사이트를 검색해서 들어오면 바로 보이는 곳에 심각한 영어 오타가 있습니다. ////HISTROY → HISTORY//PATNERS → PARTNERS////전부 확인해보진 못했지만 여기 뿐만아니라 다른 곳에도 오타가 있었습니다. ( Ex. 영문 사이트에도 똑같이 오타가 있다 )'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Images1 image1 = 'Diagnosis/311.png' text1 = '홈화면 3번째 카드' />

                    <Margin distance_w = '100%' distance_h = '100px'/>
                    <Subtitle 
                        text1 = '03 - 2' 
                        text2 = ' 링크연결 문제'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = '모바일 메뉴 (/profile, /history, /pipeline 등)에서 보도자료 링크가 /press 대신 /news로 잘못 연결되어 있습니다. '/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Images2 image1 = 'Diagnosis/321.png' text1 = '모바일 사이드멥'
                             image2 = 'Diagnosis/322.png' text2 = '링크연결이 잘못된 모습' />

                    <Margin distance_w = '100%' distance_h = '100px'/>
                    <Subtitle 
                        text1 = '03 - 3' 
                        text2 = ' 동일한 디자인의 웹사이트'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = '여러 제약회사 웹사이트를 조사하던 중, 프로티움 사이언스라는 회사의 웹사이트를 발견하게 되었습니다. 디자인을 살펴본 결과 현재 비체담 웹사이트와 매우 유사한 구조를 가지고 있었으며, 제작 시점 또한 2024년으로 비체담 웹사이트보다 앞서 있었습니다.'/>
                    <Text text = '////정부지원사업을 통해 웹사이트 제작을 외주로 진행하는 과정에서, 제작 업체가 프로티움 사이언스 웹사이트의 구조를 상당 부분 참고하여 제작한 것으로 추정됩니다.' />
                    <Text text = '////디자인뿐만 아니라 사용된 문구, 사이드맵 구조까지 동일한 것으로 확인됩니다. 이는 저작권 침해 분쟁으로 이어질 법적 리스크를 내포하고 있으며, 업계 관계자나 투자자가 두 사이트를 함께 접하게 될 경우 표절 의혹으로 기업 이미지에 타격을 입을 가능성도 있습니다.' />
                    <Text text = '////비체담 웹사이트를 리빌딩 해야하는 가장 중요한 이유라고 생각합니다.' />
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Images2 image1 = 'Diagnosis/331.png' text1 = '비체담 웹사이트'
                             image2 = 'Diagnosis/332.png' text2 = '타사 웹사이트' />
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Images2 image1 = 'Diagnosis/333.png' text1 = '비체담 웹사이트'
                             image2 = 'Diagnosis/334.png' text2 = '타사 웹사이트' />

                    <Margin distance_w = '100%' distance_h = '200px'/>
                    <Footer title = '• 현황 진단'/>
                </motion.div>
            </div>
        </div>
    )
}

export default Diagnosis