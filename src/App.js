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
  }

  handleThis() {
    console.log(this);
    console.log('this aplicado por conta da construção');
  }

  //a função handleThis consegue ler as informações do this por que está dentro da função construtora.

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
    </>
  );
}
}

export default App;
