import './App.css'
import { Router, Routes, Route, RouterProvider, BrowserRouter } from "react-router-dom"
import Body from './components/Body'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Hero from './components/Hero'
import Login from './components/Login'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />} >
            <Route path="" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
