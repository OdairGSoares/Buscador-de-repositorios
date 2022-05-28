import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Home from './components/Home';
import Repositories from './components/Repositories';

export default function Rotas() {
    return (
        <Router>
        <Routes>
            <Route path="/repositories" element={<Repositories />} />
            <Route path="/" element={<Home />} />
        </Routes>
        </Router>
    )
}