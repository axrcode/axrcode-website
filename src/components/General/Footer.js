import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/icons/logo-axrcode.png'
import FooterSocial from './FooterSocial';

const Footer = () => {
    
    const today = new Date();
    const year = today.getFullYear();

    return (
        <div className="bg-footer md:flex px-10 md:px-48 py-20">

            <div className="md:w-1/2">
                <div className="flex justify-center md:justify-start mb-5">
                    <NavLink to='/'>
                        <img src={logo} alt="AXRCODE" height="40" className="logo"/>
                    </NavLink>
                    <h1 className="text-lg font-black mt-2 ml-2">
                        &copy; <span className="text-blue-600">{ year }</span>
                    </h1>
                </div>
            </div>

            <div className="md:w-1/2">
                <h3 className="font-black text-blue-600 text-2xl px-3 text-center md:text-left uppercase pb-2 mb-5 border-b-4 border-gray-300"> 
                    Contacto
                </h3>

                <div className="md:flex">
                    <FooterSocial 
                        icon="fab fa-github"
                        user="axrcode"
                        red="github.com"
                    />
                    <FooterSocial 
                        icon="fab fa-linkedin"
                        user="axrcode"
                        red="linkedin.com/in"
                    />
                </div>
            </div>

        </div>
    )
}

export default Footer
