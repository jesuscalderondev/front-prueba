import { useState } from 'react';
import { Logo } from './Logo';
import { Link } from 'react-router-dom';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    
    return (
        <>
            <header className="mt-15">
                <div className="container flex justify-between items-center sm:px-20 px-4">
                    <Link className="flex items-center gap-2" to="/">
                        <Logo />
                        <span className='text-xl font-bold'>Book Store</span>
                    </Link>

                    <nav className="nav hidden lg:flex" id="siteNav" role="navigation">
                        <div className="flex gap-8 items-center">
                            <a className='font-bold' href="#">Home</a>
                            <a className='font-bold' href="#">About us</a>
                            <a className='font-bold' href="#">Courses</a>
                            <a className='font-bold' href="#">Our Service</a>
                            <a className='font-bold' href="#">Contact us</a>
                            <Link to="#" className="bg-purple-950/85 text-white font-bold rounded-full px-10 py-3 hover:bg-purple-900 transition duration-200 ease-in-out">Sign in</Link>
                        </div>

                    </nav>

                    <button
                        className={`sm:hidden rounded-full bg-purple-950/85 text-white font-bold px-4 py-2 hover:bg-purple-900 transition duration-200 ease-in-out ${isMenuOpen ? 'open' : ''}`}
                        id="menuButton"
                        onClick={toggleMenu}
                    >
                        Menu
                    </button>
                </div>
            </header>

            <nav className={`sm:hidden flex justify-center items-center top-x flex-col fixed flex bg-white w-full h-full transition duration-200 ease-in-out ${isMenuOpen ? 'open opacity-100 z-100 -mt-25' : 'opacity-0 z-10'}`} id="mobileNav" role="navigation">
                <div className="flex flex-col justify-center items-center gap-8">
                    <a className='font-bold' href="#" onClick={() => setIsMenuOpen(false)}>Home</a>
                    <a className='font-bold' href="#" onClick={() => setIsMenuOpen(false)}>About us</a>
                    <a className='font-bold' href="#" onClick={() => setIsMenuOpen(false)}>Courses</a>
                    <a className='font-bold' href="#" onClick={() => setIsMenuOpen(false)}>Our Service</a>
                    <a className='font-bold' href="#" onClick={() => setIsMenuOpen(false)}>Contact us</a>
                    <a className='font-bold' href="#" onClick={() => setIsMenuOpen(false)}>Contact us</a>
                    <a className='font-bold' href="#" onClick={() => setIsMenuOpen(false)}>Close</a>
                </div>
            </nav>
            {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
        </>
    );
};