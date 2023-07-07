import React from 'react';
import './App.css';

//podemos criar uma função fora do escopo do componente de classe.

function handleClick() {
  console.log('clicou!');
  console.log(this);
}
//a função handleClick, por estar fora do escopo do componente de classe, não consegue ler as informações do this.

//isso acontece porque o JavaScript lê que a função está dentro do arquivo. Porém esta não é a maneira -correta- de se fazer o React.

class App extends React.Component {
  constructor() {
    super()
    console.log(this, 'this aplicado antes da render');
    this.handleThis = this.handleThis.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      cliques: 0,
    }
    this.handleCliques = this.handleCliques.bind(this);
    this.handleCliques1 = this.handleCliques1.bind(this);
    this.handleCliques2 = this.handleCliques2.bind(this);
    //este é o método o qual se define o estado de cada componente.
  }

  handleCliques() {
    this.setState({
      cliques: 1,
    })
    //a função setState faz com que o o estado se atualize. Porém atualiza SEMPRE para 1.
  }

  handleCliques1() {
    this.setState((estadoInicial, _props) => ({
      cliques: estadoInicial.cliques +1
    }))
  } //esta é a forma com que o estado será INCREMENTADO +1 a cada click no botão cinco.

  handleCliques2() {
    this.setState((state, prop) => ({
      cliques: state.cliques +1
    })) // esta função faz com que o botão, na tela, seja incrementado +1.
  }

  handleThis() {
    console.log(this);
    console.log('this aplicado por conta da construção');
  } //a função handleThis consegue ler as informações do this por que está dentro da função construtora.

  handleChange() {
    console.log('Clicou!');
    console.log(this);
  }
  //dentro do componente, a mesma função de cima não será lida dentro do Render() sem o método this.

  //a função handleChange também consegue ler as informações do this porque está manualmente vinculada às informações do this.
  render(){
      console.log(this);
 //dentro do render é que o componente renderiza as informações do this.
  return (
    <>
      <h1>oi</h1>
      <button onClick={handleClick}>Meu botao</button>
      <button onClick={this.handleChange}>Meu botao dois</button>
      <button onClick={this.handleThis}>meu botao três</button>
      <button onClick={this.handleCliques}>meu botão quatro</button>
      <button onClick={this.handleCliques1} >meu botão cinco</button>
      <button onClick={this.handleCliques2}
      //este evento onClick, chamando o this.state.cliques (estado inicial), faz com que na tela seja incrementado o numero de cliques.
      >{this.state.cliques}</button>
    </>
  );
}
}

export default App;
