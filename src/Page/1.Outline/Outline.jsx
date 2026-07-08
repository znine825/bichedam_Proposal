import { motion } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import Header from '../../Components/Header/Header.jsx'
import Footer from '../../Components/Footer/Footer.jsx'
import Index from '../../Components/Index/Index.jsx'
import ViewTitle from '../../Components/ViewTitle/ViewTitle.jsx'
import { Text, Title, Subtitle, Margin, Images1, Images2, Images3 } from '../../Components/Common/Common.jsx'
import { Outline_Text } from '../../JavaScript/Contents_Text.js'

import './Outline.css'
import '../Page.css'

function Outline() {

    return (
        <div>
            <Header page = '/'/>
            <div className = 'body'>
                <aside>
                    <Index 
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
                    {Outline_Text.map((item) => (
                        <div>
                            <Title 
                                key={item.count}
                                title={item.title}
                                count={item.count}
                                text={item.text}
                            />
                            <Margin distance_w = '100%' distance_h = '100px'/>
                        </div>
                    ))}
                </motion.div>  
            </div>
        </div>
    )
}

export default Outline