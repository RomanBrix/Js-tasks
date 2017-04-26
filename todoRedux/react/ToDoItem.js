/**
 * Created by RomanBrix on 4/24/17.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SubTask from './SubTask';

export default class ToDoItem extends Component {
  render() {
    const { todo, checkOrNo, deleteToDo, subTask, subTaskChange } = this.props;
    // console.log("todo is: " + todo.toJS().todo);
    return (
      <li>
        <input
          type="checkbox"
          onClick={(e) => {
            checkOrNo(todo.id, e);
          }}
        /> {todo.todo}
        <button
          onClick={() => {
            deleteToDo(todo.id);
          }}
        > delete </button>
        <button
          onClick={
                    (e) => {
                      const parent = e.target.parentElement;
                      const children = parent.children;
                      const child = children[children.length - 1];
                      const li = document.createElement('LI');
                      const input = document.createElement('INPUT');
                      li.appendChild(input);
                      child.appendChild(li);


                      input.onblur = () => {
                        subTask(todo.id, input.value);
                        child.removeChild(child.lastChild);
                      };
                    }
                }
        > add SubTask </button>
        <SubTask todo={todo} subTaskChange={subTaskChange} />
      </li>

    );
  }
}
ToDoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  checkOrNo: PropTypes.func.isRequired,
  deleteToDo: PropTypes.func.isRequired,
  subTask: PropTypes.func.isRequired,
  subTaskChange: PropTypes.func.isRequired
};
