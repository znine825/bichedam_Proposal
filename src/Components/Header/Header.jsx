import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

import './Header.css';

const CS = {
    'Text' : {
        'on' : '#FFFFFF',
        'off' : '#FFFFFF20'
    },
    'Background' : {
        'on' : '#FFFFFF10',
        'off' : '#FFFFFF00'
    },
    'Border' : {
        'on' : '#5B8DEF',
        'off' : '#FFFFFF00'
    }
};

function Contents({ where, text }) {

    const [hover, setHover] = useState(false);

    return (
        <div className = 'contents'
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style = {{ 
                backgroundColor : where ? CS['Background']['on'] : hover ? '#FFFFFF10' : CS['Background']['off'],
                transition: 'background-color 0.3s'
            }}
        >
            <p style = {{ 
                color : where ? CS['Text']['on'] : hover ? '#FFFFFF80' : CS['Text']['off'],
                transition: 'color 0.3s'
            }}>
                { text }
            </p>
            <motion.div
                initial = {{ scaleX: 0 }}
                animate = {{ scaleX: (where || hover) ? 1 : 0 }}
                transition = {{ duration: 0.3 }}
                style = {{ 
                    borderBottom : `2px solid ${ where ? CS['Border']['on'] : hover ? '#5B8DEF' : CS['Border']['off'] }`,
            }}
            />
        </div>
    )
}

function Header({ page }) {

    const [Select, SetSelect] = useState([1, 0, 0, 0, 0, 0]);
    
    useEffect(() => {
        if (page == '/') {
            SetSelect([1, 0, 0, 0, 0, 0]);
        } else if (page == '/Overview') {
            SetSelect([0, 1, 0, 0, 0, 0]);
        } else if (page == '/Diagnosis') {
            SetSelect([0, 0, 1, 0, 0, 0]);
        } else if (page == '/Direction') {
            SetSelect([0, 0, 0, 1, 0, 0]);
        } else if (page == '/Design') {
            SetSelect([0, 0, 0, 0, 1, 0]);
        } else if (page == '/Schedule') {
            SetSelect([0, 0, 0, 0, 0, 1]);
        }
    }, [page]);

    

    return (
        <motion.div
            initial = {{ opacity: 0, y: -20 }}
            animate = {{ opacity: 1, y: 0 }}
            transition = {{ duration: 0.7 }}
        >
            <div className = 'header'>
                <p>비체담 웹사이트 리빌딩 제안서</p>
                <div className = 'menu'>
                    <Link to="/">
                        <Contents where = { Select[0] } text = '목차' />
                    </Link>
                    <Link to="/Overview">
                        <Contents where = { Select[1] } text = '개요' />
                    </Link>
                    <Link to="/Diagnosis">
                        <Contents where = { Select[2] } text = '진단' />
                    </Link>
                    <Link to="/Direction">
                        <Contents where = { Select[3] } text = '방향' />
                    </Link>
                    <Link to="/Design">
                        <Contents where = { Select[4] } text = '디자인' />
                    </Link>
                    <Link to="/Schedule">
                        <Contents where = { Select[5] } text = '일정' />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}

export default Header;