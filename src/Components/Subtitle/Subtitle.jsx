import { motion } from 'motion/react';

import './Subtitle.css'

function Subtitle({text1, text2}) {
    return (
        <motion.div className = 'subtitle'>
            <div></div>
            <div>{ text1 }</div>
            <div>{ text2 }</div>
        </motion.div>
    )
}

export default Subtitle