import React from "react";
import ReactDOM from "react-dom";
/* import App from './App';
import './index.css';
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement); */

const root = document.getElementById("root");

/* 
const name = 'Xurxe'
const year = new Date().getFullYear();
const title = <h1>Hello {name}! ({year})</h1>

const header = (
    <header>
        <h1>
            {title}
        </h1>
    </header>
) */

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
}

/* ReactDOM.render(header, root); */

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
    )
}

const Greeting = (props) => {
    const {name} = props;
    return (
        <h3>Welcome, {name}!</h3>
    )
}

class Site extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            count: 0,
            isLoggedIn: false,
            name: 'Xurxe',
            todos: ['Todo 1', 'Todo 2', 'Todo 3'],
            todo: '',
        }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleSubtract = this.handleSubtract.bind(this);
        this.handleLogIn = this.handleLogIn.bind(this);
        this.handleInput = this.handleInput.bind(this);

    }

/* 
    handleAdd () {
        this.setState({count: this.state.count + 1})
    }

    handleSubtract () {
        this.setState({count: this.state.count - 1})
    }
    
*/

    handleAdd () {
        this.setState((prevState => ({count: prevState.count + 1})))
    }

    handleSubtract () {
        this.setState((prevState => ({count: prevState.count - 1})))
    }

    handleLogIn() {
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        })
    }

    handleInput(e) {
        this.setState({
            todo: e.target.value
        })
    }

    render() {
        const {count, isLoggedIn, todos} = this.state;
        return (
            <div>
                <Header
                year={new Date().getFullYear()}>
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

                <p>Add a task to your to-do list:</p>

                <input
                type='text'
                value={this.state.todo}
                placeholder='Task'
                onChange={(e) => this.handleInput}
                ></input>
                <ul>
                    {todos.map((todo) => {
                        return <li key={todo}>{todo}</li>
                    })}
                </ul>

                

            </div>
        )
    }
}

/* ReactDOM.render(
    <Header
        name="Xurxe"
        year={new Date().getFullYear()}
    >I can add child props here.</Header>, root
) */

ReactDOM.render(
    <Site></Site>, root
)