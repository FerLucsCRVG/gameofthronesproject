import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

import { useParams } from 'react-router-dom';

const House = () =>{

    const {idCasa} = useParams();
    const [casa,setCasa] = React.useState([]);
    const [mainCharacters,setMainCharacters] = React.useState([]);

    React.useEffect(()=>{
        if(idCasa){
            fetch("http://localhost:5000/casa?id=" + idCasa).then(response => response.json()).then((responseJson) =>{   
                setCasa(responseJson[0])
            })
        }
    },[])

    return (
        <>
            <Header/>
            <section className="container">
                <h1 className="text-center mt-8">Casa {casa.name}</h1>

                <div className="grid-12 imgpersonagem">
                    <img className="border-radius" src={casa.flag} alt=""/>
                </div>

                <div className="container">
                    <div className="grid-6 description-1 p-3 border-radius">
                        <div className="family-person mb-4">
                            <h2 className="mr-3">Lema: </h2>
                            <h3>{casa.staff}</h3>
                        </div>
                        <div className="family-person mb-4">
                            <h2 className="mr-3">Sede: </h2>
                            <h3>{casa.core}</h3>
                        </div>
                        <div className="family-person mb-10">
                            <h2 className="mr-3">Região: </h2>
                            <h3>{casa.region}</h3>
                        </div>
                    </div>
                    <div className="grid-6 description-2 p-3 border-radius">
                        <h2 className="mb-2">Descrição:</h2>
                        <h4>{casa.description}</h4>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default House;