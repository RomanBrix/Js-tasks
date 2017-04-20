/**
 * Created by RomanBrix on 4/20/17.
 */
import React, { Component } from 'react';

export default class todoItem extends Component{
    render(){
        const { todo, index } = this.props;

        return <p>{ index }: { todo }</p>;
    }
}