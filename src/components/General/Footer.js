import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/icons/logo-axrcode.png'
import RedSocial from '../Home/RedSocial';

const Footer = () => {
    
    const today = new Date();
    const year = today.getFullYear();

    return (
        <div className="bg-footer py-20 md:flex">

            <div className="md:w-1/2">
                <div className="flex justify-center">
                    <NavLink to='/'>
                        <img src={logo} alt="AXRCODE" height="40" className="logo"/>
                    </NavLink>
                </div>

                <div className="flex justify-center">
                    <h1 className="text-lg font-black">
                        &copy; <span className="text-blue-600">{ year }</span>
                    </h1>
                </div>
            </div>

            <div className="md:w-1/2">
                <div className="flex justify-center">
                <RedSocial
                    enlace="https://github.com/axrcode"
                    icono="fab fa-github"
                />
                <RedSocial 
                    enlace="https://linkedin.com/in/axrcode"
                    icono="fab fa-linkedin"
                />
                </div>
            </div>

        </div>
    )
}

export default Footer
