import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const SessionPhotos = () =>{
    
    const [photos,setPhotos] = React.useState([])

    React.useEffect(()=>{
        fetch("http://localhost:5000/foto").then(response => response.json()).then((responseJson) =>{
            setPhotos(responseJson);
        })
    },[])

    return (
        <>
            <Header/>
            <section className="mb-9">
            <h1 className="text-center mb-4 mt-8">Fotos</h1>
            <div className="fotos mb-8">
                {
                    photos.map((photo)=>{
                        return <img key={photo.id} src={photo.photo} className="fotos-imagens" alt=""/>
                    })
                }
            </div>

            <div className="showfotos">
                <div className="fecharfoto text-center"><h1 className="px-3">X</h1></div>
                <img src="/img/img1.webp" alt=""/>
            </div>

            <div className="numero mb-8">
                <div className="numeros border-radius mx-1">
                    <h2>1</h2>
                </div>
                <div className="numeros border-radius mx-1">
                    <h2>2</h2>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}

export default SessionPhotos;