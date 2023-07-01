import { Link } from 'react-router-dom'
import './index.scss'
import Logo from '../Images/Fishes.png'

export const NavBar = () => {

    return (
        <>
            <div className='nav-bar'>
                <Link to="/">
                    <div className='logo-container' >
                        <img className='logo' src={Logo} />
                        <h1>Karp</h1>
                    </div>
                </Link>

                <div className='nav-links'>
                    <Link to="/about" className='about-container'>
                        <h2>About</h2>
                    </Link>
                    <Link to="/contact" className='contact-container'>
                        <h2>Contact</h2>
                    </Link>
                </div>
            </div>
        </>
    )
}