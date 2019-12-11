import React from 'react';
import ReactDOM from 'react-dom';
import ToDolist from './toDoList/App.jsx';
import './index.scss';

setInterval(() => {
    ReactDOM.render( <ToDolist />, document.getElementById('list') );
}, 100)


