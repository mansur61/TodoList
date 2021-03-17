import React from 'react'
import Task from './Task'

const TaskLists = ({section,tasks,kategories,delMetod,whereTasks}) =>{
   // console.log("section ->",section," - tasks ->",tasks," - kategories ->",kategories)
   console.log("tasks ->",tasks)
   console.log("section ->",section)
   console.log("kategories ->",kategories)
   console.log("whereTasks ->",whereTasks)
  
    if(section.length > 0){
        return section.map(sect=>{ 
            return <div key={sect.id} style={{fontWeight:"bold"}}> {sect.selectName} 
          
            {
             tasks.map(task=>{
            if(tasks.length > 0){
                if(sect.id === task.sectionID){
                   return kategories.map(kate=>{ 
                    if(kate.id === task.kategoriID){
                        return whereTasks.map(wTasks =>{
                            if(wTasks.id === task.whrID){
                                return <Task taskName={task.taskName} key={task.id} 
                                    kategoriName={kate.katName}
                                    whrName={wTasks.whrName}
                                    method={()=>delMetod(task.id)} />
                            }
                        })
                       
                    }
                })
                }
            }
            })
        
        }
            </div>      
        
        })

       
    }else{
        return(
            <div>Section ALANI Boş.</div>
     
         )
         
    }
    


}

export default TaskLists;