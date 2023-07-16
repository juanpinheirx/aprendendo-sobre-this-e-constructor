import React from "react";
import Page1 from './components/Page1';
import "./App.css";

// os consoles sevirão de checks para ver o comportamento dos ciclos.
// este console vem antes do Render e antes do constructor.
console.log("antes do componente de classe");

// que tipo de lógica pode vir aqui?

const testeDeLogica = () => {
  console.log(this);
};
testeDeLogica(); // aqui é um teste onde é visto que a função criada não tem acesso às props e ao estado da aplicação.

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("dentro do constructor");
    this.state = {
      mount: false,
    };

      this.mountPage = () => this.setState({mount: true})
      this.unmountPage = () => this.setState({mount: false})

  }

  render() {
    console.log("Render");
    return (

      <>
        <button onClick={this.mountPage} disabled={this.state.mount}>Montar página</button>
        <button onClick={this.unmountPage} disabled={!this.state.mount}>Desmontar página</button>
        {this.state.mount ? <Page1 /> : null}
      </> 
    );
  }
}

export default App;
