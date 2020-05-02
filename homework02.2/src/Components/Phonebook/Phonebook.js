import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./Phonebook.module.css";
import { v4 as uuidv4 } from "uuid";

class Phonebook extends Component {
  state = {
    name: "",
    number: "",
  };

  changeHandler = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const contact = {
      id: uuidv4(),
      name: name,
      number: number,
    };
    this.props.addContact(contact);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.submitHandler} className={classes.form}>
        <h2>Phonebook</h2>
        <label htmlFor="name" className={classes.lebel}>
          Name
          <input
            type="text"
            id={name}
            name="name"
            value={name}
            onChange={this.changeHandler}
          />
        </label>

        <label htmlFor="number" className={classes.lebel}>
          Number
          <input
            type="text"
            name="number"
            value={number}
            onChange={this.changeHandler}
            id={number}
          />
        </label>
        <button type="submit" className={classes.btn}>
          Add contact
        </button>
      </form>
    );
  }
}

export default Phonebook;
