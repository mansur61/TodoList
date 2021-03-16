

const Section = ({section,sectionChangeHandler}) =>{

    const changeHandler = (e) =>{
        sectionChangeHandler(e.target.value)
    }
    return (
        
        <select className="form-control" name ="state" id="state"
            onChange={changeHandler} >
                 
                { section.map(sect =>{
                    return <option value={sect.id}
                    key={sect.id}>{sect.selectName}
                    </option>
                })
                }
        </select>         
    )


}
export default Section;