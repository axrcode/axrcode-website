import SkillCard from "./SkillCard"

const Skills = () => {
  return (
    <div className="bg-gray-900 py-1 md:px-36 px-10 pb-28">
                    
        <h2 className="font-black text-3xl md:text-4xl text-center mx-auto text-gray-200">
            Tecnologías {''}
            <span className="text-blue-600">Dominadas</span>
        </h2>
        <h2 className="font-bold text-lg text-center mx-auto mt-3 text-yellow-500">
            Etapa de Aprendizaje {''} 
            <i class="fas fa-star"></i>
        </h2>
        

        <h3 className="font-black text-xl text-left mx-auto mt-16 mb-5 text-gray-200 uppercase">
            Lenguajes de {''}
            <span className="text-blue-600">Programación</span>
        </h3>

        <div className="md:flex">
            <SkillCard 
                image="https://cdn.svgporn.com/logos/php.svg"
                space={false}
                name="PHP"
            />
            <SkillCard 
                image="https://cdn.svgporn.com/logos/javascript.svg"
                space={true}
                name="JavaScript"
            />
        </div>

        <h3 className="font-black text-xl text-left mx-auto mt-16 mb-5 text-gray-200 uppercase">
            Desarrollo {''}
            <span className="text-blue-600">Frontend</span>
        </h3>

        <div className="md:flex">
            <SkillCard 
                image="https://cdn.svgporn.com/logos/html-5.svg"
                space={true}
                name="HTML"
            />
            <SkillCard 
                image="https://cdn.svgporn.com/logos/css-3.svg"
                space={true}
                name="CSS"
            />
            <SkillCard 
                image="https://cdn.svgporn.com/logos/bootstrap.svg"
                space={true}
                name="Boostrap"
            />
            <SkillCard 
                image="https://cdn.svgporn.com/logos/tailwindcss-icon.svg"
                space={true}
                name="TailwindCSS"
            />
            <SkillCard 
                image="https://cdn.svgporn.com/logos/react.svg"
                space={true}
                name="React"
                learning={true}
            />
            <SkillCard 
                image="https://cdn.svgporn.com/logos/vue.svg"
                space={true}
                name="VUE.JS"
                learning={true}
            />
        </div>

        <h3 className="font-black text-xl text-left mx-auto mt-16 mb-5 text-gray-200 uppercase">
            Desarrollo {''}
            <span className="text-blue-600">Backend</span>
        </h3>

        <div className="md:flex">
            <SkillCard 
                image="https://cdn.svgporn.com/logos/laravel.svg"
                space={true}
                name="Laravel"
            />
            <SkillCard 
                image="https://cdn.svgporn.com/logos/nodejs-icon.svg"
                space={true}
                name="Node.js"
            />
            <SkillCard 
                image="https://jsurt.github.io/jacks-portfolio/images/color-express-icon%20(1).png"
                space={false}
                name="Express.js"
            />
            <SkillCard 
                image="https://cdn.svgporn.com/logos/mysql-icon.svg"
                space={true}
                name="MySQL"
            />
        </div>

        <h3 className="font-black text-xl text-left mx-auto mt-16 mb-5 text-gray-200 uppercase">
            Otras {''}
            <span className="text-blue-600">Herramientas</span>
            {''} Y {''}
            <span className="text-blue-600">Tecnologías</span>
        </h3>

        <div className="md:flex">
            <SkillCard 
                image="https://cdn.svgporn.com/logos/bash-icon.svg"
                space={true}
                name="Terminal"
            />
            <SkillCard 
                image="https://cdn.svgporn.com/logos/git-icon.svg"
                space={true}
                name="Git"
            />
            <SkillCard 
                image="https://cdn.svgporn.com/logos/linux-tux.svg"
                space={true}
                name="Linux"
                learning={true}
            />
            <SkillCard 
                image="https://icons-for-free.com/iconfiles/png/512/mongodb+plain-1324760553187258418.png"
                space={false}
                name="MongoDB"
                learning={true}
            />
            <SkillCard 
                image="https://cdn.svgporn.com/logos/postman-icon.svg"
                space={true}
                name="Postman"
            />
            <SkillCard 
                image="https://cdn.svgporn.com/logos/figma.svg"
                space={true}
                name="Figma"
            />
        </div>
        
    </div>
  )
}

export default Skills
