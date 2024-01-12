import './App.css'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Container from './components/Container'
function App() {

  return (
    <>
      <Router>
        <Navigation />
        <Container>
          <main style={{ minHeight: '70vh' }}>
            <Routes>
              <Route path='*' element={<h1>404 Page in not Found</h1>} />
              <Route path='/' element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='blog' element={<Blog />} />
              <Route path='contact' element={<Contact />} />
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </main>
        </Container>
        <Footer />
      </Router>
      {/* <Home />
      <About />
      <Blog />
      <Contact />
      <Register />
      <Login /> */}

    </>
  )
}

export default App
