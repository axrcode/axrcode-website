import React from 'react'

const TechCard = ({ type, image, text }) => {
    return (
        <div className="bg-gray-900 bg-opacity-60 py-10 px-4 rounded-l shadow-lg h-full border-double border-4 border-gray-800">
            <img className="w-32 h-32 mx-auto" 
                src={ image } alt='Tech Icon' />

            <h1 className="font-black text-3xl md:text-2xl mt-5 text-center mx-auto text-gray-200 uppercase">
                { type }
            </h1>

            <p className="text-gray-300 font-normal text-center text-md mt-5">
                { text }
            </p>
        </div>
    )
}

export default TechCard
