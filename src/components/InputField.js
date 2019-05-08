import React from "react";

const InputField = ({label, type, name, value, placeholder, onChange, onBlur, error}) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            />

            <span>{error}</span>
        </div>
    );
};

export default InputField