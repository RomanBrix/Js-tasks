/**
 * Created by RomanBrix on 4/24/17.
 */
import React, { Component } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';

export default class SubTask extends Component {
  render() {
    const { todo, subTaskChange } = this.props;
    const innit = todo.sub_text.map((elem, index) => {
      return (<li key={shortid.generate()}> { elem }

        <button
          onClick={(e) => {
            const input = document.createElement('input');
            const li = e.target.parentElement;
            li.appendChild(input);
            input.value = elem;
            input.onblur = () => {
              const value = input.value;
              const id = todo.id;
              subTaskChange(id, index, value);
              li.removeChild(li.lastChild);
            };
          }}
        > change/delete </button>
      </li>);
    });

    if (todo.sub_text.length > 0) {
      return (<ul>
        {innit}
      </ul>);
    } else { return (<ul />); }
  }
}

SubTask.propTypes = {
  todo: PropTypes.object.isRequired,
  subTaskChange: PropTypes.func.isRequired
};
