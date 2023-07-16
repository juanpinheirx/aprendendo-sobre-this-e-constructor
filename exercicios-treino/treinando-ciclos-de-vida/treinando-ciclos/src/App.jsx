import React from "react";
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
      counter: 0,
      textinho: "",
      advices: '',
    };
    // aqui vou inserir uma lógica simples de incremento de botão.
    this.increment = () =>
      this.setState(
        {
          counter: this.state.counter + 1,
        },
        console.log("clicou no incremento, dentro do constructor")
      );
    this.decrement = () =>
      this.setState(
        {
          counter: this.state.counter - 1,
        },
        console.log("clicou no decremento, dentro do constructor")
      );

    }

  componentDidMount() {
    console.log("log passou pelo component did mount");
    // dentro desta função previamente feita pelo React, o log passou 2x após o render.
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => {
      this.setState((prev) => {
        const copiedAdvice = Object.assign({}, prev);
        copiedAdvice.advices = data.slip.advice;
        return copiedAdvice; // uma requisição de uma API para criaçao de um botão e de um conselho em inglês.
      })
    })
  }

  triggerState = () =>
    this.setState((prev) => {
      const copiedState = Object.assign({}, prev);
      copiedState.textinho = 'Novo texto';
      return copiedState;
    }); // aqui esta funçao gera uma cópia do estado como está. dentro dela fiz uma lógica onde no clique, o estado muda para funcinou, renderizando um novo elemento na tela. vamos incrementar isso com um fetch de piadas.

    
    render() {
    console.log("Render");
    return (
      // hoje eu farei um treino com ciclos de vida, retornando desde o básico até o dia de hoje.
      // vale levar em consideração que o conteúdo visto utiliza métodos datados como o constructor e o super. vou atualizar estes conceitos e tentar fazer uma aplicação simples.
      // os ciclos de vida vão me ajudar a entender melhor como os componentes se comportam por debaixo dos panos.
      // hoje eu farei um treino com ciclos de vida, retornando desde o básico até o dia de hoje.
      // vale levar em consideração que o conteúdo visto utiliza métodos datados como o constructor e o super. vou atualizar estes conceitos e tentar fazer uma aplicação simples.
      // os ciclos de vida vão me ajudar a entender melhor como os componentes se comportam por debaixo dos panos.
      <>
        <h1>contador</h1>
        <span>{this.state.counter}</span>
        <br />
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <br />
        <button onClick={this.triggerState}>
          clique em mim para gerar um texto na tela
        </button>
        <p>{this.state.textinho}</p>
        <p>{this.state.advices}</p>
      </> // ao clicar nestes dois botões, o seguinte algoritmo acontece: o componente acessa a lógica inserida no constructor e ele renderiza através do Render, o novo elemento na tela. fora isso tem duas lógicas inseridas que imprimem na aplicação 'novo texto' e também um conselho em inglês.
    );
  }
  componentDidUpdate() {
    console.log("log passou pelo component did update");
    // nesta função feita pelo React, o componente acessa as informações do estado após feita um evento pelo usuário. no caso dessa aplicação, ao apertar no 'increment ou decrement', o seguinte algoritmo ocorre: primeiro acessa a lógica no constructor, renderiza o novo elemento na tela e depois passa por esta função component did update.
    <h1 h1Element={this.h1Element}>
      passou pelo constructor, render e agora está aqui.
    </h1>;
  }
}

export default App;
