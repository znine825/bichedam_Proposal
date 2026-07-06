import { motion } from 'motion/react';
import { accentText } from '../../JavaScript/Funtion.jsx'

import './Contents.css'

function Contents({title, count, text}) {
    return (
        <div className = 'contents'>
            <div className = 'circle'></div>
            <div>
                <p>{ count }</p>
                <p>{ title }</p>
            </div>
            <div>{accentText(text)}</div>
        </div>
    )
}

export default Contents