import React, { Component } from "react";

class Equipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: 'Caio',
            descricao: 'Desenvolvedor VUE',
            contador: 0
        }
    }
    render() {
        return (
            <div>
                <h3>{this.state.nome}</h3>
                <p>{this.state.descricao}</p>
                <h4>Contador</h4>
                <p>{this.state.contador}</p>
                <button onClick={() => this.setState({ contador: this.state.contador + 1 })}> + </button>
                <button onClick={() => this.setState({ contador: this.state.contador - 1 })}> - </button>
            </div>
        );
    }
}

function App() {
    return (
        <div>
            <h1>Conheça nossa equipe</h1>
            <Equipe/>
        </div>
    )
}

export default App;