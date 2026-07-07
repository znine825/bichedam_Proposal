import { motion } from 'motion/react';
import Header from '../../Components/Header/Header.jsx'
import Index from '../../Components/Index/Index.jsx'
import { Text, Title, Subtitle, Margin, Images1, Images2, Images3 } from '../../Components/Common/Common.jsx'

import './Overview.css'
import '../Page.css'

function Overview() {
    return (
        <div>
            <Header page = '/Overview'/>
            <div className = 'body'>
                <aside>
                    <Index 
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
                    <Title 
                        title = '문제인식'
                        count = '01'
                        text = '현재 웹사이트에서는 여러 **기술적 오류**와 **오래된 UI**가 반복적으로 발견되고 있습니다. 이러한 문제들은 단순한 불편을 넘어 사용자의 이탈과 신뢰 저하로 이어지고 있으며, 브랜드 이미지에도 직접적인 영향을 미칩니다. 아래는 실제로 확인된 대표적인 문제 사례입니다.'/>
                    
                    <Margin distance_w = '100%' distance_h = '50px'/>
                    <Subtitle 
                        text1 = '01 - 1' 
                        text2 = '콘텐츠 완성도'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Images2 image1 = 'Overview/111.png' image2 = 'Overview/112.png'
                             text1 = '오른쪽으로 슬라이드할 경우//같은 카드가 반복되는 모습'
                             text2 = '문의하기를 반복클릭할 경우//오류 메시지가 누적되는 모습'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = '위 내용뿐만 아니라 다른 탭에서도 **다수의 버그**가 발견되었습니다. 이러한 문제들은 웹사이트의 완성도를 저하시키며, 기업 이미지와 신뢰성에 **부정적인 영향**을 줄 수 있습니다. ////다른 문제점들은 진단 부분에서 더 자세히 설명하겠습니다.'/>
                    
                    <Margin distance_w = '100%' distance_h = '200px'/>
                    <Subtitle 
                        text1 = '01 - 2' 
                        text2 = '콘텐츠 완성도'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = '동일한 카드형 컴포넌트가 웹사이트 전반에 걸쳐 **반복적으로 사용**되고 있습니다. 해당 요소는 마우스 오버 시 테두리 색상이 변경되어 상호작용이 가능한 버튼처럼 인식되지만, 실제로는 클릭 기능이 제공되지 않아 사용자의 혼란을 유발할 수 있습니다. ////특히 **판매처** 부분이 가장 큰 혼란을 유발하고 있습니다.'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Images2 image1 = 'Overview/121.png' image2 = 'Overview/122.png'
                             text1 = '보도자료 카드'
                             text2 = 'G케어 카드'/>
                    <Margin distance_w = '100%' distance_h = '20px'/>
                    <Images2 image1 = 'Overview/123.png' image2 = 'Overview/124.png'
                             text1 = '판매처 카드'
                             text2 = 'G케어 제품구성 카드'/>



                    <Margin distance_w = '100%' distance_h = '200px'/>
                    <Title 
                        title = '해결방안'
                        count = '02'
                        text = '기존 비체담 웹사이트는 페이지 이동 시마다 전체 페이지를 새로 불러오는 구조로 인해 로딩 속도가 느리고 다양한 기기환경에서 레이아웃이 맞지않는 문제가 발생하고 있습니다.'/>
                    
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Subtitle 
                        text1 = '02 - 1' 
                        text2 = '리액트'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Images3 image1 = 'Overview/211.png' image2 = 'Overview/212.png' image3 = 'Overview/213.png'
                             text1 = '모바일 화면에서는//작아지는 모습'
                             text2 = '화면 비율이 세로로길면//사진이 잘리는 모습'
                             text3 = '사이드 멥이 잘리는 모습'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = 'React 프레임워크는 컴포넌트 단위로 UI 를 구성하기 때문에 반응형 웹사이트 개발을 체계적, 단기적으로 구현할 수 있습니다.////또한 React는 Virtual DOM 방식을 사용해 웹환경에서 변경된 부분만 선택적으로 재로딩을 하는 기능을 이용해 초기 로딩 시간을 크게 단축할 수 있습니다.//지금 이 페이지도 같은 컴포넌트를 반복 활용하여 단기간에 제작하였습니다.'></Text>
                    
                    <Margin distance_w = '100%' distance_h = '200px'/>
                    <Subtitle 
                        text1 = '02 - 1' 
                        text2 = '디자인 개편'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = '기존 비체담 웹사이트는 단순한 정보 나열 중심의 구조로 구성되어 있어, 방문자가 원하는 정보를 직관적으로 찾기 어렵고 페이지에 머무르는 시간이 짧다는 한계가 있었습니다. ////이를 해결하기 위해 정보 제공 중심에서 사용자 경험 중심으로 디자인을 개편하고자 합니다.'/>

                    <Margin distance_w = '100%' distance_h = '200px'/>
                    <Title 
                        title = '기대효과'
                        count = '03'
                        text = ''/>
                    <Margin distance_w = '100%' distance_h = '50px'/>
                    <Subtitle 
                        text1 = '03 - 1' 
                        text2 = '사용자 접근성 및 편의성 향상'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = 'React 기반의  반응형 디자인 적용으로 PC, 태블릿, 모바일 등 어떤 기기에서 접속하더라도 끊김 없이 빠르고 일관된 화면을 제공할 수 있습니다. 이는 방문자의 이탈률을 줄이고 첫인상에서부터 긍정적인 경험을 제공하는 기반이 됩니다.'/>
                    <Margin distance_w = '100%' distance_h = '100px'/>
                    <Subtitle 
                        text1 = '03 - 2' 
                        text2 = '브랜드 신뢰도 및 전문성 강화'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = '완성도 높은 비주얼 디자인은 비체담에 대한 신뢰감을 높이고, 경쟁사 대비 차별화된 이미지를 형성하는 데 기여합니다.'/>
                    <Margin distance_w = '100%' distance_h = '100px'/>
                    <Subtitle 
                        text1 = '03 - 3' 
                        text2 = '장기적인 유지보수 효율성 향상'/>
                    <Margin distance_w = '100%' distance_h = '30px'/>
                    <Text text = 'React의 컴포넌트 기반 구조는 향후 콘텐츠 추가나 기능 확장 시 전체를 수정하지 않고 필요한 부분만 빠르게 업데이트할 수 있어 운영 비용과 시간을 절감할 수 있습니다.'/>
                </motion.div>  
            </div>
        </div>
    )
}

export default Overview