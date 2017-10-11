import React, { Component } from 'react';

import {
    Table, Button,
    ButtonGroup,
} from 'react-bootstrap';

class TodoTable extends Component {

    renderTodo = () => {
        const { todos, onEditarClick, onExcluirClick } = this.props;

        const todosComponents = todos.map((todo, index) => {
            return (
                <tr>
                    <td>{todo.id}</td>
                    <td>{todo.title}</td>
                    <td>{todo.date}</td>
                    <td>{todo.completed}</td>
                    <td>
                        <ButtonGroup bsSize="small">
                            <Button bsStyle="warning"
                                onClick={() => onEditarClick(todo)}>
                                Editar
                            </Button>
                            <Button bsStyle="danger"
                                onClick={() => onExcluirClick(todo)}>
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
        return (
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
        )
    }
}

export default TodoTable;