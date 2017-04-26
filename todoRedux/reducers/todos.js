import shortid from 'shortid';
import Immutable from 'immutable';
import { ADD_TODO, DELETE_TODO, TOGGLE_CHECK, ADD_SUB, EDIT_SUB } from '../constants';

const initialState = Immutable.fromJS([
  {
    id: 'test',
    todo: 'task1',
    check: false,
    sub_text: []
  },
  {
    id: 'test2',
    todo: 'task2',
    check: false,
    sub: true,
    sub_text: ['text', 'sample']
  }
]);

export default function todos(state = initialState, action) {
  switch (action.type) {


    case ADD_TODO :
      return state.push(Immutable.fromJS({
        id: shortid.generate(),
        todo: action.todo,
        check: false,
        sub_text: []
      }));


    case DELETE_TODO:
        // action.id
      return state.filter((todo) => { return todo.get('id') !== action.id; });

    case TOGGLE_CHECK:
      const todoIndex = state.findIndex((item) => {
        return item.get('id') === action.id;
      });
      return state.setIn([todoIndex, 'check'], action.check);


    case ADD_SUB:
      const subIndex = state.findIndex((item) => {
        return item.get('id') === action.id;
      });

      return state.updateIn([subIndex], (item) => {
        return item.update('sub_text', (items) => {
          return items.push(action.todo);
        });
      });
// rename
    case EDIT_SUB:
      const editIndex = state.findIndex((item) => {
        return item.get('id') === action.id;
      });

      return state.updateIn([editIndex], (item) => {
        const change = item.get('sub_text').map((val, index) => {
          console.log(val, index, action.index, action.todo);
          if (index === action.index) {
            return action.todo;
          } else {
            return val;
          }
        });
        const delet = change.filter((val) => {
          return val.length !== 0;
        });
        return item.update('sub_text', (items) => {
          return items = delet;
        });
      });
    default: return state;
  }
}
