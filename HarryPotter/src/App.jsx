import './App.css'
import Login from './components/Login/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register/Register';
import Menu from './components/Menu/Menu';
import Characters from './pages/Characters/Characters';
import Staff from './pages/Staff/Staff';
import Houses from './pages/Houses/Houses';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={ <Login /> } />
          <Route path="/register" target="_blank" element={ <Register /> }/>
          <Route path="/menu" target="_blank" element={ <Menu />} />
          <Route path="/menu/characters" element={ <Characters />} />
          <Route path="/menu/staff" element={ <Staff />} />
          <Route path="/menu/houses" element={ <Houses />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
