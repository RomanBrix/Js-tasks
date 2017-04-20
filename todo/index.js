/**
 * Created by RomanBrix on 4/20/17.
 */
import React from 'react';
import { render } from 'react-dom';
import ToDoBody from './ToDoBody';

const mountNode = document.getElementById('mountNode');
render(<ToDoBody/>, mountNode);