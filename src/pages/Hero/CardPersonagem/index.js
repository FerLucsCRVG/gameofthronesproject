import React from 'react';
import imgs from '../../../img/lannister-2.jpg'

const CardPersonagem = ({content}) =>{

    const [casa,setCasa] = React.useState([]);

    React.useEffect(()=>{
        fetch("http://localhost:5000/casa").then(response => response.json()).then((responseJson) =>{
            setCasa(responseJson);
            console.log(casa);
            console.log(responseJson)
        })
    },[])

    return (
        
        <div className="grid-4 card">
            {console.log(casa)}
            <a href="#">
                <img className='topimgpers' src={content.image} alt=""/>
            </a>
            <div className="family-name">
                {
                    casa.map((p) =>{
                        if(p.id == content.id_family){
                            return <a className='mx-2'><img className="mr-1" src={p.flag} alt=""/></a>
                        }
                    })
               }
                
                <h3>{content.name}</h3>
            </div>
        </div>
    )
}

export default CardPersonagem;