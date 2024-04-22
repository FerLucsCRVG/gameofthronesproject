import React from "react";
import Header from '../Header';
import Footer from '../Footer';

const Error404 = () =>{
    return (
        <>
            <Header/>
            <section className="container mt-8 mb-9">
                <div className="grid-12 my-10">
                    <h1 className="h0 text-center">
                        404
                    </h1>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Error404;