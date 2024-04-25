import RedSocial from './RedSocial'

const Header = ({ foto, etiqueta, my, text }) => {
    return (
        <div className="py-24">

            {
                foto && (
                    <div>
                        <img src={foto} alt="Perfil" 
                            className="perfil mx-auto rounded-full h-auto md:h-52 w-auto md:w-52 flex items-center justify-center"
                        />

                        <div className="flex justify-center mt-3">
                            <RedSocial
                                enlace="https://github.com/axrcode"
                                icono="fab fa-github"
                            />
                            <RedSocial 
                                enlace="https://linkedin.com/in/axrcode"
                                icono="fab fa-linkedin"
                            />
                        </div>
                    </div>
                )
            }

            <h1 className="font-medium text-3xl md:text-5xl text-center md:w-1/2 mx-auto mt-8 mb-5 text-gray-100"
                id="title-primary">
                {'<'}{ etiqueta }{'/>'}
            </h1>

            {
                my && (
                    <h1 className="text-3xl md:text-5xl text-center md:w-1/2 mx-auto mb-8 text-gray-400">
                        My name is {''}
                        <span className="font-bold text-gray-200">Axel Castillo</span>
                    </h1>
                )
            }

            <article className="text-gray-300 font-normal text-center px-8 md:px-80 text-md md:text-lg">
                { text }
            </article>
        </div>
    )
}

export default Header
