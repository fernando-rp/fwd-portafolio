import React, { useState } from 'react'

function Contacto(){

    const [enteredName,setEnteredName]=useState('')
    const [enteredLastName,setEnteredLastName]=useState('')
    const [enteredEmail,setEmail]=useState('')
    const [enteredMessage,setMessage]=useState('')

    const takeName=(e)=>{
        setEnteredName(e.target.value)
    }
    const takeLastName=(e)=>{
        setEnteredLastName(e.target.value)
    }
    const takeEmail=(e)=>{
        setEmail(e.target.value)
    }
    const takeMessage=(e)=>{
        setMessage(e.target.value)
    }



    const formSubmitted=(event)=>{

        event.preventDefault();

        setEnteredName('')
        setEnteredLastName('')
        setEmail('')
        setMessage('')
    }

return(
    <div className="container my-4">
        <h2 className="title-section text-center mb-4" id="contacto">Escríbeme</h2>
        <p className="text-contacto mb-4 p-4">Si te ha interesado mi portafolio y deseas saber más de mi perfil, por favor comunícate conmigo completando el formulario. Por otra parte, si revisaste mi portafolio y visualizaste puntos de mejora, también te agradecería enormemente que me lo comunicaras.</p>
        
        <form className="form p-4 needs-validation" name="contact-form" id="contacto" onSubmit={formSubmitted} method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact-form" />
            <div className="row">
                <div className="mb-3 col-6">
                    <label className="form-label">Nombre</label>
                    <input type="text" name="name" className="form-control" id="validationName" onChange={takeName} value={enteredName} required />
                </div>
                <div className="mb-3 col-6">
                    <label className="form-label">Apellido</label>
                    <input type="text" name="last-name" className="form-control" onChange={takeLastName} value={enteredLastName} required />
                </div>
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" name="email" className="form-control" placeholder="name@example.com" onChange={takeEmail} value={enteredEmail} required />
            </div>
            <div className=" d-flex flex-column mb-1">
                <label className="form-label">Mensaje</label>
                <textarea className="form-control" name="message" rows="5" onChange={takeMessage} value={enteredMessage} required></textarea>
            </div>
            <div className="d-flex flex-column mb-4 my-4">
                <button type="submit" className="btn fw-bold ">Enviar</button>
            </div>
         
        </form>

        

       
    </div>
)

}

export default Contacto;