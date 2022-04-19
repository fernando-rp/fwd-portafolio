import rym from '../img/rym.jpeg'
import gycem from '../img/gycem.png'


function Card(){

    const portafolio=[
        {
            name:"Star Wars App",
            image:"https://picsum.photos/id/307/200",
            description:"Aplicación de StarWars creada durante mi formación en 4Geeks Academy. Utilicé React para el front-end y consumí datos de una API abierta (SWAPI).",
            url:"https://google.com"
        },
        {
            name:"Rick & Morty",
            image:rym,
            description:"Desarrollé esta APP como parte de una prueba técnica que hice alguna vez, me sentí desafiado, ya que tuve que consumir una API hecha en GraphQL, tecnología que no conocía hasta ese entonces.",
            url:"https://rickmortyapp-frp.netlify.app/"
        },
        {
            name:"GYCEM",
            image: gycem,
            description:"Queria seguir practicando y desarrollé esta web para la empresa de un amigo. Utilicé React y la monté en un servidor.",
            url:"https://gycem.cl"
        },
        // {
        //     name:"Proyecto 4",
        //     image:"https://picsum.photos/id/310/200",
        //     description:"2022",
        //     url:"https://google.com"
        // },
        // {
        //     name:"Proyecto 5",
        //     image:"https://picsum.photos/id/311/200",
        //     year:"2022",
        //     url:"https://google.com"
        // },
        // {
        //     name:"Proyecto 6",
        //     image:"https://picsum.photos/200",
        //     description:"2022",
        //     url:"https://google.com"
        // }
    ]


    return( 
        <div>
            <div className="container d-flex flex-column">
            <h2 className="title-section text-center mb-4" id="miportafolio">Mi Portafolio</h2>
            <p className="mb-4 p-4"> Durante mi formación y de manera voluntaria he desarrollado algunas APP que me han permitido seguir aprendiendo, a continuación podrás ver algunos de mis trabajos:</p>
            </div>

            <div className="container row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 mx-auto mb-4">
            
                {!!portafolio &&
                    portafolio.map((project,index) => {
                        return (
                            <div key={index} className="col mb-3 my-2">
                                <div className="card border-0 rounded-circle">
                                    <img src={project.image} alt="" className="img-fluid rounded-circle" />
                                    <div className="card-img-overlay hide d-flex flex-column justify-content-center" >
                                        <h5 className="card-title text-center text-dark">{project.name}</h5>
                                        <p className="card-text text-center">{project.description}</p>
                                        <a href={project.url} target="_blank" className="card-btn btn btn-dark">Ver Proyecto</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
            
    );

}

export default Card;