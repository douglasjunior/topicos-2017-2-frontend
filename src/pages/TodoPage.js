import React, { Component } from 'react';

import axios from 'axios';

import {
    Table, Button,
    Modal, ButtonGroup
} from 'react-bootstrap';

class TodoPage extends Component {

    state = {
        todos: []
    }

    componentDidMount() {
        axios.get('http://localhost:3001/todos')
            .then((response) => {
                console.log(response);
                this.setState({
                    todos: response.data
                });
            }).catch((error) => {
                console.error(error);
            })
    }

    onExcluirClick = (todo) => {
        window.confirm("Deseja excluir a tarefa " + todo.id + "?");
    }

    renderTodo = () => {
        const todos = this.state.todos;

        const todosComponents = todos.map((todo, index) => {
            return (
                <tr>
                    <td>{todo.id}</td>
                    <td>{todo.title}</td>
                    <td>{todo.date}</td>
                    <td>{todo.completed}</td>
                    <td>
                        <ButtonGroup bsSize="small">
                            <Button bsStyle="warning">Editar</Button>
                            <Button bsStyle="danger"
                                onClick={() => this.onExcluirClick(todo)}>
                                Excluir
                            </Button>
                        </ButtonGroup>
                    </td>
                </tr>
            );
        });

        return todosComponents;
    }

    render() {
        const todos = this.state.todos;

        return (
            <section>
                <h1>Página de Tarefas</h1>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Título</th>
                            <th>Data</th>
                            <th>Concluída</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTodo()}
                    </tbody>
                </Table>
            </section>
        );
    }
}

export default TodoPage;