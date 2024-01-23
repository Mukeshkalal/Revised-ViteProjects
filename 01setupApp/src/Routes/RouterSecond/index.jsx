import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "../../pages/Home"
import Contact from "../../pages/Contact"
import Register from "../../pages/auth/Register"
import Login from "../../pages/auth/Login"
import Dashboard from "../../pages/Dashboard"
import Exams from "../../pages/Exams"

function RouterSecond() {
    const routes = createBrowserRouter([
        {
            path: '*',
            element: <h1>404 page Is Not Fund</h1>
        },
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/contact',
            element: <Contact />
        },
        {
            path: '/register',
            element: <Register />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/dashboard',
            element: <Dashboard />
        },
        {
            path: '/exams',
            element: <Exams />
        },
    ])
    return (
        <RouterProvider router={routes}></RouterProvider>

    )
}

export default RouterSecond
