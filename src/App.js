import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Crtacc from './Crtacc.js';
import RenderBchart from './RenderBChart';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Crtacc/>} />
                <Route path='/RenderBChart' element={<RenderBchart />} />
            </Routes>
        </Router>
    )
}

export default App