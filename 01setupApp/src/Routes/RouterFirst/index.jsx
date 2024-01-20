import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../../pages/Home"
import About from "../../pages/About"
import Blog from "../../pages/Blog"
import Contact from "../../pages/Contact"
import Register from "../../pages/auth/Register"
import Login from "../../pages/auth/Login"
import Dashboard from "../../pages/Dashboard"

function RouterFirst() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<h1>404 Page in not Found</h1>} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterFirst
