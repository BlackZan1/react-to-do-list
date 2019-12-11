import React from 'react';
import Item from './ToDoItem.js';
import PropTypes from 'prop-types';

const style = {
    ul: {
        listStyle: 'none',
        margin: `0 auto`,
        padding: 0,
        width: `80%`,
    }
}

const toDoList = (props) => {
    return (
        <div className='App-List'>
            <ul style={style.ul}>
                {
                    props.todos.map((item, index) => {
                        return <Item key={item.id} id={item.id} item={item} index={index} onChange={props.onChangeToggle}/>
                    })
                }
            </ul>
        </div>
    );
};

toDoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object),
    onChangeToggle: PropTypes.func.isRequired,
}

export default toDoList;