import React from "react";

const Fieldset = ({type, name, values, onChange, onBlur}) => (
    <fieldset>
        <legend>
            {name.charAt(0).toUpperCase() + name.slice(1) + ': '}
        </legend>

        {values.map((value) => (
            <div key={value}>
                <input
                type={type}
                name={name}
                id={value}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                />

                <label htmlFor={value}>
                    {value.charAt(0).toUpperCase() + value.slice(1)}
                </label>
            </div>
        ))}
    </fieldset>
);

export default Fieldset