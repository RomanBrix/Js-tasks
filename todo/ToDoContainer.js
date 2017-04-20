/**
 * Created by RomanBrix on 4/20/17.
 */
import React,{Component} from 'react';
import ToDoItem from './ToDoItem';

export default class ToDoBodyInput extends Component {
    render(){
        const{ todos } = this.props;
        const todosContainer = todos.map((todo, index)=>{
            console.log( index+": "+todo);
            return(
                <ToDoItem todo={todo} key={index} index={index}/>
            )
        });
        return(
            <div>
                {todosContainer}
            </div>)
    }

}