import { useState } from 'react'
import { motion } from 'motion/react';
import './viewMode.css'

function ViewMode({ mode, setMode }) {
    return (
        <div className = 'viewMode'>
            <motion.div
                className = 'activeBg'
                animate = {{ x : mode === 1 ? 0 : '100%',
                             borderRadius : mode === 1 ? '10px 0px 0px 10px' : '0px 10px 10px 0px'
                }}
                transition = {{ duration: 0.3, ease: 'easeInOut' }}>
            </motion.div>
            <div onClick = {() => setMode(1)}>
                <p style = {{ color : mode ? '#FFFFFF' : '#FFFFFF20'}}>따로보기</p>
            </div>
            <div onClick = {() => setMode(0)}>
                <p style = {{ color : !mode ? '#FFFFFF' : '#FFFFFF20'}}>전체보기</p>
            </div>
        </div>
    )
}

export default ViewMode