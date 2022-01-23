import RedSocial from './RedSocial'

const Header = ({ foto, etiqueta, my, text }) => {
    return (
        <div className="py-24">

            {
                foto && (
                    <div>
                        <img src={foto} alt="Perfil" 
                            class="perfil mx-auto rounded-full h-auto md:h-56 w-auto md:w-56 flex items-center justify-center"
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

            <h1 className="font-black text-3xl md:text-5xl text-center md:w-1/2 mx-auto mt-8 mb-5 text-gray-200"
                id="title-primary">
                {'<'}{ etiqueta }{'/>'}
            </h1>

            {
                my && (
                    <h1 className="font-black text-3xl md:text-5xl text-center md:w-1/2 mx-auto mb-8 text-gray-200">
                        Mi nombre es {''}
                        <span className="text-blue-600">Axel Castillo</span>
                    </h1>
                )
            }

            <article class="text-gray-300 font-bold text-center px-8 md:px-80 text-lg">
                { text }
            </article>
        </div>
    )
}

export default Header
