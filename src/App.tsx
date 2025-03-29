import { useState } from 'react'
import './global.css'
import UploadPage from './pages/UploadPage'
import LandingPage from './pages/LandingPage'

function App() {

  return (
    <>
      {/* use react router to do landing to upload pages */}
      {/* <LandingPage /> */}
      <UploadPage />
    </>
  )
}

export default App
