import { motion } from 'motion/react';

import './Schedule.css'
import '../Page.css'
import Header from '../../Components/Header/Header.jsx'
import Index from '../../Components/Index/Index.jsx'

function Schedule() {
    return (
        <div>
            <Header page = '/Schedule'/>
            <div className = 'body'>
                <aside>
                    <Index 
                        text1 = 'SCHEDULE · 06'
                        text2 = '개발'
                        text3 = '일정'
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

export default Schedule