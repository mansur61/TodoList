import React from 'react';

const Task = ({taskName,kategoriName,method,whrName}) =>{
    
    return(
        <div className="card bg-light mb-3">
           <div className="card-body">
           <button onClick={method}  className="btn btn-sm btn-outline-danger"
                style={{position:"absolute",right:"15px",top:"15px"}}  >Sil</button>
                <p className="card-subtitle" style={{fontWeight:"normal"}}><span></span>{taskName}</p>
                <span  className={kategoriName} style={{position:"absolute",right:"150px",top:20,borderRadius:5,
           width:"auto",fontWeight:"normal"}} > {kategoriName} </span>
           <span  className={whrName} style={{position:"absolute",right:"60px",top:20,borderRadius:5,
             width:"auto",fontWeight:"normal"}} > {whrName} </span>
                
           </div>
        </div>
    );
}
export default Task;