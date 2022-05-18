import { Link } from "react-router-dom";
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget.js';
  
  const NavBar = () => {
    return (
      <div className="NavBar"> 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/">Pokémon</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
    
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
        
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Tipos de Cartas
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <Link to="/category/classic"><li><a className="dropdown-item">Classic</a></li></Link>
                                <Link to="/category/neo-revelation"><li><a className="dropdown-item">Neo Revelation</a></li></Link>
                                <Link to="/category/chilling-reign"><li><a className="dropdown-item">Chilling Reign</a></li></Link>
                                <Link to="/category/neo-genesis"><li><a className="dropdown-item">Neo Genesis</a></li></Link>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Tipos de Pokémon</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Acerca de nosotros</a>
                        </li>
                    </ul>
                    <CartWidget></CartWidget>
                </div>
            </div>
        </nav>
      </div>
    );
  }
  
  export default NavBar;