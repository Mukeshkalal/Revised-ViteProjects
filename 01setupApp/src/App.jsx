import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
function App() {

  return (
    <Router>
      <Routes>
        <Route path='*' element={<h1>404 Page in not Found</h1>} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
