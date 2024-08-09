import './App.css'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Features from './pages/Features'
import Hero from './pages/Hero'

function App() {
  return (
    <main className = 'max-container px-16'>
      <Nav></Nav>
      <Hero></Hero>
      <Features></Features>
      <Footer></Footer>
    </main>
  )
}

export default App
