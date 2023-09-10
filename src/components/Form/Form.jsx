import React, { useState } from "react";
import PropTypes from 'prop-types';
import css from './Form.module.css';

export const Form = ({ onAddContact }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = e => {
        const { name, value } = e.target;
        if (name === 'name') {
            setName(value);
        } else if (name === 'number') {
            setNumber(value);
        }
    };

    const handleFormSubmit = e => {
        e.preventDefault();
        onAddContact({ name, number });
        reset();
    };

    const reset = () => {
        setName('');
        setNumber('');
    };

    return (
        <form className={css.form} onSubmit={handleFormSubmit}>
                        <label className={css.label}><span className={css.span}>Name</span>
            <input className={css.input}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={name}
                onChange={handleChange}
            />
            </label>
            <label className={css.label}><span className={css.span}>Number</span>
                <input className={css.inputNumber}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={handleChange}
                    />
            </label>
            <button className={css.button}type="submit">Add contact</button>
        </form>
    );
};

Form.propTypes = {
    onAddContact: PropTypes.func.isRequired,
};

export default Form;
