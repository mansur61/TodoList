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
      {taskName:"Quarterly newsletter",kategoriID:2,id:1,sectionID:1,whrID:1},
      {taskName:"Recruiting blog post",kategoriID:2,id:2,sectionID:2,whrID:2},
      {taskName:"Mobile app launch",kategoriID:3,id:3,sectionID:2,whrID:2},
      {taskName:"Interview John H.",kategoriID:4,id:4,sectionID:2,whrID:2},
      {taskName:"Submit updates to mobile starefonts",kategoriID:5,id:4,sectionID:2,whrID:2},
      {taskName:"Schedule meeting with Alex",kategoriID:1,id:4,sectionID:3,whrID:3},
      {taskName:"Homepage refresh",kategoriID:6,id:4,sectionID:3,whrID:4},
      {taskName:"Onboard new Salse team members",kategoriID:7,id:4,sectionID:3,whrID:5},
      {taskName:"Review editorial calendar",kategoriID:2,id:4,sectionID:3,whrID:6}
      
    ],
    selections: [
      {selectName:"New Tasks",id:1},
      {selectName:"Today",id:2},
      {selectName:"Upcoming",id:3}
    ],
    kategories: [
      {katName:"",id:1},
      {katName:"Editorial",id:2},
      {katName:"OfGuals",id:3},
      {katName:"Recruitting",id:4},
      {katName:"Mocolo",id:5},
      {katName:"Website",id:6},     
      {katName:"Sales",id:7}
      
     
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
    //console.log("App Modüünde -> ",taskName," -- ",sectID,"--",katID,"--",whrID);
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
      <div className="container" style={{backgroundColor:"white"}}>   
        <div className="row" >
            <div className="col-md-12"> 

                <div className="row"  style={{margin:"0px 120px",border:"1px solid lightgray",
              backgroundColor:"white", borderRadius:"10px"}}>

                  <div className="col-md-6" style={{borderRight:"1px solid gray"}}>
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

                  <div className="col-md-4">
                   <AddSection addSectionMethod={this.addSectionMethod}/>
                </div>
               
                <div className="col-md-12"  style={{borderTop:"1px solid lightgray"}}>      
              <TaskLists  section = {this.state.selections} 
              tasks = {this.state.tasks} kategories = {this.state.kategories}
              delMetod={this.deleteMetod}
              whereTasks = {this.state.whereTasks}
             
              />           
            </div>
              </div>
         
           </div>  

            

          </div>
          <br/>
      </div>
     
    );

  }
 
}

export default App;
