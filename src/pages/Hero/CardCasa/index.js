import React from 'react';

const CardCasa = ({content}) =>{
    return (
        <div className="grid-3">
            <a href="#" className="casasfamosasimg">
                <img className="border-radius" src={content.flag} alt=""/>
            </a>
        </div>
    )
}

export default CardCasa;