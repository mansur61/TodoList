import React from 'react'
import AddTask from './components/AddTask'
import TaskLists from './components/TaskLists'
import AddSection from './components/AddSection'

class App extends React.Component {
  state = {
    Tidx:4,
    Sidx:3,
    cSectionID:1,
    wTimeID:1,
    tasks: [
      {taskName:"1. çalışma",kategoriID:1,id:1,sectionID:1,whrID:1},
      {taskName:"2. çalışma",kategoriID:2,id:2,sectionID:2,whrID:2},
      {taskName:"3. çalışma",kategoriID:2,id:3,sectionID:2,whrID:2},
      {taskName:"4. çalışma",kategoriID:3,id:4,sectionID:3,whrID:3}
      
    ],
    selections: [
      {selectName:"New Tasks",id:1},
      {selectName:"Today",id:2},
      {selectName:"Upcoming",id:3}
    ],
    kategories: [
      {katName:"Editorial",id:1},
      {katName:"OfGuals",id:2},
      {katName:"Webinar",id:3},
      {katName:"Siber",id:4}
    ],
    whereTasks: [
      {whrName:"Tomorrow",id:1,sectionID:1},
      {whrName:"Today",id:2,sectionID:2},
      {whrName:"Monday",id:3,sectionID:3},
      {whrName:"Mart 18",id:4,sectionID:3},
      {whrName:"Mart 24",id:5,sectionID:3},
      {whrName:"Apr 9",id:6,sectionID:3}
    ]

  }
  addTaskMethod = (taskName,sectID,katID,whrID) =>{
    console.log("App Modüünde -> ",taskName," -- ",sectID,"--",katID,"--",whrID);
    if(taskName !== ""){
      let idAl = this.state.Tidx +1;
      let task = {
        taskName: taskName,
        kategoriID:parseInt(katID),
        id:idAl,
        sectionID:parseInt(sectID),
        whrID:parseInt(whrID)
      }
      let Ttasks = [...this.state.tasks,task]
      
      this.setState({
        tasks:Ttasks
      })
    }else{
      console.log("taskName boş olamaz")
    }
    
  }

  addSectionMethod = (secName) =>{
    //console.log("App modülde (addSectionMethod)->",secName)
    if(secName !== ""){
      let idAl = this.state.Sidx +1;
      let sec = {
        selectName: secName,    
        id:idAl
      }
      let Tsections = [...this.state.selections,sec]
     
      this.setState({
        selections:Tsections
      })
      //console.log("selections  App modülünde->",this.state.selections)

    }else{
      console.log("secName boş olamaz")
    }
    
  }
  changeSectionHandler = (sectionID)=>{
   console.log("App modülünde -->",sectionID)
    this.setState({ cSectionID:parseInt(sectionID) })
  }

  whereTimeHandler = (wTimeID)=>{
    console.log("App modülünde -->",wTimeID)
    this.setState({ wTimeID:parseInt(wTimeID) })
  }

  deleteMetod = (id) =>{
    console.log(id);
    let delTasks = this.state.tasks.filter(us =>{
      return  us.id !== id
    })
    this.setState({
      tasks:delTasks
    })
    
  }
  render(){
    return (
      <div className="container-fluid">   
        <div className="row">
            <div className="col-md-12"> 

                <div className="row">

                  <div className="col-md-5" style={{borderRight:"1px solid gray"}}>
                      <AddTask addTaskMethod = {this.addTaskMethod} 
                    section = {this.state.selections} 
                    tasks = {this.state.tasks}
                    kategories = {this.state.kategories}
                    whereTasks = {this.state.whereTasks}
                    changeSectionHandler = {this.changeSectionHandler}
                    currentSectionID = {this.state.cSectionID}
                    whereTimeHandler = {this.whereTimeHandler}
                    />
                  </div>

                  <div className="col-md-2">
                   <AddSection addSectionMethod={this.addSectionMethod}/>
                </div>

              </div>
         
           </div>  

            <div className="col-md-6">      
              <TaskLists  section = {this.state.selections} 
              tasks = {this.state.tasks} kategories = {this.state.kategories}
              delMetod={this.deleteMetod}
              whereTasks = {this.state.whereTasks}
             
              />           
            </div>

          </div>
      </div>
     
    );

  }
 
}

export default App;
