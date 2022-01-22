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
            />

            <Tech />
            <Skills />
            <Footer />
        </div>
    )
}

export default Home
