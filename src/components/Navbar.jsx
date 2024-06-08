import logo from '../assets/logo.png';

export default function Navbar() {
    return (
        <nav className="border-b-2 border-black flex items-center justify-between pr-5 pl-5">
            <img className='w-[100px]' src={logo} alt="Logo" />
            <p className='text-[#00B4D8]'> Usuario </p>
        </nav>
    )
}