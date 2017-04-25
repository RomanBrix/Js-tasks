/**
 * Created by RomanBrix on 4/24/17.
 */
import React, { Component } from 'react';

export default class SubTask extends Component {
    render(){
        const { todo, subTaskChange } = this.props;
        const innit = todo.sub_text.map((elem, index)=>{
            return <li key={index}> { elem }

                        <button onClick={(e)=>{
                            const input = document.createElement('input'),
                                  li = e.target.parentElement;
                            li.appendChild(input);
                            input.value = elem;
                            input.onblur = () => {
                                const value= input.value,
                                id = todo.id;
                                subTaskChange(id, index , value );
                                li.removeChild(li.lastChild);
                            }
                        }}> change/delete </button>
                    </li>
        });

        if(todo.sub_text.length > 0) {
            return <ul className="subClass">
                {innit}
            </ul>
        }
        else{return <ul></ul>}
    }
}