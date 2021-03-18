

const Categories = ({kategories,kategoriChangeHandler}) =>{

    const changeHandler = (e) =>{
        kategoriChangeHandler(e.target.value)
    }
    return (

        <select className="form-control" name ="state" id="state"
            onChange={changeHandler} >
                 <option>Aşağıdan Seçiniz</option>
                { kategories.map(kat =>{
                
                    return <option value={kat.id}
                    key={kat.id}>{kat.katName}
                    </option>
                                            
                    })
                }
            </select>        
    )


}
export default Categories;