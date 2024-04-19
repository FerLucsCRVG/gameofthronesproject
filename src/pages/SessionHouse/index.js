import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

import { Link } from 'react-router-dom';

const SessionHouse = () =>{
    const [casa,setCasa] = React.useState([]);

    React.useEffect(()=>{
        fetch("http://localhost:5000/casa").then(response => response.json()).then((responseJson) =>{
            setCasa(responseJson)
        })
    },[])

    return (
        <>
            <Header/>
            <section className=" container mb-9">
                <h1 className="text-center mb-4 mt-8">Casas</h1>

                <div className="todascasas mb-8">

                    {
                        casa.map((x)=>{
                            return (
                                <div class="grid-3">
                                    <Link to={"/casa/" + x.id}>
                                        <img class="border-radius casasfamosasimg2" src={x.flag} alt=""/>
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

export default SessionHouse;