import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavegationBar extends Component{

	render(){

    return(
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="#">ATI2 SEM II-2017</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="true" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="navbar-collapse collapse show" id="navbarColor01" >
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <Link  className="nav-link" to="/">Nueva tarea<span className="sr-only">(current)</span>
      </Link>
      </li>
      <li className="nav-item">
        <Link  className="nav-link" to="/tareas">Tareas completadas<span className="sr-only">(current)</span></Link>
      </li>
    </ul>
  </div>
  </nav>
      );
	}
}



export default NavegationBar;