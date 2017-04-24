/**
 * Created by RomanBrix on 4/24/17.
 */
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
        sub_text: ['text', 'asd','']
    }
];
function todoList(state=initialState, action) {

    switch (action.type){
        case 'ADD' :
            return [
                ...state,
                {
                    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1 || 0,
                    todo: action.todo,
                    check: false,
                    sub_text:[]
                }

            ];


        case 'DELETE':
            return state.filter(todo => todo.id !== action.id);


        case 'CHECK':
            // console.log(state);
            // console.log(state[1].id);
            // state[action.id].check = action.check;
            // state.filter((elem) => {
            //     if(elem.id === action.id) {
            //         elem.id = action.check;
            //     }
            // });
            //
            for (let elem of state){
                if(elem.id === action.id) {
                    elem.check = action.check;

                }else {}
            }



        case 'ADD_SUB':
            // console.log("ADD_SUB "+ action.id, action.todo);
            for (let elem of state){
                if(elem.id === action.id) {
                    elem.sub_text.push(action.todo);

                }else {}
            }
            return [...state];


        case 'CHNG_SUB':
            for (let elem of state) {


                    if (elem.id === action.id) {
                        elem.sub_text[action.index] = action.todo;
                        console.log( elem.sub_text[action.index].length );
                        // if(action.todo.length === 0){elem.sub_text.filter(val =>val !== action.todo)}
                        // не работает фильтр
                    } else {
                    }


        }
            return [...state];



        default: return state;
    }

}
export default todoList;