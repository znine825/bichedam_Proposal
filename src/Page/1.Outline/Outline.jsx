import { motion } from 'motion/react';
import { Outline_Text } from '../../JavaScript/Contents_Text.js'
import Header from '../../Components/Header/Header.jsx'
import Contents from '../../Components/Contents/Contents.jsx'
import Title from '../../Components/Title/Title.jsx'

import './Outline.css'
import '../Page.css'

function Outline() {
    return (
        <div>
            <Header page = '/'/>
            <div className = 'body'>
                <aside>
                    <Title 
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
                        <Contents 
                            key={item.count}
                            title={item.title}
                            count={item.count}
                            text={item.text}
                        />
                    ))}
                </motion.div>  
            </div>
        </div>
    )
}

export default Outline