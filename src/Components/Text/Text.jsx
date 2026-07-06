import { motion } from 'motion/react';

import './Text.css'

function Text({text1}) {
    return (
        <motion.div className = 'text'>
            <div>{ text1 }</div>
        </motion.div>
    )
}

export default Text