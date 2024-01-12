import { NavLink } from 'react-router-dom';
import CustomStyle from './navigation.module.css';
function Navigation() {
    return (
        <nav>
            <div className="logo">logo</div>
            <div className={CustomStyle.navbar}>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/blog">Blog</NavLink></li>
                    <li><NavLink to="/contact">Contact Me</NavLink></li>
                    <li><NavLink to="/register">SingUp</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation
