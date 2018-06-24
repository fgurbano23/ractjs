import React, { Component } from 'react';
import Navegation from './navegation.js'
import './css/card.css';


class App extends Component {
  constructor(props){
  super(props);
  }
render(){
   let empty_tasks = this.props.data.complete;
   let empty_alert;
    if ( empty_tasks.length === 0){
      empty_alert =<h1 align="center" >NO HA COMPLETADO NINGUNA TAREA</h1>;
    }
  const complete = this.props.data.complete;
  return(
    <div>
      <Navegation data={this.props.data}/>
      <br/>
      <div className="container">
      {empty_alert}
      <div className="row">
      {
        complete.map((task,id)=>{
          return (
              <div className="col-md-4 col-sm-12 card_container" key={id}>
                <div className="card my_card">
                  <div className="card-body my_card_body">
                    <h4 className="card-title title">{task.title}</h4>
                      <h6 className="card-subtitle mb-2 text-muted priority">Prioridad: {task.priority}</h6>
                      <p className="card-text description">{task.description}</p>
                  </div>
                </div>
              </div>
            );
        })
      }
      </div>
      </div>
    </div>
    );
  }
}
export default App;