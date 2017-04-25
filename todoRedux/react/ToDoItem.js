/**
 * Created by RomanBrix on 4/24/17.
 */
import React, { Component } from 'react';
import SubTask from './SubTask';
export default class ToDoItem extends Component{
    render(){
        const { todo, checkOrNo, deleteToDo, subTask, subTaskChange } = this.props;

        return (
            <li id={todo.id} >
                <input type="checkbox"
                       onClick={(e)=>{
                           let id = +(e.target.parentElement.id);
                           checkOrNo(id, e)
                       }}/> {todo.todo}
                <button
                    onClick={(e)=>{
                        let id = +(e.target.parentElement.id);
                        deleteToDo(id)
                    }}
                > delete </button>
                <button onClick={
                    (e) => {
                        const parent = e.target.parentElement,
                              children = parent.children,
                              child = children[children.length - 1],
                              li = document.createElement("LI"),
                              input = document.createElement("INPUT");
                        li.appendChild(input);
                        child.appendChild(li);


                        input.onblur = ()=> {
                            subTask(parent.id ,input.value);
                            child.removeChild(child.lastChild);
                        }
                    }
                }> add SubTask </button>
                <SubTask todo = {todo} subTaskChange={subTaskChange}/>
            </li>

        )
    };
}