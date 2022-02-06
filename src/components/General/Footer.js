import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/icons/logo-axrcode.png'
import FooterSocial from './FooterSocial';

const Footer = () => {
    
    const today = new Date();
    const year = today.getFullYear();

    const contacts = [
        {
            icon: 'fab fa-github',
            user: 'axrcode',
            red: 'github.com'
        },
        {
            icon: 'fab fa-linkedin',
            user: 'axrcode',
            red: 'linkedin.com/in'
        },
        {
            icon: 'fab fa-instagram',
            user: 'axrcode',
            red: 'instagram.com'
        },
        {
            icon: 'fab fa-facebook',
            user: 'axrcode',
            red: 'facebook.com'
        },
    ]

    return (
        <div className="bg-footer">
            <div className="md:flex px-10 md:px-48 py-20">

                <div className="md:w-1/2 mb-8 md:pr-20">
                    <div className="p-5 border-double border-4 border-gray-800 text-gray-300 text-center pb-8">
                        <h3 className="font-black text-gray-300 text-xl px-3 text-center uppercase pb-2 mb-5 border-gray-300"> 
                            ¿Quieres Escribirme un correo?
                        </h3>
                        <a  href="mailto:axrcode@gmail.com"
                            className="bg-blue-900 py-2 px-5 md:px-20 text-white rounded-md uppercase font-bold hover:bg-blue-800 cursor-pointer transition-all mx-auto"> 
                            <i className="fas fa-hand-point-right md:mr-2"></i>
                            {''} Has click aquí {''} 
                            <i className="fas fa-hand-point-left md:ml-2"></i>
                        </a>
                    </div>
                </div>

                <div className="md:w-1/2">
                    <h3 className="font-black text-blue-600 text-xl px-3 text-center md:text-left uppercase pb-2 mb-5 border-b-4 border-gray-300"> 
                        Mis Redes Sociales
                    </h3>

                    <div className="flex flex-wrap">
                        {
                            contacts.map(contact => (
                                <FooterSocial 
                                    icon={contact.icon}
                                    user={contact.user}
                                    red={contact.red}
                                />
                            ))
                        }
                    </div>
                </div>

            </div>

            <div className="bg-gray-900 flex justify-center py-5">
                <NavLink to='/'>
                    <img src={logo} alt="AXRCODE" height="40" className="logo"/>
                </NavLink>
                <h1 className="text-lg font-black mt-2 ml-2">
                    &copy; <span className="text-blue-600">{ year }</span>
                </h1>
            </div>
        </div>

    )
}

export default Footer
