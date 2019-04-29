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
            };
        });
    };

    subtractOne() {
        this.setState((previousState) => {
            return {
                count: previousState.count - 1,
            };
        });
    };
 */

    constructor (props) {
        super(props);
        this.state = {
            count: 0,
            product: '',
            products: [
                {
                    product: "Product 1",
                    description: "Description 1",
                },
                {
                    product: "Product 2",
                    description: "Description 2",
                },
                {
                    product: "Product 3",
                    description: "Description 3",
                },
            ],
        };
    };

    addOne = () => {
        this.setState((previousState) => {
            return {
                count: previousState.count + 1,
            };
        });
    };

    subtractOne = () => {
        this.setState((previousState) => {
            return {
                count: previousState.count - 1,
            };
        });
    };

    handleChange = (e) => {
        this.setState({todo: e.target.value});
    };

    addTodo = (todo) => {
        this.setState((previousState) => {
            return {
                todos:[...previousState.todos, todo],
            };
        });
    };

    handleSubmit = (e) => {
        e.preventDefault(); /* prevent default refresh */
        this.addTodo(this.state.todo);
        this.setState({todo: ''});
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
                <br />
                <hr />
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="product"
                        placeholder="Enter a product"
                        value={this.state.product}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="description"
                        placeholder="Enter a description"
                        value={this.state.description}
                        onChange={this.handleChange}
                    />
                    <input 
                        type="submit" 
                        value="Add" 
                    />
                </form>
                {this.state.products.map((product) => <li key={product}>{product}</li>)}
                <Main techs = {['HTML', 'CSS', 'JavaScript']}/>
                <StudentList students={studentsData} />
                <Footer year = {new Date().getFullYear()} />
            </div>
        );
    };
};

export default App;