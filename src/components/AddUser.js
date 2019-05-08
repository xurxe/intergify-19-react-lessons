import React from "react";
import InputField from './InputField';
import Fieldset from './Fieldset'

class AddUser extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        age: '',
        gender: '',
        skills: { // finish
            HTML: false,
            CSS: false,
            JS: false,
        },

        touched: {
            firstName: false,
            lastName: false,
            age: false,
        },
    }

    handleChange = (event) => {
        const {name, value/* , type */} = event.target;

        this.setState({
            [name]: value,
        })
    }

    handleBlur = (event) => {
        const {name} = event.target;
        this.setState({
            touched:{...this.state.touched, [name]: true}
        })
        console.log(this.state.touched)
    }

    validate = () => {

        const errors = {
            firstName: '',
            lastName: '',
            age: '',
        }

        const {firstName, lastName, age} = this.state.touched;

        if (firstName && this.state.firstName.length < 2) {
            errors.firstName = 'Your first name should be at least 1 character.'
        }

        if (lastName && this.state.lastName.length < 2) {
            errors.lastName = 'Your last name should be at least 1 character.'
        }

        if (age && this.state.age < 16) {
            errors.age = 'You should be at least 16 years old.'
        }

        return errors;

    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.firstName, this.state.lastName, this.state.age, this.state.gender, this.state.skills.value);
        /* this.setState({firstName: this.state.firstName.current.value}); */
    };

    render () {
        const errors = this.validate();
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <InputField
                    label='First name: '
                    type='text'
                    name='firstName'
                    placeholder='First name'
                    value={this.state.firstName}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    error={errors.firstName}
                    ></InputField>

                    <InputField
                    label='Last name: '
                    type='text'
                    name='lastName'
                    placeholder='Last name'
                    value={this.state.lastName}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    error={errors.lastName}
                    ></InputField>

                    <InputField
                    label='Age: '
                    type='number'
                    name='age'
                    placeholder='age'
                    value={this.state.age}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    error={errors.age}
                    ></InputField>

                    <Fieldset
                    type='radio'
                    name='gender'
                    values={['man', 'woman', 'other']}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    ></Fieldset>

                    <Fieldset
                    type='checkbox'
                    name='skills'
                    values={['HTML', 'CSS', 'JS']}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    ></Fieldset>

                    <input
                    type='submit'
                    />
                </form>

            </div>
        )
    }
}

export default AddUser
