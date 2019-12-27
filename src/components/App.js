// ./src/components/App.js
import React from 'react';
import Lifecycle from './Lifecycle';

export default class App extends React.Component {
    state = {
        number: this.randomNumber(),
    }

    randomNumber() {
        return parseInt(Math.random() * 10);
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({
                number: this.randomNumber(),
            });
        }, 3000);
    }
    // ...

    componentWillUnmount() {
        clearIntervel(this.intervalId)
    }

    render() {
        return (
            <section>
                <h1>Number: { this.state.number }</h1>
                <Lifecycle number={ this.state.number } />
            </section>
        );
    }
}