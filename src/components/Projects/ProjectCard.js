const ProjectCard = ({ name, text, techs, demo, repositorio }) => {
    return (
        <div className="bg-gray-900 bg-opacity-60 py-10 px-4 rounded-l shadow-lg border-double border-4 border-gray-800 hover:bg-gray-800 transition-all">

            <h3 className="font-black text-lg md:text-xl text-center text-gray-100 uppercase px-5">
                { name }
            </h3>

            <div className="text-center text-lg font-bold text-gray-400 px-10 mt-2">
                { text }
            </div>

            <p className="font-black text-md md:text-lg text-center mt-3">
                {
                    techs.map(tech => (
                        <span className={`text-xs text-gray-${tech.font} bg-${tech.bg} rounded-md px-4 py-1 mx-1 shadow-md`}>
                            { tech.name }
                        </span>
                    ))
                }
            </p>

            <div className="text-center mt-12">
                <a  href={`https://${ demo }`} target="_blank" rel="noreferrer"
                    className="border-2 border-blue-900 py-2 px-4 mx-1 text-white rounded-md font-bold text-sm hover:bg-blue-800 cursor-pointer uppercase transition-all">
                        <i className="fas fa-eye"></i>
                        <span className="ml-2">Demo</span>
                </a>

                <a  href={`https://${ repositorio }`} target="_blank" rel="noreferrer"
                    className="border-2 border-blue-900 py-2 px-4 mx-1 text-white rounded-md font-bold text-sm hover:bg-blue-800 cursor-pointer uppercase transition-all">
                        <i className="fab fa-github"></i>
                        <span className="ml-2">Repositorio</span>
                </a>
            </div>

        </div>
    )
}

export default ProjectCard
