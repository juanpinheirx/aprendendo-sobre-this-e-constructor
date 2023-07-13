import React from "react";
import Form from "./components/Form";
import "./App.css";

class App extends React.Component {
  state = {
      name: '',
      email: "",
      age: 0,
      func: "",
      motive: "",
      willGo: false,
  };

  handleChange = ({target}) => {
    const {name} = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    })
  }
  
  render() {
    return (
      <Form value={this.state}
      handleChange={this.handleChange} //essa foi a forma a qual o estado e a função handleChange foi enviada via PROPS.
      />
    );
  }
}

export default App;
