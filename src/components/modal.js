import React, { Component } from 'react';

class Modal extends Component {
constructor(props){
super(props);
}
render(){
  return(
<div className="modal" id="myModal">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Añadir nueva tarea</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <form>
          <div className="form-group">
            <input id="TaskName" 
              className="form-control form-control-sm" 
              type="text" 
              placeholder="Nombre de la tarea"
              required
            />
          </div>
          <div className="form-group">
            <select className="custom-select form-control form-control-sm" id="TaskPriority" >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="form-group">
            <input className="form-control form-control-sm" type="text" placeholder="Descripcion" id="TaskDescription" required/>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="submit" className="btn btn-primary" onClick= {(function (e) {this.props.newTask()}).bind(this) } data-dismiss="modal">Añadir</button>
      </div>
    </div>
  </div>
</div>
  );
}

}


export default Modal;
