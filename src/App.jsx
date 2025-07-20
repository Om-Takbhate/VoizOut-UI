import './App.css'
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import Body from './components/Body'
import Home from './components/Home'
import { Provider } from 'react-redux'
import appStore from './utils/store/store'
import { lazy, Suspense } from 'react'
import Loader from './components/Loader'
import { PAGE_NOT_FOUND_DESCRIPTION } from './utils/constants'
import Experiences from './components/Experiences'
import ExperienceDescription from './components/ExperienceDescription'
import PostExperience from './components/PostExperience'

const PageNotFound = lazy(() => import("./components/PageNotFound"))
const Profile = lazy(() => import("./components/Profile"))
const Opportunities = lazy(() => import("./components/Opportunities"))
const UpdateProfile = lazy(() => import("./components/UpdateProfile"))
const OpportunitiesDescription = lazy(() => import("./components/OpportunitiesDescription"))
const Login = lazy(() => import("./components/Login"))


function App() {

  return (
    <>
      <Suspense fallback={<Loader />} >
        <Provider store={appStore}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Body />} >
                <Route path="/opportunities/description/:jobId" element={<OpportunitiesDescription />} />
                <Route path="/opportunities/:type" element={<Opportunities />} />
                <Route path="/profile/:userId?" element={<Profile />} />
                <Route path="/profile/edit" element={<UpdateProfile />} />
                <Route path="/home" element={<Home />} />
                <Route path="/experiences" element={<Experiences />} />
                <Route path="/experiences/new" element={<PostExperience />} />
                <Route path="/experiences/:experienceId" element={<ExperienceDescription />} />
                <Route path="/login" element={<Login />} />
                <Route path="/404" element={<PageNotFound description={PAGE_NOT_FOUND_DESCRIPTION} />} title={"Page Not Found"} />
                <Route path="" element={<Navigate to="/home" />} />
                <Route path="*" element={<Navigate to="/404" />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </>
  )
}

export default App
