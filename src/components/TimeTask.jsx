

const TimeTask = ({whereTasks,whereChangeHandler,currentSectionID}) =>{

    const changeHandler = (e) =>{
        whereChangeHandler(e.target.value)
    }
    return (

        <select className="form-control" 
            onChange={changeHandler} >
                <option>Aşağıdan Seçiniz</option>
                {whereTasks.map(wTasks =>{
                    
                    if(wTasks.sectionID === currentSectionID){
                        //console.log("wTasks.whrName ->",wTasks.whrName,
                        //", wTasks.id ->",wTasks.id)
                        return <option value={wTasks.id}
                        key={wTasks.id}>{wTasks.whrName}</option>

                        
                    }                                        
                    }) 
                }
            </select>        
    )


}
export default TimeTask;