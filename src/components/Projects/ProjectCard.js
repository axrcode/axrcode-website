const ProjectCard = ({ photo, logo, text, website, invert }) => {
    return (
        <div className="md:flex">
            <div className={`md:w-1/2 md:p-2 mt-3 ${ invert && 'order-last' }`}>
                <img src={photo} />
            </div>
            <div className="md:w-1/2 md:p-2 mt-3 flex items-center justify-center mx-auto">
                <div className="bg-gray-900 bg-opacity-60 py-10 px-4 rounded-l shadow-lg border-double border-4 border-gray-800">

                    <img src={logo} className="w-2/6 mx-auto pb-7"  />

                    <p className="font-black text-3xl md:text-xl text-center text-gray-300 px-5">
                        { text }
                    </p>

                    <p className="font-black text-lg text-center mt-5">
                        <a  href={`http://${website}`} target="_blank" 
                            className="text-blue-600 hover:text-blue-300">
                            www.{ website }
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
