import {AiFillHtml5} from 'react-icons/ai'
import {SiCss3} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {FaPython} from 'react-icons/fa'
import {SiFlask} from 'react-icons/si'
import {AiFillGithub} from 'react-icons/ai'
import {FaBootstrap} from 'react-icons/fa'
import {FiFigma} from 'react-icons/fi'

function Skills (){

    return(
        <div className="container row  mx-auto mb-4 p-4">
            <h2 className="title-section text-center mb-4" id="miexperiencia">Background Tecnológico</h2>
                <div className="container row  row-cols-1 row-cols-sm-2 row-cols-md-3 mx-auto mb-2 p-2">
                    <div className="d-flex flex-column mb-4">
                        <span className="logo-experience mx-auto mb-2"><AiFillHtml5 /></span>
                        <p className="text-center">Durante mi formación, HTML era esencial para el desarrollo del front-end, el cual he ido profundizando en la medida que desarrollo.</p>
                    </div>

                    <div className="d-flex flex-column mb-4">
                        <span className="logo-experience mx-auto mb-2"><SiCss3 /></span>
                        <p className="text-center">CSS ha sido clave para ir mejorando el diseño de mis apps, es un lenguaje que he ido aprendiendo mucho más en la medida que desarrollo más proyectos.</p>
                    </div>

                    <div className="d-flex flex-column mb-4">
                        <span className="logo-experience mx-auto mb-2"><SiJavascript /></span>
                        <p className="text-center">Esencial durante mi formación, este lenguaje lo he practicado mucho, con el propósito de tener un buen nivel y poder aplicarlo en cualquier tipo de proyecto.</p>
                    </div>

                    <div className="d-flex flex-column mb-4">
                        <span className="logo-experience mx-auto mb-2"><FaReact /></span>
                        <p className="text-center">React es la librería de front-end que aprendí durante mi formación, manejo props, hooks como UseState y también trabajo utilizando componentes funcionales. He ido profundizando mis conocimientos en esta librería, haciendo cursos adicionales en Udemy.</p>
                    </div>

                    <div className="d-flex flex-column mb-4">
                        <span className="logo-experience mx-auto mb-2"><FaBootstrap /></span>
                        <p className="text-center">Bootstrap es una herramienta con la cual me manejo bastante bien para el desarrollo de fron-end, lo he utilizado en varios proyectos incluido este portafolio.</p>
                    </div>

                    <div className="d-flex flex-column mb-4">
                        <span className="logo-experience mx-auto mb-2"><FaPython /></span>
                        <p className="text-center">Durante mi formación también aprendí y he practicado Python, lo he utilizado para el back-end y lo complemento con librerías.</p>
                    </div>

                    <div className="d-flex flex-column mb-4">
                        <span className="logo-experience mx-auto mb-2"><SiFlask /></span>
                        <p className="text-center">Flask ha sido la libreria que más he utilizado para bases de datos, he estado profundizando mis conocimientos en esta librería haciendo cursos adicionales a la formación que tuve. También tengo nociones de usalor en conjunto con MySQL.</p>
                    </div>

                    <div className="d-flex flex-column mb-4">
                        <span className="logo-experience mx-auto mb-2"><AiFillGithub /></span>
                        <p className="text-center">En todas las aplicaciones que he ido desarrollando, utilizo GitHub para mantener un control de cambios e ir subiendo el código a mi repositorio.</p>
                    </div>

                    <div className="d-flex flex-column mb-4">
                        <span className="logo-experience mx-auto mb-2"><FiFigma /></span>
                        <p className="text-center">Figma es la herramienta que más me ha gustado para hacer prototipos y para poder aumentar mi background tecnológico.</p>
                    </div>

                </div>
            </div>
    )
}

export default Skills;