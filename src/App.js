import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer'
import StudentList from './components/StudentList';
import { studentsData } from './students-data'

class App extends React.Component {
/* 
    constructor (props) {
        super(props);
        this.state = {
            count: 0,
        };

        this.addOne = this.addOne.bind(this);
        this.subtractOne = this.subtractOne.bind(this);
    };

    addOne() {
        this.setState((previousState) => {
            return {
                count: previousState.count + 1,
            }
        });
    }

    subtractOne() {
        this.setState((previousState) => {
            return {
                count: previousState.count - 1,
            }
        });
    } */

    constructor (props) {
        super(props);
        this.state = {
            count: 0,
        };
    };

    addOne = () => {
        this.setState((previousState) => {
            return {
                count: previousState.count + 1,
            }
        });
    };

    subtractOne = () => {
        this.setState((previousState) => {
            return {
                count: previousState.count - 1,
            }
        });
    };

    render() {
        return (
            <div>
                <Header
                    title="Lets Get Started With React"
                    firstName="Asabeneh"
                    lastName="Yetayeh"
                    year={new Date().getFullYear()}
                />
                <h1>Count: {this.state.count}</h1>
                <button onClick = {this.addOne}>Plus one</button>
                <button onClick = {this.subtractOne}>Minus one</button>
                <Main techs = {['HTML', 'CSS', 'JavaScript']}/>
                <StudentList students={studentsData} />
                <Footer year = {new Date().getFullYear()} />
            </div>
        );
    };
};

export default App;