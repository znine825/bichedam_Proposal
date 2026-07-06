import { motion } from 'motion/react';

import './Images.css'

export function Images1({image1, 
                        text1}) {
    return (
        <motion.div className = 'images1'>
            <div>
                <img src = { image1 }></img>
                <div>{ text1 }</div>
            </div>
        </motion.div>
    )
}

export function Images2({image1, image2, 
                        text1, text2}) {
    return (
        <motion.div className = 'images2'>
            <div>
                <img src = { image1 }></img>
                <div>{ text1 }</div>
            </div>
            <div>
                <img src = { image2 }></img>
                <div>{ text2 }</div>
            </div>
        </motion.div>
    )
}

export function Images3({image1, image2, image3,
                        text1, text2, text3}) {
    return (
        <motion.div className = 'images3'>
            <div>
                <img src = { image1 }></img>
                <div>{ text1 }</div>
            </div>
            <div>
                <img src = { image2 }></img>
                <div>{ text2 }</div>
            </div>
            <div>
                <img src = { image3 }></img>
                <div>{ text3 }</div>
            </div>
        </motion.div>
    )
}

export function Images4({image1, image2, image3, image4,
                        text1, text2, text3, text4}) {
    return (
        <motion.div className = 'images4'>
            <div>
                <img src = { image1 }></img>
                <div>{ text1 }</div>
            </div>
            <div>
                <img src = { image2 }></img>
                <div>{ text2 }</div>
            </div>
            <div>
                <img src = { image3 }></img>
                <div>{ text3 }</div>
            </div>
            <div>
                <img src = { image4 }></img>
                <div>{ text4 }</div>
            </div>
        </motion.div>
    )
}

