import React, { Component } from 'react';

import {
    Table, Button,
    ButtonGroup, ButtonToolbar,
    ToggleButtonGroup, ToggleButton,
} from 'react-bootstrap';

import moment from 'moment';

class TodoTable extends Component {

    renderTodo = () => {
        const { todos, onEditarClick, onExcluirClick, onConcluidaChange } = this.props;

        const todosComponents = todos.map((todo, index) => {
            return (
                <tr>
                    <td>{todo.id}</td>
                    <td>{todo.title}</td>
                    <td>{moment(todo.creation_date).format('DD/MM/YYYY [às] HH:mm')}</td>
                    <td>
                        <ButtonToolbar>
                            <ToggleButtonGroup bsSize="small" type="radio"
                                onChange={(concluida) => onConcluidaChange(todo.id, concluida)}
                                name="completed" value={todo.completed}>
                                <ToggleButton value={true}>Concluída</ToggleButton>
                                <ToggleButton value={false}>Pendente</ToggleButton>
                            </ToggleButtonGroup>
                        </ButtonToolbar>
                    </td>
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