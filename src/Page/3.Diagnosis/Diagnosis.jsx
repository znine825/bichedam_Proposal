import { motion } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import Header from '../../Components/Header/Header.jsx'
import Footer from '../../Components/Footer/Footer.jsx'
import Index from '../../Components/Index/Index.jsx'
import ViewMode from '../../Components/ViewMode/ViewMode.jsx'
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
                    
                    <Margin distance_w = '100%' distance_h = '50px'/>
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
                        text = '웹 개발에서 디자인적인 부분의 문제입니다. 일관되지 않은 디자인으로 인해 생기는 시각적 문제를 나열했습니다.'/>
                </motion.div>
            </div>
        </div>
    )
}

export default Diagnosis