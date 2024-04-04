import React from 'react';
import CardPersonagem from './CardPersonagem';
import CardCasa from './CardCasa';

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
            <section className="hero mt-7 p-6 mb-7">
                <button>Onde Assistir</button>
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
        </>
    )
}

export default Hero;