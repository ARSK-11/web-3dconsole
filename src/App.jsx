import { useState, useEffect } from 'react'
import Spline from '@splinetool/react-spline'
import AOS from 'aos'
import 'aos/dist/aos.css'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// font-all
import './assets/css/font-dm-sans.css'
import './assets/css/font-vamos.css'
import './assets/css/font-roboto-mono.css'
import './assets/css/pixelify-sans.css'

// styling css
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [splineLoaded, setSplineLoaded] = useState(false)
  const [shrink, setShrink] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const [contentBlur, setContentBlur] = useState(true)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  useEffect(() => {
    if (shrink) {
      AOS.refresh();
    }
  }, [shrink]);

  // Setelah Spline load, jalankan animasi shrink
  const handleSplineLoad = () => {
    setSplineLoaded(true)
  }

  return (
    <>
      {/* Navbar Transparan */}
      <nav className="navbar pixelify-sans-bold">
        <div className="nav-brand">
          <h2>Zero</h2>
        </div>
        <ul className="nav-menu roboto-mono-regular">
          <li><a className="nav-link" href="#home">Home</a></li>
          <li><a className="nav-link" href="#about">About</a></li>
          <li><a className="nav-link" href="#contact">Contact</a></li>
        </ul>
        <div className="btn-right roboto-mono-regular">
          <a className="nav-link" href="#donate">Donate Me</a>
        </div>
      </nav>
      {/* Spline sebagai background */}
      <div className='flex'>
        <div className="container jumbotron">
          <div className='sp-1'>
            {shrink && (
              <h1
                className='roboto-mono-bold'
                data-aos="fade-right"
              >
                Welcome to <span className='pixelify-sans-regular' style={{color: '#748DFD',}}>Zero!</span> Explore a new world of limitless technology and creativity.
                <img className='icons-jb' src="https://ucarecdn.com/6f4f5cff-2170-4599-9562-36aebd2c2c84/-/resize/200x/-/format/auto/-/quality/better/-/scale_crop/200x200/smart" alt="spline" />
              </h1>
            )}
            {shrink && (
                <button className='btn-link'>
                  <a href="#" className='pixelify-sans-medium'>Get Explore</a>
                </button>
            )}
            {/* <div className='emoji1'>
              {shrink && (
                <span>😀</span>
              )}
            </div> */}
          </div>
        </div>
        <div className={`spline-bg${shrink ? ' shrink' : ''}`}>
          <Spline
            scene="https://prod.spline.design/w5EQtHmAV1TVy9K1/scene.splinecode"
            onLoad={handleSplineLoad}
          />
        </div>
      </div>
      {(!shrink) && (
        <button
          className="btn-lc pixelify-sans-bold"
          style={{
            color:'whitesmoke',
          }}
          onClick={() => {
            setShrink(true)
            setShowContent(true)
            setTimeout(() => setContentBlur(false), 600)
          }}
          disabled={!splineLoaded}
        >
          Launch Now
        </button>
      )}
      {showContent && (
        <div className={`bg-content${contentBlur ? ' blur' : ''}`}>
          <div className="container roboto-mono-regular">
            <p data-aos="fade-up">
            Welcome to the future of technology! Dive in and discover endless possibilities with our innovative platform. Unleash your creativity, connect with others, and shape the digital world. Let's explore together!
            </p>
            <br />
            <br />
          </div>
        </div>
      )}
    </>
  )
}

export default App
