import Header from "../components/Header"
import Footer from "../components/Footer"
import Tech from "../components/Tech"

import foto from '../assets/img/others/perfil-axrcode.png'
import Skills from "../components/Skills"

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
