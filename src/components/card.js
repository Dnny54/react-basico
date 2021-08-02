import React, { useState } from 'react';
import danny from './danny.jpg';
import '../App.css';

const Card = (props) => {

    const [foto, setFoto] = useState({foto: danny, nombre: 'danny'});
    
    
    return (
        <div id="carta">
            <button >x</button>
            <img src={danny} alt='danny' />
            <p>danny</p>
        </div>
    )
}
export default Card;