import React, { Component } from 'react';

import axios from 'axios';

import {
    Button,
} from 'react-bootstrap';

import TodoForm from '../components/TodoForm';
import TodoTable from '../components/TodoTable';

class TodoPage extends Component {

    state = {
        todos: []
    }

    // executado após a página ser carregada
    componentDidMount() {
        this.getTodos();
    }

    getTodos = () => {
        return axios.get('http://localhost:3001/todos/')
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
        const confirm =
            window.confirm("Deseja excluir a tarefa '" + todo.title + "'?");

        if (confirm) {
            const url = "http://localhost:3001/todos/" + todo.id;
            axios.delete(url)
                .then((response) => {
                    if (response.status === 204) {
                        return this.getTodos();
                    }
                }).catch((ex) => {
                    console.warn(ex);
                })
        }
    }

    onEditarClick = (todo) => {
        this.setState({
            showForm: true,
            selectedTodo: todo,
        })
    }

    onNewTodoClick = () => {
        this.setState({
            showForm: true,
            selectedTodo: {
                id: '',
                title: '',
                description: '',
            }
        })
    }

    onFormClose = () => {
        this.setState({ showForm: false })
    }

    onTodoSave = (id, title, description) => {
        const data = {
            title: title,
            description: description
        };
        if (id) {
            this.putTodo(id, data);
        } else {
            this.postTodo(data);
        }
    }

    putTodo = (id, data) => {
        const url = 'http://localhost:3001/todos/' + id;
        axios.put(url, data)
            .then((response) => {
                if (response.status === 200) {
                    this.setState({ showForm: false });
                    return this.getTodos();
                }
            }).catch((ex) => {
                console.warn(ex);
            });
    }

    postTodo = (data) => {
        axios.post('http://localhost:3001/todos/', data)
            .then((response) => {
                if (response.status === 201) {
                    this.setState({ showForm: false });
                    return this.getTodos();
                }
            }).catch((ex) => {
                console.warn(ex);
            })
    }

    render() {
        const todos = this.state.todos;

        return (
            <section>
                <h1>Página de Tarefas</h1>

                <Button bsSize="small" bsStyle="success"
                    onClick={this.onNewTodoClick}>
                    Nova Tarefa
                </Button>

                <TodoTable todos={todos}
                    onEditarClick={this.onEditarClick}
                    onExcluirClick={this.onExcluirClick} />

                <TodoForm showForm={this.state.showForm}
                    onClose={this.onFormClose}
                    onSave={this.onTodoSave}
                    selectedTodo={this.state.selectedTodo} />
            </section>
        );
    }
}

export default TodoPage;