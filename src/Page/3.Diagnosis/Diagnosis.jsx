import { motion } from 'motion/react';

import './Diagnosis.css'
import '../Page.css'
import Header from '../../Components/Header/Header.jsx'
import Title from '../../Components/Title/Title.jsx'

function Diagnosis() {
    return (
        <div>
            <Header page = '/Diagnosis'/>
            <div className = 'body'>
                <aside>
                    <Title 
                        text1 = 'DIAGNOSIS · 03'
                        text2 = '현황'
                        text3 = '진단'
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

export default Diagnosis