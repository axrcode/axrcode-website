const SkillCard = ({ image, space, name, learning }) => {
    return (
        <div className="w-1/2 md:w-1/6 p-2">
            <div className="p-5 border-double border-4 border-gray-800 hover:bg-gray-700 text-gray-400 hover:text-gray-100 transition-all">
                <div className={`h-20 w-20 flex items-center justify-center mx-auto ${ space && 'p-3' }`}>
                    <img src={ image } alt="Icon Tech"/>
                </div>
                <div className="font-bold flex justify-center mt-3 uppercase">
                    { name } 
                    {
                        learning && (
                            <span className="text-yellow-500 text-sm ml-2">
                                <i className="fas fa-star"></i>
                            </span>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default SkillCard
