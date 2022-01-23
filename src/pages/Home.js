import Header from "../components/Home/Header"
import Footer from "../components/General/Footer"
import Tech from "../components/Home/Tech"
import Skills from "../components/Home/Skills"

import foto from '../assets/img/others/perfil-axrcode.png'

const Home = () => {
    return (
        <div className="bg-gradient-to-b from-gray-900 to-blue-900">
            <Header 
                foto={foto}
                etiqueta="Hola Mundo"
                my={true}
                text="Soy originario de Quetzaltenango, Guatemala, y comencé mi camino como programador en el año 2016. 
                Mi mayor interés se encuentra dentro del entorno de desarrollo web, como Frontend y Backend Developer. 
                Soy estudiante de Ingeniería en Sistemas de la Universidad Mariano Gálvez de Guatemala y de Platzi, 
                siendo un fanático de aprender e interactuar con nuevas tecnologías."
            />

            <Tech />
            <Skills />
            <Footer />
        </div>
    )
}

export default Home
