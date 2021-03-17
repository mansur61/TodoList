
const StateInfo = ({resim,displayChangeImage}) =>{

    const changeImage = () =>{
        displayChangeImage()
    }
    return(

        <img src={resim} 
                style={{position:"absolute",left:"3px",top:"15px",width:"20px",
                height:"25px",borderRadius:5}}
                onClick={changeImage}
                /> 
    )

}
export default StateInfo;