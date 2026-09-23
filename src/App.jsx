import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('*')

    elements.forEach((element) => {
      if (element.scrollWidth > element.clientWidth) {
        console.log(
          'ELEMENTO COM OVERFLOW:',
          element,
          'scrollWidth:',
          element.scrollWidth,
          'clientWidth:',
          element.clientWidth
        )
      }
    })
  }, [])

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App