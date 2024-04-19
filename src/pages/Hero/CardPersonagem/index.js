import React from 'react';
import { Link } from 'react-router-dom';

const CardPersonagem = ({content}) =>{

    const [casa,setCasa] = React.useState([]);

    React.useEffect(()=>{
        fetch("http://localhost:5000/casa").then(response => response.json()).then((responseJson) =>{
            setCasa(responseJson);
        })
    },[])

    return (
        
        <div className="grid-4 card">
            <Link to={"/personagem/" + content.id}>
                <img className='topimgpers' src={content.image} alt=""/>
            </Link>
            <div className="family-name">
                {
                    casa.map((p) =>{
                        if(p.id == content.id_family){
                            return <a key={p.id} className='mx-2'><img className="mr-1" src={p.flag} alt=""/></a>
                        }
                    })
               }
                
                <h3>{content.name}</h3>
            </div>
        </div>
    )
}

export default CardPersonagem;