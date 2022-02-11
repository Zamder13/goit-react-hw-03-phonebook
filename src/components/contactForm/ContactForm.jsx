import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormTable, AddButton, Wrapper } from "./ContactForm.styled.jsx";

class Form extends Component {
  state = { name: "", number: "" };

  handleChangeinput = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const data = this.state;

    return (
      <FormTable onSubmit={this.handleSubmit} className="form">
        <Wrapper>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={data.name}
              onChange={this.handleChangeinput}
            />
          </label>

          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={data.number}
              onChange={this.handleChangeinput}
            />
          </label>
        </Wrapper>

        <AddButton type="submit">Add contact</AddButton>
      </FormTable>
    );
  }
}


Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Form;
