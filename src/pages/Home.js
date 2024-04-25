import { useEffect } from "react";

import Header from "../components/Home/Header"
import Footer from "../components/General/Footer"
import Tech from "../components/Home/Tech"
import Skills from "../components/Home/Skills"

import foto from '../assets/img/others/perfil-axrcode.png'

const Home = () => {

    useEffect( () => {
        document.title = "Home - AXRCODE"
    }, []);

    return (
        <div className="bg-gray-900 container">
            <Header 
                foto={foto}
                etiqueta="Hello World"
                my={true}
                text="I am from Quetzaltenango, Guatemala. I have been a programmer since 2020, mainly focusing on Web Development with technologies for both Frontend and Backend. I am a student of Systems Engineering at Mariano Gálvez University in Guatemala"
            />

            <Tech />
            <Skills />
            <Footer />
        </div>
    )
}

export default Home
