/* eslint-disable react/jsx-no-bind */
/**
 * Created by RomanBrix on 4/24/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ToDoItem from './ToDoItem';
import { ADD_TODO, DELETE_TODO, TOGGLE_CHECK, ADD_SUB, EDIT_SUB } from '../constants';
// import { addTodos } from '../actions';

class App extends Component {

  addToDo() {
    const input = this.input.value;
    const { onAddToDo } = this.props;
    onAddToDo(input);
  }
  deleteToDo(id) {
    this.props.onDeleteToDo(id);
  }
  checkOrNo(id, e) {
    const check = e.target.checked;
    this.props.onCheck(id, check);
  }
  subTask(id, value) {
    const { onSubTask } = this.props;
    onSubTask(id, value);
  }
  subTaskChange(id, index, value) {
    const { onSubChange } = this.props;
    onSubChange(id, index, value);
  }


  render() {
    const { todos } = this.props;
    const todosContainer = todos.toJS().map((todo) => {
      return (
        <ToDoItem
          key={todo.id}
          todo={todo}
          checkOrNo={this.checkOrNo.bind(this)}
          deleteToDo={this.deleteToDo.bind(this)}
          subTask={this.subTask.bind(this)}
          subTaskChange={this.subTaskChange.bind(this)}
        />

      );
    });

    return (
      <div>
        <input
          type="text"
          ref={(input) => { this.input = input; }}
        />

        <button onClick={this.addToDo.bind(this)}>Add ToDo</button>
        <ul>
          { todosContainer }
        </ul>
      </div>);
  }
}
const mapStateToProps = (state) => {
  return ({
    todos: state.todos
  });
};

export default connect(mapStateToProps,
    (dispatch) => {
      return ({
        onAddToDo: (todo) => {
          dispatch({ type: ADD_TODO, todo });
        },
        onDeleteToDo: (id) => {
          dispatch({ type: DELETE_TODO, id });
        },
        onCheck: (id, check) => {
          dispatch({ type: TOGGLE_CHECK, check, id });
        },
        onSubTask: (id, todo) => {
          dispatch({ type: ADD_SUB, todo, id });
        },
        onSubChange: (id, index, todo) => {
          dispatch({ type: EDIT_SUB, todo, id, index });
        }
      });
    })(App);

App.propTypes = {
  todos: ImmutablePropTypes.list.isRequired,
  onAddToDo: PropTypes.func.isRequired,
  onDeleteToDo: PropTypes.func.isRequired,
  onCheck: PropTypes.func.isRequired,
  onSubTask: PropTypes.func.isRequired,
  onSubChange: PropTypes.func.isRequired
};
