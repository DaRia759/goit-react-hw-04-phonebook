import React from "react";
import PropTypes from 'prop-types';
import css from './ContactItem.module.css'

export const ContactsItem = ({ contacts, onDeleteContact }) => {
    return (
        <ul>
            {contacts.map(({ id, name, number }) => (
                <li key={id} className={css.contact}>
                    {name}: {number}{' '}
                    <button onClick={() => onDeleteContact(id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

ContactsItem.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsItem;
