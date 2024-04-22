import React from 'react';
import imgBtnSearch from '../../svg/btn-search.svg';
import { Link } from 'react-router-dom';

const Header = () =>{

    return (
        <header>
        <section className="menudesktop">
            <nav>
                <Link to="/">Início</Link>
                <Link to="/fotos">Fotos</Link>
                <Link to="/personagens">Personagens</Link>
                <Link to="/casas">Casas</Link>
            </nav>
            <form className="search">
                <input type="text" name="search" placeholder="Pesquisar..."/>
                <button className="btn-search flex-center"><img src={imgBtnSearch}/></button>
            </form>
        </section>

        <section className="menumobile">
            <nav>
                <div className="menutoogle"></div>
            </nav>
        </section>

        <div className="showmenu">
            <nav className="mb-2">
                <a className="linkmenumobile" href="#">Fotos</a>
                <a className="linkmenumobile" href="#">Personagens</a>
                <a className="linkmenumobile" href="#">Casas</a>
            </nav>
            <div className="search">
                <input type="text" placeholder="Pesquisar..."/>
                <button className="btn-search flex-center search-mobile"><img src="/svg/btn-search.svg"/></button>
            </div>
        </div>
        
    </header>
    )
}

export default Header;