import RedSocial from './RedSocial'

const Header = ({ foto }) => {
    return (
        <div className="py-24">

            <img src={foto} alt="Perfil" 
                class="perfil mx-auto rounded-full h-auto md:h-56 w-auto md:w-56 flex items-center justify-center"
            />

            <div className="flex justify-center mt-3">
                <RedSocial
                    enlace="https://github.com/axrcode"
                    icono="fab fa-github"
                />
                <RedSocial 
                    enlace="https://linkedin.com/in/axrcode"
                    icono="fab fa-linkedin"
                />
            </div>

            <h1 className="font-black text-3xl md:text-5xl text-center md:w-1/2 mx-auto my-8 text-gray-200">
                Hola, mi nombre es {''}
                <span className="text-indigo-600">Axel Castillo</span>
            </h1>

            <article class="text-gray-300 font-bold text-center px-8 md:px-80 text-lg">
                Soy originario de Quetzaltenango, Guatemala, y comencé mi camino como programador en el año 2016. 
                Mi mayor interés se encuentra dentro del entorno de desarrollo web, como Frontend y Backend Developer. 
                Soy estudiante de Ingeniería en Sistemas de la Universidad Mariano Gálvez de Guatemala y de Platzi, 
                siendo un fanático de aprender e interactuar con nuevas tecnologías.
            </article>
        </div>
    )
}

export default Header
