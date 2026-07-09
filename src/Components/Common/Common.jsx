import { motion } from 'motion/react';
import { accentText } from '../../JavaScript/Funtion.jsx'
import './Common.css'

export function Text({text}) {
    return (
        <motion.div className = 'text'>
            <div>{ accentText(text) }</div>
        </motion.div>
    )
}

export function Margin({distance_w, distance_h}) {
    return (
        <div style = {{ width : `${distance_w}`, height : `${distance_h}`, flexShrink: 0 }}></div>
    )
}

export function Title({title, count, text}) {
    return (
        <div className = 'title'>
            <div className = 'circle'></div>
            <div>
                <p>{ count }</p>
                <p>{ title }</p>
            </div>
            <Margin distance_w = '100%' distance_h = '30px' />
            <div>{ accentText(text) }</div>
        </div>
    )
}

export function Subtitle({text1, text2}) {
    return (
        <motion.div className = 'subtitle'>
            <div></div>
            <div>{ text1 }</div>
            <div>{ text2 }</div>
        </motion.div>
    )
}

export function Images1({image1, 
                        text1}) {
    return (
        <motion.div className = 'images1'>
                <img src = { image1 }></img>
                <Margin distance_w = '100%' distance_h = '10px' />
                <div><p className = 'imageP'>{ accentText(text1) }</p></div>
        </motion.div>
    )
}

export function Images2({image1, image2, 
                        text1, text2}) {
    return (
        <motion.div className = 'images2'>
            <div>
                <img src = { image1 }></img>
                <Margin distance_w = '100%' distance_h = '10px' />
                <div><p className = 'imageP'>{ accentText(text1) }</p></div>
            </div>
            <div>
                <img src = { image2 }></img>
                <Margin distance_w = '100%' distance_h = '10px' />
                <div><p className = 'imageP'>{ accentText(text2) }</p></div>
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
                <Margin distance_w = '100%' distance_h = '10px' />
                <div><p className = 'imageP'>{ accentText(text1) }</p></div>
            </div>
            <div>
                <img src = { image2 }></img>
                <Margin distance_w = '100%' distance_h = '10px' />
                <div><p className = 'imageP'>{ accentText(text2) }</p></div>
            </div>
            <div>
                <img src = { image3 }></img>
                <Margin distance_w = '100%' distance_h = '10px' />
                <div><p className = 'imageP'>{ accentText(text3) }</p></div>
            </div>
        </motion.div>
    )
}

export function MoodBoard({image1, image2, width, height,
                           text1, text2}) {
    return (
        <div className = 'images2'>
            <div>
                <img src = { image1 }
                     style = {{width : `${width}`, height : `${height}`}}></img>
                <Margin distance_w = '100%' distance_h = '10px' />
                <div><p className = 'imageP'
                        style = {{width : `${width}`}}>{ accentText(text1) }</p></div>
            </div>
            <div>
                <img src = { image2 }
                     style = {{width : `${width}`, height : `${height}`}}></img>
                <Margin distance_w = '100%' distance_h = '10px' />
                <div><p className = 'imageP'
                        style = {{width : `${width}`}}>{ accentText(text2) }</p></div>
            </div>
        </div>
    )
}
