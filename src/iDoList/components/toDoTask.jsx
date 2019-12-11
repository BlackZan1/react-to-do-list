import React, { Component } from 'react';
import FlipMove from 'react-flip-move';

class ToDoTask extends Component {
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }

    createTasks(task) {
        return <li onClick={() => this.deleteTask(task.key)} key={ task.key }>{ task.text }</li>
    }

    deleteTask(key) {
        debugger;
        this.props.delete(key);
    }

    render() {
        let entries = this.props.entries;
        let listTasks = entries.map(this.createTasks);

        return (
            <div className="task-item">
                <FlipMove duration={250} easing='ease-out'>
                    {listTasks}
                </FlipMove>     
            </div>
        )
    }
}

export default ToDoTask;