// ./src/components/Lifecycle.js
import React from 'react';

export default class Lifecycle extends React.Component {
    state = { numbersList: [] }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps', this);
        
        const { number } = props;
        const { numbersList } = state;
        if( numbersList.includes(number) ) {
            return null;
        }

        return { 
            numbersList: [...numbersList, number],
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');

        const { numbersList } = nextState;
        const { length } = numbersList;
        if( length > 3 && length < 7 ) {
            console.log(false);
            return false;
        }

        console.log(true);
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');

        return {
            height: this.refUl.offsetHeight,
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');

        console.log('wysokość <ul/> przed aktualizacją:')
        console.log(snapshot.height);
        console.log('wysokość <ul/> po aktualizacji:')
        console.log(this.refUl.offsetHeight);
    }

    render() {
        console.log('render');

        const { numbersList } = this.state;
        return (
            <>
                <h2>Lifecycle</h2>
                <ul ref={el => this.refUl = el }>
                { 
                    numbersList.map(
                        n => <li key={ n }>{ n }</li>
                    )
                }
                </ul>
            </>
        );
    }
}