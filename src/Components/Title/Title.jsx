import { motion } from 'motion/react';

import './Title.css'
import Header from '../Header/Header.jsx'

function Title({text1, text2, text3}) {
    return (
        <motion.div 
            className = 'title'
            initial = {{ opacity: 0, x: -20 }}
            animate = {{ opacity: 1, x: 0 }}
            transition = {{ duration: 0.7 }}>
            <div>
                <div></div>
                <p>{ text1 }</p>
            </div>
            <p>{ text2 }</p>
            <p>{ text3 }</p>
        </motion.div>
    )
}

export default Title