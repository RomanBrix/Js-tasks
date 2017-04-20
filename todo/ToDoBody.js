/**
 * Created by RomanBrix on 4/20/17.
 */
import React, { Component } from 'react';
import ToDoBodyInput from './ToDoBodyInput';
import ToDoContainer from './ToDoContainer';

export default class ToDoBody  extends Component{
    constructor(props){
        super(props);
        this.state = {
            todos: []
        };
    }
    addToDo(todo){
        let todos = this.state.todos;
        todos.push(todo);
        this.setState({ todos });
    }
    render(){
        const { todos } = this.state;
        return (
            <div>
                <ToDoBodyInput addToDo={this.addToDo.bind(this)}/>
                <ToDoContainer todos={ todos }/>
            </div>
        );

    }
}