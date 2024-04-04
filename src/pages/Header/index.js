import imgBtnSearch from '../../svg/btn-search.svg';

const Header = () =>{
    return (
        <header>
        <section className="menudesktop">
            <nav>
                <a href="#">Fotos</a>
                <a href="#">Personagens</a>
                <a href="#">Casas</a>
            </nav>
            <div className="search">
                <input type="text" placeholder="Pesquisar..."/>
                <button className="btn-search flex-center"><img src={imgBtnSearch}/></button>
            </div>
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