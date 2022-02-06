import cbpPhoto from '../../assets/img/projects/cbp.png'
import goedutecnologiaPhoto from '../../assets/img/projects/goedutecnologia.png'
import creativosPhoto from '../../assets/img/projects/creativos.png'

import cbpLogo from '../../assets/img/projects/cbplogo.png'
import goedutecnologiaLogo from '../../assets/img/projects/goedutecnologialogo.png'
import creativosLogo from '../../assets/img/projects/creativoslogo.png'

import WorkCard from './WorkCard'

const WorkList = () => {

    const works = [
        {
            id: 1,
            photo: cbpPhoto,
            logo: cbpLogo,
            text: 'Portal web administrable para Colegio Científico y Tecnológico Blaise Pascal de Mazatenango, Suchitepéquez.',
            website: "cbp.edu.gt",
            techs: [
                {
                    id: 11,
                    name: 'Laravel',
                    bg: 'bg-red-500',
                    font: 'text-gray-100'
                },
                {
                    id: 12,
                    name: 'MySQL',
                    bg: 'bg-yellow-400',
                    font: 'text-gray-800'
                },
                {
                    id: 13,
                    name: 'Bootstrap',
                    bg: 'bg-purple-800',
                    font: 'text-gray-100'
                }
            ]
        },
        {
            id: 2,
            photo: goedutecnologiaPhoto,
            logo: goedutecnologiaLogo,
            text: 'Aplicación web para inscripciones a tutorias, reclutamiento y gestión de servicios para la empresa Go Edu Tecnología.',
            website: "goedutecnologia.com",
            techs: [
                {
                    id: 21,
                    name: 'Laravel',
                    bg: 'bg-red-500',
                    font: 'text-gray-100'
                },
                {
                    id: 22,
                    name: 'MySQL',
                    bg: 'bg-yellow-400',
                    font: 'text-gray-800'
                },
                {
                    id: 23,
                    name: 'Bootstrap',
                    bg: 'bg-purple-800',
                    font: 'text-gray-100'
                }
            ]
        },
        {
            id: 3,
            photo: creativosPhoto,
            logo: creativosLogo,
            text: 'Portafolio profesional para Creative Graphic Design, empresa dedicada a marketing y publicidad digital.',
            website: "123creativos.com",
            techs: [
                {
                    id: 31,
                    name: 'Laravel',
                    bg: 'bg-red-500',
                    font: 'text-gray-100'
                },
                {
                    id: 32,
                    name: 'MySQL',
                    bg: 'bg-yellow-400',
                    font: 'text-gray-800'
                },
                {
                    id: 33,
                    name: 'Bootstrap',
                    bg: 'bg-purple-800',
                    font: 'text-gray-100'
                }
            ]
        }
    ]

    return (
        <div className="bg-gray-900 py-20 md:px-36 px-10">

            <h2 className="font-black text-3xl md:text-4xl text-center mx-auto mb-10 text-gray-200">
                Proyectos {''}
                <span className="text-blue-600">Profesionales</span>
            </h2>

            {
                works.map(work => (
                    <WorkCard 
                        key={work.id}
                        id={work.id}
                        photo={work.photo}
                        logo={work.logo}
                        text={work.text}
                        website={work.website}
                        techs={work.techs}
                    />
                ))
            }

        </div>
    )
}

export default WorkList
