import React, { Component } from 'react';

import axios from 'axios';

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

    render() {
        const todos = this.state.todos;
        const todosComponents = todos.map((todo, index) => {
            return <p>{todo.id} - {todo.title}</p>;
        })
        return (
            <section>
                <h1>Página de Tarefas</h1>
                {todosComponents}
            </section>
        );
    }
}

export default TodoPage;