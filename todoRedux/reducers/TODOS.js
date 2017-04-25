/**
 * Created by RomanBrix on 4/25/17.
 */
import { ADD_TODO, DELETE_TODO, CHECK_TODO, ADD_SUB, CHNG_SUB} from '../constants/ActionTypes'

const initialState = [
    {
        id: 0,
        todo: "task1",
        check: false,
        sub_text: []
    },
    {
        id: 1,
        todo: "task2",
        check: false,
        sub: true,
        sub_text: ['text', 'sample']
    }
];
export default function TODOS(state=initialState, action) {

    switch (action.type){


        case ADD_TODO :
            return [
                ...state,
                {
                    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1 || 0,
                    todo: action.todo,
                    check: false,
                    sub_text:[]
                }

            ];


        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.id);


        case CHECK_TODO:
            for (let elem of state){
                if(elem.id === action.id) {

                    elem.check = action.check;
                }else {}
            }
            return [...state];


        case ADD_SUB:
            for (let elem of state){
                if(elem.id === action.id) {
                    elem.sub_text.push(action.todo);
                    const new_sub_text = elem.sub_text.filter(val =>val.length > 0);
                    elem.sub_text = new_sub_text;

                }else {}
            }
            return [...state];


        case CHNG_SUB:
            for (let elem of state) {
                if (elem.id === action.id) {
                    elem.sub_text[action.index] = action.todo;
                    const new_sub_text = elem.sub_text.filter(val =>val.length > 0);
                    elem.sub_text = new_sub_text;
                } else {}
            }
            return [...state];

        default: return state;
    }
}
