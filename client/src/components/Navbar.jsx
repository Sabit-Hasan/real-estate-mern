import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="bg-black shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        {/* Site Title */}
        <Link to='/'>
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-white">Real</span>
            <span className="text-slate-500">Estate</span>
          </h1>
        </Link>

        {/* Search Area */}
        <form className="bg-slate-200 p-2 rounded-lg flex items-center">
          <input type="text" name="search" id="search" placeholder="Search..." className="bg-transparent focus:outline-none w-24 sm:w-64" />
          <FaSearch className='text-slate-400' />
        </form>

        {/* Menu Area */}
        <ul className='flex text-slate-200 gap-4 font-semibold'>
          <Link to='/'><li className="hidden sm:inline hover:underline">Home</li></Link>
          <Link to='/about'><li className="hidden sm:inline hover:underline">About</li></Link>
          <Link to='/sign-in'><li className="hover:underline">Sign In</li></Link>
        </ul>
      </div>
    </nav>
  )
}
