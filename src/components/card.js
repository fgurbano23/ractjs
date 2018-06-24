import React, {Component} from 'react';
import './css/card.css';

class Card extends Component{
 
  render(){
    const array = this.props.data;
    //console.log(array);
    return (
    <div className="container">
      <div className="row">
        {
          array.tasks.map((task,id)=>{
            return(
              <div className="col-md-4 col-sm-12 card_container" key={id}>
                <div className="card my_card">
                  <button type="button" className="close close_align" onClick={ (function (e) {this.props.close(id)}).bind(this) }>&times;</button>
                  <div className="card-body my_card_body">
                    <h4 className="card-title title">{task.title}</h4>
                      <h6 className="card-subtitle mb-2 text-muted priority">Prioridad: {task.priority}</h6>
                      <p className="card-text description">{task.description}</p>
                      <button type="button" className="btn btn-primary btn-task" onClick={ (function (e) {this.props.finishTask(id)}).bind(this) } >Terminado</button>
                  </div>
                </div>
              </div>
              );
          })
        }
      </div>
    </div>
      );
    }

  }



export default Card;