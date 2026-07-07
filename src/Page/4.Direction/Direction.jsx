import { motion } from 'motion/react';

import './Direction.css'
import '../Page.css'
import Header from '../../Components/Header/Header.jsx'
import Index from '../../Components/Index/Index.jsx'

function Direction() {
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
                    <motion.div
                        className = 'line'
                        initial = {{ scaleY: 0 }}
                        animate = {{ scaleY: 1 }}
                        transition = {{ duration: 0.5, 
                                        delay: 0.8,
                                        ease: 'easeIn'}}></motion.div>
                </aside>
            </div>
        </div>
    )
}

export default Direction