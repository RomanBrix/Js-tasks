/**
 * Created by RomanBrix on 4/25/17.
 */
import shortid from 'shortid';
import { ADD_TODO, DELETE_TODO, CHECK_TODO, ADD_SUB, CHNG_SUB } from '../constants';
// import Immutable from 'immutable';

// Immutable.fromJS()
const initialState = [
  {
    id: shortid.generate(),
    todo: 'task1',
    check: false,
    sub_text: []
  },
  {
    id: shortid.generate(),
    todo: 'task2',
    check: false,
    sub: true,
    sub_text: ['text', 'sample']
  }
];
export default function todos(state = initialState, action) {
  switch (action.type) {


    case ADD_TODO :
      return [
        ...state,
        {
          id: shortid.generate(),
          todo: action.todo,
          check: false,
          sub_text: []
        }

      ];


    case DELETE_TODO:
      return state.filter((todo) => { return todo.id !== action.id; });


    case CHECK_TODO:
      for (const elem of state) {
        if (elem.id === action.id) {
          elem.check = action.check;
        }
      }
      return [...state];


    case ADD_SUB:
      for (const elem of state) {
        if (elem.id === action.id) {
          elem.sub_text.push(action.todo);
          elem.sub_text = elem.sub_text.filter((val) => { return val.length > 0; });
        }
      }
      return [...state];


    case CHNG_SUB:
      for (const elem of state) {
        if (elem.id === action.id) {
          elem.sub_text[action.index] = action.todo;
          elem.sub_text = elem.sub_text.filter((val) => { return val.length > 0; });
        }
      }
      return [...state];

    default: return state;
  }
}
