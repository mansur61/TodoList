import React from 'react'

class AddSection extends React.Component{

    state = {
        secName:""
    }
    submitHandler = (e) =>{
        e.preventDefault();
        this.props.addSectionMethod(this.state.secName)
        this.setState({secName:""})
    }
    sectionChangeHandler =  (e) =>{
        this.setState({secName:e.target.value})
    }
    
    render(){
        return(
            <form onSubmit={this.submitHandler}>
                <input type="text" id="name" className="form-control mb-3"
                value={this.state.secName} 
                placeholder="Add section input " onChange={this.sectionChangeHandler}/>
                <button className="btn btn btn-light btn-block">Add Section</button>

            </form>
        )
    }

}
export default AddSection;