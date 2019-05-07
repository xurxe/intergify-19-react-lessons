import React from "react";


class AddUser extends React.Component {
    firstName = React.createRef()
    title = React.createRef()

    state = {
        firstName: "",
        textContent: "",
    }

    handleSubmit = (event) => {
        event.preventDefault();
            this.setState({firstName: this.state.firstName.current.value});
    };

    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                    type='text'
                    name="firstName"
                    placeholder='First name'
                    ref={this.firstName}
                    ></input>

                    <input
                    type='submit'
                    ></input>
                </form>

            </div>
        )
    }
}

export default AddUser
