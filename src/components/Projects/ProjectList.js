import ProjectCard from "./ProjectCard"

const ProjectList = () => {

    const projects = [
        {
            name: 'Task App',
            text: 'Aplicación web para crear tareas rápidas. Permitiendo crear nuevas tareas, marcar como completadas, buscar tareas por su nombre y eliminarlas.',
            demo: 'task-app-axrcode.vercel.app',
            repositorio: 'github.com/axrcode/task-app',
            techs: [
                {
                    name: 'React',
                    bg: 'bg-sky-500', 
                    font: 'text-gray-900'
                },
                {
                    name: 'TailwindCSS',
                    bg: 'bg-teal-500', 
                    font: 'text-gray-100'
                }
            ]
        },
        {
            name: 'State Manager System',
            text: 'Sistema web para visualización de las etapas de producción. Utiliza las operaciones básicas CRUD para la gestion de empleados, clientes, pedidos y reportes.',
            demo: 'state-manager-system.herokuapp.com',
            repositorio: 'github.com/axrcode/state-manager-system',
            techs: [
                {
                    name: 'Laravel',
                    bg: 'bg-red-500',
                    font: 'text-gray-100'
                },
                {
                    name: 'Livewire',
                    bg: 'bg-rose-400',
                    font: 'text-gray-100'
                },
                {
                    name: 'MySQL',
                    bg: 'bg-yellow-400',
                    font: 'text-gray-800'
                },
                {
                    name: 'Bootstrap',
                    bg: 'bg-purple-800',
                    font: 'text-gray-100'
                }
            ]
        }
    ]

    return (
        <div className="bg-gray-900 pb-48 md:px-36 px-10">
            
            <h2 className="font-black text-3xl md:text-4xl text-center mx-auto mb-10 text-gray-200">
                Proyectos {''}
                <span className="text-blue-600">Personales</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {
                    projects.map(project => (
                        <ProjectCard 
                            name={project.name}
                            text={project.text}
                            demo={project.demo}
                            repositorio={project.repositorio}
                            techs={project.techs}
                        />
                    ))
                }
            </div>

        </div>
    )
}

export default ProjectList
