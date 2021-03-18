import React from 'react';
//import StateInfo from './StateInfo';

class Task extends React.Component {
  state = {
    isBool:true,
  }
  displayChangeImage = () =>{
    console.log("CLICKED");
    this.setState({isBool:false})
  }
    render(){
      //const isStatedIn = this.state.isBool;
        return(
        
          <div className="card bg-light" style={{border:"none",borderBottom:"1px solid lightgray"}}>
            <div className="card-body" style={{backgroundColor:"white"}}>

                <div className="row" >
                  
                    {/* Durum ikonu Tasks description */}
                  <div className="col-md-5">   
                    <img src={"img/success.png"} alt=""
                          style={{width:"20px", height:"25px",borderRadius:5,marginLeft:"-15px"}}
                          onClick={this.displayChangeImage}
                          /> 
                    <span className="card-subtitle" style={{fontWeight:"normal",marginLeft:"15px"}}>
                      {this.props.taskName}</span>
                  </div>

                  {/* Tasks categories */}
                  <div className="col-md-7" style={{textAlign:"right"}}>
                      <span  className={this.props.kategoriName} style={{borderRadius:5, padding:"3px",
                      width:"auto",fontWeight:"normal",marginRight:"10px"}} > {this.props.kategoriName} </span>
                  
                  <span  className={this.props.whrName} style={{borderRadius:5,
                    width:"auto",fontWeight:"normal"}} > {this.props.whrName} </span>
                    
                    {   
                      this.props.sectID === 1 ? (<img  src={"img/circle.png"} alt=""
                        style={{width:"15px", height:"15px",borderRadius:5}  } />)
                        :
                        (<span></span>)
                        
                    }
                </div>
              
               </div> 
               
            </div>      
          </div>
         
      );
    }
    
}
export default Task;