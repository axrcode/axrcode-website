import cbpPhoto from '../../assets/img/projects/cbp.png'
import goedutecnologiaPhoto from '../../assets/img/projects/goedutecnologia.png'
import creativosPhoto from '../../assets/img/projects/creativos.png'

import cbpLogo from '../../assets/img/projects/cbplogo.png'
import goedutecnologiaLogo from '../../assets/img/projects/goedutecnologialogo.png'
import creativosLogo from '../../assets/img/projects/creativoslogo.png'
import ProjectCard from './ProjectCard'

const ProjectList = () => {
    return (
        <div className="bg-gray-900 py-20 md:px-36 px-10">

            <ProjectCard 
                photo={cbpPhoto}
                logo={cbpLogo}
                text="Portal web administrable para Colegio Científico y Tecnológico Blaise Pascal de Mazatenango, Suchitepéquez"
                website="cbp.edu.gt"
            />
            
            <ProjectCard 
                photo={goedutecnologiaPhoto}
                logo={goedutecnologiaLogo}
                text="Aplicación web para inscripciones a tutorias, reclutamiento y gestión de servicios para la empresa Go Edu Tecnología."
                website="goedutecnologia.com"
                invert={true}
            />

            <ProjectCard 
                photo={creativosPhoto}
                logo={creativosLogo}
                text="Portafolio profesional para Creative Graphic Design, empresa dedicada a marketing y publicidad digital."
                website="123creativos.com"
            />

        </div>
    )
}

export default ProjectList
