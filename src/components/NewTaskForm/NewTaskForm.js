import React, { Component } from 'react';
import './NewTaskForm.css';
import PropTypes from 'prop-types';

export default class NewTaskForm extends Component {
  static propTypes = {
    onItemAdded: PropTypes.func.isRequired,
  };

  state = {
    label: '',
  };

  onLabelChange = (event) => {
    this.setState({
      label: event.target.value,
    });
  };

  onSubmit = (event) => {
    const { onItemAdded } = this.props;
    const { label } = this.state;

    event.preventDefault();
    onItemAdded(label);
    this.setState({
      label: '',
    });
  };

  render() {
    const { label } = this.state;

    return (
      <form onSubmit={this.onSubmit} className="new-todo-form">
        <input className="new-todo" placeholder="What needs to be done?" onChange={this.onLabelChange} value={label} />
        {/* <input className="new-todo-form__timer" placeholder="Min"/>
        <input className="new-todo-form__timer" placeholder="Sec"/> */}
      </form>
    );
  }
}
