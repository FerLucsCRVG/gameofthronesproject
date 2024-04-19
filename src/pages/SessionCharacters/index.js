import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

import { Link } from 'react-router-dom';

const SessionCharacters = () =>{

    const [personagens,setPersonagens] = React.useState([]);

    React.useEffect(()=>{
        fetch("http://localhost:5000/personagem").then(response => response.json()).then((responseJson) =>{
            setPersonagens(responseJson)
        })
    },[])

    return (
        <>
            <Header/>
            <section className=" container mb-9">
                <h1 className="text-center mb-4 mt-8">Personagens</h1>

                <div className="personagens mb-8">

                    {
                        personagens.map((x)=>{
                            return (
                                <div className="grid-3 card">
                                    <Link to={"/personagem/" + x.id}>
                                        <img src={x.image} alt=""/>
                                        <div className="family-name">
                                            <h3 className='px-1'>{x.name}</h3>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                    

                </div>
        </section>

        <div className="numero mb-8">
            <div className="numeros border-radius mx-1">
                <h2>1</h2>
            </div>
            <div className="numeros border-radius mx-1">
                <h2>2</h2>
            </div>
        </div>
            <Footer/>
        </>
        
    )
}

export default SessionCharacters;