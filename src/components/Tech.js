import TechCard from "./TechCard"

import frontend from '../assets/img/icons/frontend.png'
import backend from '../assets/img/icons/backend.png'
import technologies from '../assets/img/icons/technologies.png'

const Tech = () => {
    return (
        <div className="bg-gray-900">
            <div className="bg-gray-800 bg-opacity-50 py-20 md:px-36 px-10">

                <h1 className="font-black text-3xl md:text-4xl text-left mx-auto my-8 text-gray-200">
                    Lenguajes y {''}
                    <span className="text-indigo-600">Tecnologías</span>
                </h1>

                <div className="md:flex">
                    <div className="md:w-1/3 md:p-2 mt-3">
                        <TechCard 
                            image={frontend}
                            type="Frontend"
                            text="Busco siempre aplicar buenas prácticas en desarrollo del Frontend para generar ideas agradables al usuario."
                        />
                    </div>

                    <div className="md:w-1/3 md:p-2 mt-3">
                        <TechCard 
                            image={backend}
                            type="Backend"
                            text="He trabajado con los procesos del lado del servidor, desarrollo de API y diferentes técnicas para poder profundizar en esta área."
                        />
                    </div>
                    
                    <div className="md:w-1/3 md:p-2 mt-3">
                        <TechCard 
                            image={technologies}
                            type="Otras Tecnologías"
                            text="Herramientas que he utilizado, buscando siempre nuevas tecnologías para ampliar mi conocimiento."
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tech
