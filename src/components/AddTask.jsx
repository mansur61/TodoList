import React from 'react'
import Categories from './Categories';
import Section from './Section';
import TimeTask from './TimeTask';

class AddTask extends React.Component{
    state = {
        taskName : "",
        sectionID: 1,
        kategoriID:1,
        whereID:1,
        isBoolean:true
    }

    taskChangeHandler = (e) =>{     
        this.setState({taskName:e.target.value})

    }
    submitHandler = (e) =>{
        e.preventDefault();  
        if(this.state.taskName === ""){
            this.setState({isBoolean : false})
        }else{
            this.props.addTaskMethod(this.state.taskName,this.state.sectionID,this.state.kategoriID,this.state.whereID)
            this.setState({taskName : ""})
        }    
        
    }
    sectionChangeHandler = (e) =>{
        this.setState({sectionID : e})
        this.props.changeSectionHandler(e)
        console.log(e);
    }
    kategoriChangeHandler = (e) =>{
        this.setState({kategoriID : e})
        //console.log(e.target.value);
    }
    whereChangeHandler = (e) =>{
       // console.log(e.target.value);
        console.log(e);
        this.setState({whereID : e})
        this.props.whereTimeHandler(e)
    }
    render(){
      
            return(
                <form onSubmit={this.submitHandler}>
                    <div className="row">
                     <div className="col-md-6">
                        <p>Task Giriniz</p>
                            <input type="text" id="name" className="form-control mb-3"
                            value={this.state.taskName} 
                            placeholder="Add task input" onChange={this.taskChangeHandler}/>
                        <p>Section Seçiniz</p>
                        <Section  section={this.props.section} 
                        sectionChangeHandler={this.sectionChangeHandler}/>
                     
                        <br/>
                        <p>Kategori Seçiniz</p>
                        < Categories kategoriChangeHandler={this.kategoriChangeHandler} 
                        kategories = {this.props.kategories} />
                        
                        <br />
                        <p>Ne zaman yapacaksın ?</p>
                        < TimeTask whereChangeHandler={this.whereChangeHandler} 
                        whereTasks = {this.props.whereTasks}
                        currentSectionID={this.props.currentSectionID} />
                        
                        <br />
                        
                        <button className="btn btn-outline-info btn-block"
                       >Add Task</button>

                        <br />
                      </div>
                       
                    </div>
                </form>
    
            )

       
    }


}
export default AddTask;
