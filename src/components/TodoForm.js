import React, { Component } from 'react';

/*
Alisson Igor
Jose Vinicius
Bruno Henrique
Jucelino
Felipe

*/

import {
    Button, Modal, FormGroup, FormControl,
    ControlLabel,
} from 'react-bootstrap';

class TodoForm extends Component {

    state = {};

    onTitleChange = (event) => {
        this.setState({ title: event.target.value });
    }

    onDescriptionChange = (event) => {
        this.setState({ description: event.target.value });
    }

    render() {
        // const showForm = this.props.showForm;
        // const onClose = this.props.onClose;
        // const onSave = this.props.onSave;
        const { showForm, onClose, onSave } = this.props;

        // const title = this.state.title;
        // const description = this.state.description;
        const { title, description } = this.state;
        return (
            <Modal show={showForm} onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Tarefa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <FormGroup>
                            <ControlLabel>#</ControlLabel>
                            <FormControl value="" disabled />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Título</ControlLabel>
                            <FormControl value={title} onChange={this.onTitleChange} />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Descrição</ControlLabel>
                            <FormControl value={description} onChange={this.onDescriptionChange} />
                        </FormGroup>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button bsSize="small" onClick={onClose}>Cancelar</Button>

                    <Button bsSize="small" bsStyle="info"
                        onClick={onSave}>Salvar</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default TodoForm;