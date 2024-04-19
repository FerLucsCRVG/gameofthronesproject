import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import CardPersonagem from './CardPersonagem';
import CardCasa from './CardCasa';

import { Link } from 'react-router-dom';

const Hero = () =>{

    const [topPersonagem,setTopPersonagem] = React.useState([]);
    const [topCasa,setTopCasa] = React.useState([]);

    React.useEffect(()=>{
        fetch("http://localhost:5000/personagem?_sort=-stars&_limit=3").then(response => response.json()).then((responseJson) =>{
            setTopPersonagem(responseJson);
        })
    },[])

    React.useEffect(()=>{
        fetch("http://localhost:5000/casa?_sort=-stars&_limit=4").then(response => response.json()).then((responseJson) =>{
            setTopCasa(responseJson)
        })
    },[])

    return (
        <>
            <Header/>
            <section className="hero mt-7 p-6 mb-7">
                <button><Link to="https://www.hbo.com/game-of-thrones">Onde Assistir</Link></button>
            </section>

            <section className="container mb-9">
                <h1 className="text-center mb-6">Personagens mais famosos</h1>
               {
                    topPersonagem.map((p) =>{
                       return <CardPersonagem key={p.id} content={p}/>
                    })
               }
            </section>

            <section className="container mb-9 casas">
                <h1 className="text-center mb-6">Casas mais famosas</h1>
                {
                    topCasa.map((p)=>{
                        return <CardCasa key={p.id} content={p}/>
                    })
                }
            </section>
            <Footer/>
        </>
    )
}

export default Hero;