import Header from "../components/Header"
import Footer from "../components/Footer"
import Tech from "../components/Tech"

import foto from '../assets/img/others/perfil-axrcode.png'

const Home = () => {
    return (
        <div className="bg-gradient-to-b from-gray-900 to-indigo-900">
            <Header 
                foto={foto}
            />

            <Tech />

            <Footer />
        </div>
    )
}

export default Home
