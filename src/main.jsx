import ReactDOM, { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom';
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
        <div>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Home size = { scale }/>}></Route>
                    <Route path="/Outline" element={<Outline size = { scale }/>}></Route>
                    <Route path="/Overview" element={<Overview size = { scale } />}></Route>
                    <Route path="/Diagnosis" element={<Diagnosis size = { scale } />}></Route>
                    <Route path="/Direction" element={<Direction size = { scale } />}></Route>
                    <Route path="/Design" element={<Design size = { scale } />}></Route>
                    <Route path="/Schedule" element={<Schedule size = { scale } />}></Route>
                </Routes>
            </HashRouter>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)
