import React,{Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import data from './registros.json';
import Main from './components/main.js';
import Complete from './components/complete';


class Controller extends Component {
	constructor () {
		super();
		this.state = {
			data: data
		};
  this.deleteTask = this.deleteTask.bind(this);
  this.finishTask = this.finishTask.bind(this);
  this.newTask = this.newTask.bind(this);
	}


  deleteTask(id) {
   const data = this.state.data;
   //console.log(data);
   data.tasks.splice(id,1);
   this.setState({data:data});
   console.log("---TAREA ELIMINADA---");
   console.log(this.state.data);
  console.log("-------------------");
  }

  finishTask(id){
  const data = this.state.data;
  data.complete.push(data.tasks[id]);
  data.tasks.splice(id,1);
  console.log("---TAREAS PENDIENTES----");
  console.log(data.tasks);
  console.log("---TAREAS COMPLETADAS----");
  console.log(data.complete);
  console.log("----------------------");
  console.log("-------ESTADO---------");
  console.log(data);
  console.log("----------------------");
  this.setState({
    data: data
  })}

  newTask() {
    let data = this.state.data;
  if(document.getElementById("TaskName").value==="" ||  document.getElementById("TaskDescription").value===""){
    return; 
  }
  else{

    const taskId= this.state.data.tasks.length +1;
    let taskName = document.getElementById("TaskName").value;
    let TaskPriority = document.getElementById("TaskPriority").value;
    let TaskDescription = document.getElementById("TaskDescription").value;
    let task = {
      "id":taskId,
      "title":taskName,
      "priority":TaskPriority,
      "description":TaskDescription
    }
    data.tasks.push(task);
    this.setState({data:data});
    
  document.getElementById("TaskName").value="";
  document.getElementById("TaskPriority").value="1";
  document.getElementById("TaskDescription").value="";
    }
  }

	render(){
		return(	
			<Router>
				<div>
					<Route exact path="/" render={(props)=> <Main data={this.state.data} finishTask={this.finishTask}  close={this.deleteTask} newTask={this.newTask}/>}></Route>
					<Route path="/tareas" render={(props)=> <Complete data={this.state.data} />}></Route>
				</div>
			</Router>
		);

	}

}

ReactDOM.render(<Controller/>,document.getElementById('root'));
