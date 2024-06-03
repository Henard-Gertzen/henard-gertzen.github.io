import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="w-10 h-10 rounded-lg bg-white
         items-center justify-center flex font-bold shadow-md">
            <p className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">HG</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
            <NavLink to="/about" className={({isActive}) => isActive ?
            'text-blue-500' : 'text-black'}>
                About
            </NavLink>
            <NavLink to="/projects" className={({isActive}) => isActive ?
            'text-indigo-500' : 'text-black'}>
                Projects
            </NavLink>
            <NavLink to="/credentials" className={({isActive}) => isActive ?
            'text-purple-500' : 'text-black'}>
                Credentials
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar