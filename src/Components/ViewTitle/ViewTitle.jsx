import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import './viewTitle.css'

function ViewTitle({ scroll, mode, setMode, contents }) {

    return (
        <motion.div className = 'viewTitle'
             initial = {{ opacity: 0, x: -20 }}
             animate = {{ opacity: 1, x: 0 }}
             transition = {{ duration: 0.7 }}>
            <motion.div 
                animate = {{ top: `${ scroll }%`,
                             y: `-${ scroll }%`
                }}
                transition = {{ ease: 'easeIn' }}
            ></motion.div>
            {contents.map((i) => (
                <div key = { i.title }
                     className = 'v_title'>
                    <p>{ i.title }</p>
                    {i.text.map((c) => (
                        <div key = { c }
                             className = 'v_contents'>
                            <p>{ c }</p>
                        </div>
                    ))}
                </div>
            ))}
        </motion.div>
    )
}

export default ViewTitle