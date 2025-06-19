import './App.css'
import { Router, Routes, Route, RouterProvider, BrowserRouter, Navigate } from "react-router-dom"
import Body from './components/Body'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Hero from './components/Hero'
import Login from './components/Login'
import { Provider } from 'react-redux'
import appStore from './utils/store/store'
import PageNotFound from './components/PageNotFound'
import Profile from './components/Profile'

function App() {

  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Body />} >
              <Route path="/profile/:userId?" element={<Profile />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/404" element={<PageNotFound />} />
              <Route path="*" element={<Navigate to="/404" />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
