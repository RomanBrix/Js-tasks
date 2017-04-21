/**
 * Created by RomanBrix on 4/20/17.
 */
import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

export default class ToDoBodyInput extends Component {
    render(){
        const{ todos, deleteToDo,checkOrNo } = this.props;
        const todosContainer = todos.map((todo, index)=>{
            return(
                <ToDoItem
                    deleteToDo = { deleteToDo }
                    checkOrNo = { checkOrNo }
                    todo = { todo.todo }
                    check = { todo.check }
                    key={ index }
                    index={ index }
                />
            )
        });
        return(
            <div>
                {todosContainer}
            </div>)
    }

}