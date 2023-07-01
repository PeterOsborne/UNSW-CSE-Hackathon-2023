import { Link } from 'react-router-dom'
import './index.scss'
import Logo from '../Images/Fishes.png'

export const NavBar = () => {

    return (
        <>
            <div className='nav-bar'>
                <div className="flex flex-col p-3">
                    <div className="flex justify-end">
                        <div className="grid grid-cols-3">
                            <div className='p-2'>
                                <div className='bg-white rounded-lg shadow-md flex justify-center items-center'>
                                    <div className="w-2/12 h-4/12">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div className="font-medium size-md text-l">Sign In</div>
                                </div>
                            </div>
                            <div className='p-2'>
                                <div className='bg-white rounded-lg shadow-md flex justify-center items-center'>
                                    <div className="w-2/12 h-4/12">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                                        </svg>
                                    </div>
                                    <div className="font-medium size-md text-l">Satellite View</div>
                                </div>
                            </div>

                            <div className='p-2'>
                                <div className='logo-container bg-white rounded-lg shadow-md' >
                                    <img className='logo' src={Logo} />
                                    <h1>Karp</h1>
                                </div>
                            </div>
                            
                            <div></div>
                            <div></div>
                            <div className='p-2'>
                                <div className='bg-white rounded-lg shadow-md flex justify-center items-center'>
                                    <div className="w-2/12 h-4/12">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                        </svg>
                                    </div>
                                    <div className="font-medium size-md text-l">
                                        <Link to="/about" className='about-container bg-white rounded-lg shadow-md'>
                                            <h2 className='logo-container bg-white rounded-lg shadow-md'>About</h2>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div></div>
                            <div></div>
                            <div className='p-2'>
                                <div className='bg-white rounded-lg shadow-md flex justify-center items-center'>
                                    <div className="w-2/12 h-4/12">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                                        </svg>
                                    </div>
                                    <div className="font-medium size-md text-l">
                                        <Link to="/contact" className='contact-container bg-white rounded-lg shadow-md'>
                                            <h2 className='logo-container bg-white rounded-lg shadow-md'>Contact</h2>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}