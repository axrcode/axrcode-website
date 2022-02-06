import { useEffect } from "react";

import Footer from "../components/General/Footer"
import Header from "../components/Home/Header"
import ProjectList from "../components/Projects/ProjectList";
import WorkList from "../components/Projects/WorkList"

const Projects = () => {
    
    useEffect( () => {
        document.title = "Projects - AXRCODE"
    }, []);

    return (
        <div className="bg-gradient-to-b from-gray-900 to-blue-900">
            <Header 
                etiqueta=" Proyectos "
                text="Estos son algunos de los proyectos en los que he trabajado y adquirido experiencia."
            />
            <WorkList />
            <Footer />
        </div>
    )
}

export default Projects
