import './App.css'
import { Footer } from './components/footer'
import { Navbar } from './components/navbar'
import { Home } from './pages/home'

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
    </div>
  )
}

export default App
