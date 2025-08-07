

import { FaFacebook, FaHome, FaUserFriends, FaStore, FaTv, FaBell, FaPlus, FaMessenger } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom fixed-top">
 
      <div className="container-fluid">
        <a className="navbar-brand text-primary" href="#">
          <FaFacebook size={40} />
        </a>
        <form className="d-flex mx-2">
          <div className="input-group">
            <span className="input-group-text bg-light border-0">
              <i className="fas fa-search text-muted"></i>
            </span>
            <input className="form-control bg-light border-0" type="search" placeholder="Buscar en Facebook" aria-label="Search" />
          </div>
        </form>
      </div>


      <div className="navbar-nav d-flex justify-content-center flex-grow-1">
        <a className="nav-link text-dark mx-2 active" aria-current="page" href="#">
          <FaHome size={24} />
        </a>
        <a className="nav-link text-muted mx-2" href="#">
          <FaUserFriends size={24} />
        </a>
        <a className="nav-link text-muted mx-2" href="#">
          <FaTv size={24} />
        </a>
        <a className="nav-link text-muted mx-2" href="#">
          <FaStore size={24} />
        </a>
      </div>


      <div className="d-flex align-items-center">
        <div className="nav-item dropdown me-2">
          <a className="nav-link d-flex align-items-center text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="tu_foto_de_perfil.jpg" alt="Perfil" className="rounded-circle me-2" style={{ width: '28px', height: '28px' }} />
            <span className="d-none d-lg-block">Nombre</span>
          </a>
        </div>
        
        <a className="btn btn-light rounded-circle me-2" href="#">
          <FaPlus />
        </a>
        <a className="btn btn-light rounded-circle me-2" href="#">
          <FaMessenger />
        </a>
        <a className="btn btn-light rounded-circle me-2" href="#">
          <FaBell />
        </a>
        <a className="btn btn-light rounded-circle" href="#">
          <i className="fas fa-caret-down"></i>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;