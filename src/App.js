import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer'
import StudentList from './components/StudentList';
import { studentsData } from './students-data'

class App extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            count: 0, // a counter for the +1 and -1 buttons
            name: '', // name of todo
            description: '', // description of todo

            todos: // array with todos
            [ 
                {
                    name: 'Item 1',
                    description: 'Description 1',
                },
                {
                    name: 'Item 2',
                    description: 'Description 2',
                },
                {
                    name: 'Item 3',
                    description: 'Description 3',
                },
            ],
        };
    };

    addOne = () => {
        this.setState((previousState) => {
            return {
                // take the latest state of count and add 1
                count: previousState.count + 1, 
            };
        });
    };

    subtractOne = () => {
        this.setState((previousState) => {
            return {
                // take the latest state of count and subtract 1
                count: previousState.count - 1,
            };
        });
    };

    handleChange = (e) => {
        // take name (defined by code) and value (entered by user)
        const {name, value} = e.target;
        // change state
        this.setState({[name]: value});
    };

    addTodo = (todo) => {
        // take the latest state of todos
        this.setState((previousState) => { 
            return {
                // add new todo at the end
                todos:[...previousState.todos, todo], 
            };
        });
    };

    handleSubmit = (e) => {
        // prevent default refresh
        e.preventDefault();

        // create todo from name and description in state
        const todo = {
            name: this.state.name,
            description: this.state.description,
        }
        
        // add todo
        this.addTodo(todo);

        // reset name and description input fields
        this.setState({name: ''});
        this.setState({description: ''});
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
                {/* display current count */}
                <h1>Count: {this.state.count}</h1>

                {/* +1 button */}
                <button onClick = {this.addOne}>Plus one</button>

                {/* -1 button */}
                <button onClick = {this.subtractOne}>Minus one</button>
                <br />
                <hr />

                {/* form element so that we have submit functionality */}
                <form onSubmit={this.handleSubmit}>

                    {/* name input field */}
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter a task"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />

                    {/* description input field */}
                    <input
                        type="text"
                        name="description"
                        placeholder="Enter a description"
                        value={this.state.description}
                        onChange={this.handleChange}
                    />

                    {/* submit button */}
                    <input 
                        type="submit" 
                        value="Add" 
                    />
                </form>

                {/* map todo list to display list of "name: description" */}
                {this.state.todos.map((todo) => <li key={todo.name}>{todo.name}: {todo.description}</li>)}
                
                <Main techs = {['HTML', 'CSS', 'JavaScript']}/>
                <StudentList students={studentsData} />
                <Footer year = {new Date().getFullYear()} />
            </div>
        );
    };
};

export default App;