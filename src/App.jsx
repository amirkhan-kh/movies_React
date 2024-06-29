import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from '../src/routes/home/Home'
import Auth from '../src/routes/auth/Auth'
import Nav from '../src/componets/nav/Nav'
function App() {
  return (
    <>
    <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={<Auth/>}/>
      </Routes>
    </>
  )
}

export default App