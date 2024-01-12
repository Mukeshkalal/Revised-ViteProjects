import CustomStyle from './navigation.module.css';
function Navigation() {
    return (
        <nav>
            <div className="logo">logo</div>
            <div className={CustomStyle.navbar}>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Contact Me</a></li>
                    <li><a href="">SingUp</a></li>
                    <li><a href="">Login</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation
