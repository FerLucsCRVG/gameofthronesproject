import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

import { Link, useParams } from 'react-router-dom';

const Character = () =>{

    const {idPersonagem} = useParams();
    const [personagem,setPersonagem] = React.useState([]);
    const [casa,setCasa] = React.useState([]);

    React.useEffect(()=>{
        if(idPersonagem){
            fetch("http://localhost:5000/personagem?id=" + idPersonagem).then(response => response.json()).then((responseJson) =>{   
                setPersonagem(responseJson[0])
            
                fetch("http://localhost:5000/casa?id=" + responseJson[0].id_family).then(response => response.json()).then((responseJson2) =>{
                    console.log(responseJson2[0])    
                    setCasa(responseJson2[0])
                })
                
            })
        }
    },[])

    return (
        <>
            <Header/>
            <section className="container mt-10">
                <h1 className="text-center">{personagem.name}</h1>

                <div className="grid-12 imgpersonagem1">
                    <img className="border-radius" src={personagem.image} alt=""/>
                </div>

                <div className="container">
                    <div className="grid-6 description-1 p-3 border-radius">
                        <div className="name-person mb-4">
                            <h2 className='h2teimoso'>Apelido: <span className='ml-3'>{personagem.surname}</span></h2>
                        </div>
                        <div className="family-person">
                            <h2 className="mr-3">Família: </h2>
                            <div className="img-family">
                                <Link to={"/casa/" + casa.id}>
                                    <img src={casa.flag}/>
                                </Link>
                                <Link to={"/casa/" + casa.id}>
                                    <h3>{casa.name}</h3>
                                </Link>  
                            </div>
                        </div>
                    </div>
                    <div className="grid-6 description-2 p-3 border-radius">
                        <h2 className="mb-2">Descrição:</h2>
                        <h4>{personagem.description}</h4>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Character;