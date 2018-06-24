import React, { Component } from 'react';
import NavegationBar from './navegation.js';
import Card from './card.js';
import Modal from './modal.js';

class Main extends Component {

  state={
    data:this.props.data
  }

  render() {
    let empty_tasks = this.state.data.tasks;
    let empty_alert;
    if ( empty_tasks.length === 0){
      empty_alert =<h1 align="center" >SIN TAREAS POR REALIZAR</h1>;
    }
    return (
      <div>
        <NavegationBar data={this.state.data}/>
        <Modal data={this.state.data} newTask={this.props.newTask}/>
        <br/>
        <div className="container">
            <Card data={this.state.data} finishTask={this.props.finishTask} close={this.props.close}/>
            {empty_alert}
        </div>
      </div>
    );
  }
}

export default Main;
