/**
 * Created by RomanBrix on 4/20/17.
 */
import React, { Component } from 'react';

export default class toDoBody  extends Component{
    render(){
        const { count } = this.props;
        return(
            <h1>You must do '{ count }' tasks</h1>
        )
    }
}