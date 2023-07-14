import React from "react";
import Form from "./components/Form";
import "./App.css";

class App extends React.Component {
  state = {
    name: "",
    email: "",
    age: 0,
    func: "",
    motive: "",
    willGo: false,
  };

  // handleChange = ({target}) => {
  //   const {name} = target;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   this.setState({
  //     [name]: value, // esta é a função que faz a mudança de estado tanto para os inputs de tipo texto quanto para os inputs de tipo checkbox.
  //   })
  // }

  handleChange = ({ target }) => {
    // neste handler refatorado, vou refazer a função handle utilizando o Object.assign({}) que pega um objeto vazio e atribui os valores do estado para este objeto como uma cópia.
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState((prev) => {
      const copyState = Object.assign({}, prev, {
        [name]: value,
      });
      return copyState; // com este handler, eu faço uma cópia do estado, tornando este imutável como na documentação do react recomenda. para evitar futuros problemas.
    });
  };

  render() {
    return (
      <Form
        value={this.state}
        handleChange={this.handleChange} //essa foi a forma a qual o estado e a função handleChange foi enviada via PROPS.
      />
    );
  }
}

export default App;
