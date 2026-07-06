import { motion } from 'motion/react';

import './Contents.css'

function Contents({title, count, text}) {
    return (
        <div className = 'contents'>
            <div className = 'circle'></div>
            <div>
                <p>{ count }</p>
                <p>{ title }</p>
            </div>
            <div>{ text }</div>
        </div>
    )
}

export default Contents