import './Task.css';
import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

export default class Task extends Component {
  static propTypes = {
    item: PropTypes.shape({
      label: PropTypes.string,
      completed: PropTypes.bool,
      editing: PropTypes.bool,
      dateСreation: PropTypes.string,
      id: PropTypes.number,
    }).isRequired,
    onDeleted: PropTypes.func.isRequired,
    onToggleEdit: PropTypes.func.isRequired,
    addEditedItem: PropTypes.func.isRequired,
    onToggleDone: PropTypes.func.isRequired,
  };

  // обновляет label при потере фокуса с input
  handleChange = (e) => {
    const { item, addEditedItem } = this.props;
    const newItem = { ...item };

    newItem.label = e.target.value;
    newItem.editing = false;

    addEditedItem(item.id, newItem);
  };

  // обновляет label при нажатии Enter
  handleChangeKey = (e) => {
    if (e.key === 'Enter') {
      this.handleChange(e);
    }
  };

  render() {
    // console.log(Task.defaultProps)
    // console.log(this.props)

    const { onDeleted, onToggleEdit, onToggleDone, item } = this.props;
    const { label, dateСreation, completed, editing } = item;

    // превращем строку обатно в объект
    const dateObj = new Date(dateСreation);
    // возвращает строку с информацией сколько минут/секунд назад создан Task
    const wasCreated = formatDistanceToNow(dateObj, { includeSeconds: true }, { addSuffix: true });

    let className = '';

    if (completed) {
      className += ' completed';
    }

    if (editing) {
      className += ' editing';
    }

    return (
      <li className={className}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={!!completed} onChange={onToggleDone} />
          <label>
            <span className="description">{label}</span>
            <span className="created">created {wasCreated} ago</span>
          </label>
          <button className="icon icon-edit" type="button" aria-label="Icon input edit" onClick={onToggleEdit} />
          <button className="icon icon-destroy" type="button" aria-label="Icon input deleted" onClick={onDeleted} />
        </div>
        <input
          type="text"
          className="edit"
          defaultValue={label}
          onBlur={this.handleChange}
          onKeyPress={this.handleChangeKey}
        />
      </li>
    );
  }
}
