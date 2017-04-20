/**
 * Created by RomanBrix on 4/20/17.
 */
import React, { Component } from 'react';

export default class ToDoBodyInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: ''
        };
    }
    render() {
        const {value} = this.state;
        const {addToDo} = this.props;

        return (
            <div>
                <input onBlur={ ({ target }) => {
                    this.setState({
                        value: target.value
                    })
                }}/>
                <button onClick={()=>{
                    addToDo(value);
                }}>
                    Add ToDo
                </button>

            </div>
        );
    }
}