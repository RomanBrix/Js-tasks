/**
 * Created by RomanBrix on 4/20/17.
 */
import React, { Component } from 'react';
import ToDoBodyInput from './ToDoBodyInput';
import ToDoContainer from './ToDoContainer';
import ToDoHead from './ToDoHead';

export default class ToDoBody  extends Component{
    constructor(props){
        super(props);
        this.state = {
            todos: []
        };
    }

    addToDo(todo,check){
        let todos = this.state.todos;
        todos.push({
            todo,
            check
        });
        this.setState({ todos });
    }

    deleteToDo(val){
        let todo = this.state.todos;
        let todos = todo.filter((position) => {
            return position.todo !== val;
        });
        this.setState({ todos });
    }

    checkOrNo(check, index){
        let elem = document.getElementById(index).parentElement;
        let todos = this.state.todos;

        if(todos[index].check !== check) {
            todos[index].check = check;
        }
        if(check){
            elem.style.backgroundColor = 'green';
        }else {
            elem.style.backgroundColor = 'orange';

        }
        this.setState({ todos });
    }

    render(){
        const { todos } = this.state;

        return (
            <div>
                <ToDoHead count={ todos.length }/>
                <ToDoBodyInput addToDo={ this.addToDo.bind(this) }/>
                <ToDoContainer todos={ todos }
                               deleteToDo={ this.deleteToDo.bind(this) }
                               checkOrNo={ this.checkOrNo.bind(this) }
                />
            </div>
        );

    }
}