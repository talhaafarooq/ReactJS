import React from 'react';
import Index from './crud/Index';
import Edit from './crud/Edit';
import NotFound from './crud/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Index />} />
                    <Route exact path='/edit/:id' element={<Edit />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
