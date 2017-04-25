/**
 * Created by RomanBrix on 4/24/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToDoItem  from './ToDoItem';
import { ADD_TODO, DELETE_TODO, CHECK_TODO, ADD_SUB, CHNG_SUB} from '../constants/ActionTypes'


class App extends Component{

    addToDo(){
        const  input  = this.input.value;
        const { onAddToDo } = this.props;
        onAddToDo(input);
    }
    deleteToDo(id){
        this.props.onDeleteToDo(id);
    }
    checkOrNo(id, e){
        let check = e.target.checked;
        this.props.onCheck(id, check ); // поменять
    }
    subTask(id, value){
        const { onSubTask } = this.props;
        onSubTask(+(id), value);
    }
    subTaskChange(id, index, value){
        const { onSubChange } = this.props;
        onSubChange(+(id), +(index), value);
    }


    render(){

        const { store } = this.props;
        const todosContainer = store.TODOS.map((todo)=>{
            return (
                <ToDoItem
                    key={todo.id}
                    todo = { todo }
                    checkOrNo = {this.checkOrNo.bind(this)}
                    deleteToDo = {this.deleteToDo.bind(this)}
                    subTask = {this.subTask.bind(this)}
                    subTaskChange = {this.subTaskChange.bind(this)}
                />

            )
        });

        return (
            <div>
                <input
                    type="text"
                    ref={ input =>{ this.input = input }}
                />

                <button onClick={this.addToDo.bind(this)}>Add ToDo</button>
                <ul>
                    { todosContainer }
                </ul>
            </div>)
    }
}
export default connect(
    state => ({
        store: state
    }),
    dispatch => ({
        onAddToDo: todo => {
          dispatch({ type: ADD_TODO, todo})
        },
        onDeleteToDo: id => {
            dispatch({ type: DELETE_TODO, id})
        },
        onCheck: (id, check) => {
            dispatch({ type: CHECK_TODO, check, id})
        },
        onSubTask: (id, todo) => {
            dispatch({ type: ADD_SUB, todo, id})

        },
        onSubChange:(id, index, todo)=>{
            dispatch({ type: CHNG_SUB, todo, id, index})
        }
    })
)(App);