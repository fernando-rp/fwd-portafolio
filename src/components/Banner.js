
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'

function Banner(){
    return(
        <div className="cover-container w-100 mt-1 d-flex flex-column justify-content-around mx-auto p-4 ">
            <main className="px-3">
                <p className="mx-auto mb-2 text-center">¡Hola! Soy Fernando 👋</p>
                <h1 className="main-text mx-auto mb-4 text-center">Full Stack Developer</h1>
                <p className="mx-auto text-center mb-0">Bienvenido a mi portafolio, puedes encontrarme en los siguientes canales:  </p>
                <div className=" d-flex flex-row justify-content-center">
                    <a href="https://github.com/fernando-rp" target="_blank" rel="noreferrer" className="github">
                        <AiFillGithub></AiFillGithub>
                    </a>
                    <a href="https://www.linkedin.com/in/fernando-rios-piutrin/" target="_blank" rel="noreferrer" className="github">
                        <AiFillLinkedin></AiFillLinkedin>
                    </a>
                </div>
                <p className="mx-auto text-center mb-4">O si gustas puedes mandarme un correo haciendo click a continuación: </p>
                <p className="mx-auto text-center mt-4">
                    <a href="#contacto" className="btn btn-lg btn-secondary fw-bold bg-dark">Contactar</a>
                </p>
            </main>
        </div>
    )

}

export default Banner;