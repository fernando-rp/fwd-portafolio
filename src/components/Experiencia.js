
import me from '../img/me.jpg'


function Experiencia (){
    return(
        <div className="">

            <div className="container d-flex flex-column">
            <h2 className="title-section text-center mb-4 my-4" id="miexperiencia">Mi Experiencia</h2>
            </div>

            <div className="container row row-cols-1 row-cols-sm-1 row-cols-md-1  row-cols-lg-2 row-cols-xl-2 mx-auto mb-4 p-4">
               <div className="col mb-3 my-2">                    
                    <p className="text-about">
                        Soy Full Stack Junior e Ingeniero Civil Estructural Senior. Mi experiencia principal está ligada a trabajar como Ingeniero durante los últimos 7 años, sin embargo,
                        mi pasión por la tecnología me llevó a estudiar Full Stack en 4Geeks Academy, ya que mi deseo es estar 100% dedicado al desarrollo web, lo cual realmente me apasiona.
                        <br />
                        <br /> 
                        Mi experiencia en el desarrollo web está ligada a varios proyectos que desarrollé durante mi formación y otros que he ido desarrollando de manera
                        voluntaria para seguir aprendiendo y profundizando en tecnologías como React y Flask.

                        <br />
                        <br />
                        Algunas personas podrían pensar que es una locura o arriesgado cambiar de carrera, de hecho, varias personas me lo han comentado someramente cuando les cuento, sin embargo,
                        soy un convencido que uno debe luchar por sus sueños, la vida es hermosa y el miedo no debe paralizarnos.
                        <br />
                        <br />
                        Me considero una persona leal, honesta y motivada. Destaco que he tenido buenas relaciones interpersonales promoviendo siempre el trabajo en equipo,
                        pues como ingeniero ya he liderado proyectos y no tengo dudas que un gran equipo puede lograr lo que sea. Me apasiona aprender constantemente, por eso estudié desarrollo web, a veces son nuestros hechos los que hablan más que nuestras palabras.
                        <br />
                        <br />
                        Finalmente, comentar que tengo un nivel de Inglés B1 y actualmente estoy cursando el nivel B2 en Políglota, pues mi objetivo en el 2022 es llegar al nivel C. Mi experiencia en este idioma es extendido, pues he realizado informes completos en este idioma y también he participado en reuniones en inglés.
                        Haciendo click <a href="https://s3.amazonaws.com/poliglota2/attachments/certificates/2205/previewed_images/original.certificate_4a4a1ec81d50fda320220228-12665-rhesxbjpeg?" target="_blank" rel="noreferrer">aquí</a> podrás ver mi certificado B1 que he recibido por parte de Políglota
                        
                    </p>
                </div>
                <div className="col mb-3 my-2 d-flex">
                <img src={me} alt="" className="img-fluid mx-auto align-self-center porta-image" />
                </div>
            </div>

        </div>
    )

}

export default Experiencia;