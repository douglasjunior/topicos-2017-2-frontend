import React, { Component } from 'react';
import './App.css';

import TodoPage from './pages/TodoPage';

class App extends Component {
    render() {
        return (
            <main>
                <TodoPage />
            </main>
        );
    }
}

export default App;
