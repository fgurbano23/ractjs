import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavegationBar extends Component{

	render(){

    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand" href="#">ReactJS</a>
          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                 <Link to ="/">
                  <h5 className="nav-link" data-toggle="modal" data-target="#myModal">Nueva tarea</h5>
                </Link>
                </li>
                <li className="nav-item active">
                  <Link to ="/tareas">
                      <h5 className="nav-link">Tareas completadas</h5>
                  </Link>
                </li>
            </ul>
          </div>
      </nav>
      );
	}
}



export default NavegationBar;