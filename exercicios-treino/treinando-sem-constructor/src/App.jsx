import React, { Component } from 'react';
import './App.css';

// exercício com utilização de Vite primeira mão. neste exercício de prática vou manipular os estatos do meu componente sem o uso do constructor. seria isto com: desestruturação, setState etc.


export default class App extends React.Component {
  state = {
    number: 0, //primeiro vou criar um contador, da mesma forma que vem no Vite.
    name: '',
    muieh: 'bianca' //este estado será para manipulação de inputs do tipo texto.
  }

  handleClicksOnReact = () => {
    console.log('this is a counter');
    console.log(this);
    this.setState((prev) => ({
      number: prev.number +1
    }))
  }

  handleInputChange = (e) => {
    console.log('este é um input');
    //ok, agora vamos criar uma lógica que, quando eu alterar o estado inicial do meu input, eu vou alterar elementos na tela.
    this.setState(() => ({
      name: e.target.value // esta função renderiza elementos na tela.
      //vale lembrar que esta sintaxe é permanente.
    }))
  }
  
  render() {
    return (
      <div>
        <h1>Juan</h1>
        <h1>{this.state.muieh}</h1>
        <h2>{this.state.name}</h2>
        <button onClick={this.handleClicksOnReact}>{ this.state.number }</button>
        <input type="text" name="" id="" onChange={
          this.handleInputChange
        }/>
      </div>
    )
  }
}