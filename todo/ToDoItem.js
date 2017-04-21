/**
 * Created by RomanBrix on 4/20/17.
 */
import React, { Component } from 'react';

export default class todoItem extends Component{
    render(){
        const { todo, index, deleteToDo, checkOrNo  } = this.props;
        let check = this.props;
        return <p>
                    { index+1 }: { todo }
                    <input id={index}
                           type="checkbox"
                           onClick={()=>{
                                let elem = document.getElementById(index);
                                checkOrNo(elem.checked, index);
                            }}/>
                    <button onClick={()=>{
                        deleteToDo(todo);
                    }}> Delete</button>
                </p>
    };
}