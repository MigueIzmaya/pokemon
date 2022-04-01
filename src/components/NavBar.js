import './NavBar.css';
  
  const NavBar = () => {
    return (
      <div className="NavBar"> 
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Pokémon</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
    
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">Inicio</a>
                        </li>
        
                        <li class="nav-item">
                            <a class="nav-link" href="#">Tipos de cartas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Tipos de Pokémon</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Juegos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Acerca de nosotros</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      </div>
    );
  }
  
  export default NavBar;