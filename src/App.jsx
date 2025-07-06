import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ToastContainer } from 'react-toastify';
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer/>
    <Header/>
    <About/>
    <Projects/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App
