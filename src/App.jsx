import './App.css'
import Nav from './components/Nav'
import Hero from './pages/Hero'

function App() {
  return (
    <main className = 'max-container px-16'>
      <Nav></Nav>
      <Hero></Hero>
      <div>hero</div>
      <div>features</div>
      <div>footer</div>
    </main>
  )
}

export default App
