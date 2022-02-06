import { NavLink } from 'react-router-dom'

const Navbar = ({ logo }) => {
    return (
        <nav className="md:flex py-5 mx-auto navbar-movil">
            <h1 className="md:w-1/2 flex justify-center text-2xl">
                <NavLink to='/'>
                    <img src={logo} alt="AXRCODE" height="40" className="logo"/>
                </NavLink>
            </h1>

            <div className="md:w-1/2 text-center my-3 mt-8 md:mt-3">
                <NavLink to='/projects'
                    className="bg-blue-900 w-full py-3 px-10 text-white rounded-md uppercase font-bold hover:bg-blue-800 cursor-pointer transition-all">
                    Proyectos
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar
