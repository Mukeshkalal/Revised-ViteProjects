import { Link } from 'react-router-dom';
import CustomStyle from './navigation.module.css';
function Navigation() {
    return (
        <nav>
            <div className="logo">logo</div>
            <div className={CustomStyle.navbar}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact Me</Link></li>
                    <li><Link to="/register">SingUp</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation
