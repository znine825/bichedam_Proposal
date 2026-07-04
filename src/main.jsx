import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css'
import Outline from './Page/1.Outline/Outline.jsx'
import Overview from './Page/2.Overview/Overview.jsx'
import Diagnosis from './Page/3.Diagnosis/Diagnosis.jsx'
import Direction from './Page/4.Direction/Direction.jsx'
import Design from './Page/5.Design/Design.jsx'
import Schedule from './Page/6.Schedule/Schedule.jsx'

createRoot(document.getElementById('root')).render(
  <div>
    <BrowserRouter>
      <Routes>
				<Route path="/" element={<Outline />}></Route>
        <Route path="/Overview" element={<Overview />}></Route>
        <Route path="/Diagnosis" element={<Diagnosis />}></Route>
        <Route path="/Direction" element={<Direction />}></Route>
        <Route path="/Design" element={<Design />}></Route>
        <Route path="/Schedule" element={<Schedule />}></Route>
			</Routes>
    </BrowserRouter>
  </div>
)
