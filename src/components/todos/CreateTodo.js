import React, { Component } from 'react';
import { connect } from 'react-redux'

class CreateTodo extends Component {

constructor(props) {
  super(props);
  state = { 
    text:" " 
  };
}

handleChange=(e)=>{
  this.setState({
    text: e.target.value
  })
}

handleSubmit=(e)=>{
  e.preventDefault();
  this.props.addTodo(this.state)
}
  
  render() {
    return(
      <div>
        Create Todo Component
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            placeholder='add todo'
            onChange={this.handleChange}  
          />
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (formData)=>dispatch({ type: "ADD_TODO", payload: formData }),
  }

}

export default connect(null, mapDispatchToProps)(CreateTodo);
