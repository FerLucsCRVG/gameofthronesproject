import React from 'react';

import { Link } from 'react-router-dom';

const CardCasa = ({content}) =>{
    return (
        <div className="grid-3">
            <Link to={"/casa/" + content.id} className="casasfamosasimg">
                <img className="border-radius" src={content.flag} alt=""/>
            </Link>
        </div>
    )
}

export default CardCasa;