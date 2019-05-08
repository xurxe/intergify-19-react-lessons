import React from "react";
import ReactDOM from "react-dom";
import AddUser from './components/AddUser.js'


const root = document.getElementById("root");

const Header = (props) => {
    const {year, children} = props;
    return (
        <header>
            <h1>
                It is the year {year}
            </h1>

            {children}
        </header>
    );
};

const Div = (props) => {
    return (
        <div>
            <p>
                {props.children}
            </p>
        </div>
    );
};

const Main = () => {
    return (
        <main>
            <Div>Div 1</Div>
            <Div>Div 2</Div>
            <Div>Div 3</Div>
        </main>
    );
};

const Greeting = (props) => {
    const {name} = props;
    return (
        <h3>Welcome, {name}!</h3>
    );
};

class Site extends React.Component {
    state = {
        count: 0,
        isLoggedIn: false,
        name: 'Xurxe',
        todos: ['Todo 1', 'Todo 2', 'Todo 3'],
        todo: '',
        feedback: '',
    };

    handleAdd = () => {
        this.setState((prevState => ({count: prevState.count + 1})));
    };

    handleSubtract = () => {
        this.setState((prevState => ({count: prevState.count - 1})));
    };

    handleLogIn = () => {
        this.setState({isLoggedIn: !this.state.isLoggedIn});
    };

    handleInput = (event) => {
        this.setState({todo: event.target.value});
    };

    handleDelete = (index) => {
        const todos = [...this.state.todos];
        todos.splice(index, 1);
        this.setState({todos: todos});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if (!this.state.todo) {
            this.setState({feedback: 'This value cannot be empty.'});
        }

        else if (this.state.todos.indexOf(this.state.todo) > -1) {
            this.setState({feedback: 'This value must be unique.'});
        }
        
        else {
            this.setState((prevState) => ({
                todos: [this.state.todo, ...prevState.todos]
            }))
        };
    };

    render() {
        const {count, isLoggedIn, todos} = this.state;
        return (
            <div>
                <Header year={new Date().getFullYear()}>
                    I can add child props here.
                </Header>

                <Main></Main>

                <h2>
                    Count: {count}
                </h2>

                <button onClick={this.handleAdd}>
                    +1
                </button>

                <button onClick={this.handleSubtract}>
                    -1
                </button>

                <p>
                    Please {isLoggedIn ? 'log out' : 'log in'}:
                </p>

                <button onClick={this.handleLogIn}>
                    {isLoggedIn ? 'Log out' : 'Log in'}
                </button>

                {
                    isLoggedIn
                    &&
                    <Greeting name={this.state.name}></Greeting>
                }

                <p>
                    Add a task to your to-do list:
                </p>

                <form onSubmit={this.handleSubmit}>
                    <input
                    type='text'
                    value={this.state.todo}
                    placeholder='Task'
                    onChange={(event)=> this.handleInput(event)}
                    ></input>

                    <p>
                        {this.state.feedback}
                    </p>

                    <ul>
                        {todos.map((todo, index) => {
                            return (
                                <li key={todo+index}>
                                    {todo}
                                    <button onClick = {(index) => this.handleDelete(index)}>
                                        Delete
                                    </button>
                                </li>
                            )
                        })}
                    </ul>

                    <input
                    type='submit'
                    ></input>
                </form>

                <br />

                <AddUser></AddUser>
            </div>
        )
    }
}

class Site1 extends React.Component {
    constructor(props) {
        super(props)
        /* console.log('Constructor') */
    }

    state = {
        countries: [],
    }

    componentDidMount() {
        const api = 'https://restcountries.eu/rest/v2/all'
        fetch(api)
        .then(response => response.json())
        .then((data) => {
            this.setState({
                countries: data,
            })
            console.log(this.state.countries)
        })
        /* console.log('Component did mount') */
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true
    }

    componentDidUpdate(prevProps, prevState) {
        /* console.log(prevProps, prevState)
        console.log('Component did update') */
        /* localStorage.setItem('countries', JSON.stringify(this.state.countries)) */
    }

    render() {
        /* console.log('Render') */
        return null
    }
}

ReactDOM.render(
    <Site1></Site1>, root
)