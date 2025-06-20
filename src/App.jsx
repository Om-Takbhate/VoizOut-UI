import './App.css'
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import Body from './components/Body'
import Home from './components/Home'
import Login from './components/Login'
import { Provider } from 'react-redux'
import appStore from './utils/store/store'
import PageNotFound from './components/PageNotFound'
import Profile from './components/Profile'
import UpdateProfile from './components/UpdateProfile'
import Opportunities from './components/Opportunities'
import OpportunitiesDescription from './components/OpportunitiesDescription'

function App() {

  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Body />} >
              <Route path="/opportunities/description/:jobId" element={<OpportunitiesDescription />} />
              <Route path="/opportunities/:type" element={<Opportunities />} />
              <Route path="/profile/:userId?" element={<Profile />} />
              <Route path="/profile/edit" element={<UpdateProfile />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/404" element={<PageNotFound />} />
              <Route path="" element={<Navigate to="/home" />} />
              <Route path="*" element={<Navigate to="/404" />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
