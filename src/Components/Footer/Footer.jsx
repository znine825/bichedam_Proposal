import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import './Footer.css'

function Footer({ title }) {

    return (
        <div className = 'footer'>
            <p>{ title }</p>
            <p>© 2026 DETAILED. ALL Rights Reserved.</p>
            <p>DETAILED</p>
        </div>
    )
}

export default Footer