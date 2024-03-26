import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {useState} from 'react'
import LoginForm from './components/LoginForm'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Gamming from './components/Gamming'
import SavedVideo from './components/SavedVideo'
import VideoPlay from './components/VideoPlay'
import Trending from './components/Treanding'
import Template from './components/Template/HomeTem'
import Theme from './components/Context'
import './App.css'

const App = () => {
  const [themeDark, setThemeDark] = useState(false)
  const [video, setVideo] = useState([])
  return (
    <BrowserRouter>
      <Theme.Provider value={{themeDark, setThemeDark, video, setVideo}}>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Template>
                  <Home />
                </Template>
              </ProtectedRoute>
            }
          />
          <Route
            path="/videos/:id"
            element={
              <ProtectedRoute>
                <Template>
                  <VideoPlay />
                </Template>
              </ProtectedRoute>
            }
          />
          <Route
            path="/trending"
            element={
              <ProtectedRoute>
                <Template>
                  <Trending />
                </Template>
              </ProtectedRoute>
            }
          />
          <Route
            path="/gamming"
            element={
              <ProtectedRoute>
                <Template>
                  <Gamming />
                </Template>
              </ProtectedRoute>
            }
          />
          <Route
            path="/saved_videos"
            element={
              <ProtectedRoute>
                <Template>
                  <SavedVideo />
                </Template>
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </Theme.Provider>
    </BrowserRouter>
  )
}

export default App
