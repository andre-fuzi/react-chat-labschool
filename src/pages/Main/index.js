import React, {Component} from 'react';
import { FaPlus } from 'react-icons/fa';

import { Container, Form, SubmitButton } from '../../components';
import api from '../../services/api';

export default class Main extends Component {
    state = {
        name: ""
    };

    handleInputChange = e => {
        this.setState({ name: e.target.value })
    }

    handleSubmit = async e => {
        e.preventDefault();

        const { name } = this.state;
        const response = await api.post("/sessions", {
            name
        });

        localStorage.setItem("session", JSON.stringify(response.data));
        //localStorage only accepts JSON or strings

        this.props.history.push("/chat");
    }

    render() {
        const { name } = this.state;
        return (
            <Container>
                <h1>Informe seu nome</h1>
                <Form onSubmit={this.handleSubmit}>
                    <input 
                        value={name}
                        type='text'
                        onChange={this.handleInputChange}
                        placeholder='Digite seu nome...'
                    />
                    <SubmitButton>
                        <FaPlus color='#fff' size={14} />
                    </SubmitButton>
                </Form>
            </Container>
        );
    }
}