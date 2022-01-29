import React from "react";
import PropTypes from "prop-types";
import { Item, List, Wrapper } from "./ContactList.styled";

const ContactList = ({ persons, onDeleteContact }) => {
  return (
    <List>
      {persons.map(({ id, name, number }) => (
        <Item key={id} className="item">
          <Wrapper>
            <p>{name}: </p>
            <p>{number}</p>
          </Wrapper>
          <button onClick={() => onDeleteContact(id)}>Delete</button>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  persons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
