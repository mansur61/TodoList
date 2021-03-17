import React from 'react';
import StateInfo from './StateInfo';

class Task extends React.Component {
  state = {
    isBool:true,
  }
  displayChangeImage = () =>{
    console.log("CLICKED");
    this.setState({isBool:false})
  }
    render(){
      const isStatedIn = this.state.isBool;
        return(
        
          <div className="card bg-light mb-3">
            <div className="card-body">
              { isStatedIn ? (
               <StateInfo resim={"img/unsuccess.png"} 
               displayChangeImage={this.displayChangeImage}/>) : 
                ( <StateInfo resim={"img/success.png"} 
                displayChangeImage={this.displayChangeImage}/>
                )
             
              }
              
            <button onClick={this.props.method}  className="btn btn-sm btn-outline-danger"
                  style={{position:"absolute",right:"15px",top:"15px"}}  >Sil</button>

                  <p className="card-subtitle" style={{fontWeight:"normal",marginLeft:"5px"}}>
                   {this.props.taskName}</p>
                
                  <span  className={this.props.kategoriName} style={{position:"absolute",right:"150px",top:20,borderRadius:5, paddingLet:5,
            width:"auto",fontWeight:"normal"}} > {this.props.kategoriName} </span>
            
            <span  className={this.props.whrName} style={{position:"absolute",right:"60px",
            top:20,borderRadius:5,
              width:"auto",fontWeight:"normal"}} > {this.props.whrName} </span>
                  
            </div>
        
          </div>
         
      );
    }
    
}
export default Task;