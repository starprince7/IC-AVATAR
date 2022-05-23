import * as React from 'react'
import { avatar } from "../../declarations/avatar";
import AvatarForm from './components/AvatarForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path='/' element={<AvatarForm />} />
                </Routes>
        </BrowserRouter>
    )
}

export default App