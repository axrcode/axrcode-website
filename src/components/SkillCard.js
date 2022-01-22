const SkillCard = ({ image, space, name, learning }) => {
    return (
        <div className="w-1/6 p-2">
            <div className="p-5 border-double border-4 border-gray-800">
                <div className={`h-20 w-20 flex items-center justify-center mx-auto ${ space && 'p-3' }`}>
                    <img src={ image } alt="Icon Tech"/>
                </div>
                <div className="text-gray-400 font-bold flex justify-center mt-3 uppercase">
                    { name } 
                    {
                        learning && (
                            <span className="text-yellow-500 text-sm ml-2">
                                <i class="fas fa-star"></i>
                            </span>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default SkillCard
