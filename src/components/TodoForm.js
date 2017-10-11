import React, { Component } from 'react';

import {
    Button, Modal, FormGroup, FormControl,
    ControlLabel,
} from 'react-bootstrap';

class TodoForm extends Component {

    state = {};

    componentWillReceiveProps(nextProps) {
        const selectedTodo = nextProps.selectedTodo;
        this.setState({
            id: selectedTodo.id,
            title: selectedTodo.title,
            description: selectedTodo.description,
        });
    }

    onTitleChange = (event) => {
        this.setState({ title: event.target.value });
    }

    onDescriptionChange = (event) => {
        this.setState({ description: event.target.value });
    }

    onSave = () => {
        const { id, title, description } = this.state;

        if (!title || !description) {
            alert('Preencha o título e a descrição da tarefa.');
            return;
        }

        this.props.onSave(id, title, description);
    }

    render() {
        const { showForm, onClose, onSave } = this.props;

        const { id, title, description } = this.state;
        return (
            <Modal show={showForm} onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Tarefa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <FormGroup>
                            <ControlLabel>#</ControlLabel>
                            <FormControl value={id} disabled />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Título</ControlLabel>
                            <FormControl value={title} onChange={this.onTitleChange} />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Descrição</ControlLabel>
                            <FormControl componentClass="textarea"
                                value={description} onChange={this.onDescriptionChange} />
                        </FormGroup>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button bsSize="small" onClick={onClose}>Cancelar</Button>

                    <Button bsSize="small" bsStyle="info"
                        onClick={this.onSave}>Salvar</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default TodoForm;