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

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    const { onItemAdded } = this.props;
    const { label } = this.state;

    e.preventDefault();
    onItemAdded(label);
    this.setState({
      label: '',
    });
  };

  render() {
    const { label } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <input className="new-todo" placeholder="What needs to be done?" onChange={this.onLabelChange} value={label} />
      </form>
    );
  }
}
