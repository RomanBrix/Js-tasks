/**
 * Created by RomanBrix on 4/25/17.
 */
import * as types from '../constants';

export const addTodos = (todo) => { return ({ type: types.ADD_TODO, todo }); };
export const deleteTodo = (id) => { return ({ type: types.DELETE_TODO, id }); };
export const editTodo = (id, text) => { return ({ type: types.EDIT_TODO, id, text }); };
