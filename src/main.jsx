import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './index.css'
import Home from './Page/0.Home/Home.jsx'
import Outline from './Page/1.Outline/Outline.jsx'
import Overview from './Page/2.Overview/Overview.jsx'
import Diagnosis from './Page/3.Diagnosis/Diagnosis.jsx'
import Direction from './Page/4.Direction/Direction.jsx'
import Design from './Page/5.Design/Design.jsx'
import Schedule from './Page/6.Schedule/Schedule.jsx'

function App() {
    const [scale, setScale] = useState(0.9);

    useEffect(() => {
        const handleResize = () => {
            const baseWidth = 1920;
            const baseScale = 0.9;
            const newScale = (window.innerWidth / baseWidth) * baseScale;
            setScale(newScale);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }}>
            <BrowserRouter basename="/bichedam_Proposal">
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/Outline" element={<Outline />}></Route>
                    <Route path="/Overview" element={<Overview />}></Route>
                    <Route path="/Diagnosis" element={<Diagnosis />}></Route>
                    <Route path="/Direction" element={<Direction />}></Route>
                    <Route path="/Design" element={<Design />}></Route>
                    <Route path="/Schedule" element={<Schedule />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

createRoot(document.getElementById('root')).render(<App />)