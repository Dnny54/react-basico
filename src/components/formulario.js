import React from 'react';

const Formulario = () => {
    return (
        <form>
            <input type="text" placeholder="Correo electrónico o número de teléfono"/>
            <input type="password" placeholder="Contraseña"/>
            <input type="button" value="Iniciar sesión" className="btn-1"/>
            <a href="www.google.com">¿olvidaste tu contraseña?</a>
            <hr/>
            <input type="button" value="Crear cuenta nueva" className="btn-2"/>
        </form>
    )
}

export default Formulario; 