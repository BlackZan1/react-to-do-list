import React, { Component } from 'react';
import ToDoTask from './toDoTask.jsx.js';
import './toDoList.scss';
import bg from '../img/bg.jpg';
import loader from '../img/spiner.gif';
import reactLogo from '../img/react.svg';
import nodeLogo from '../img/node-logo.png';
import electronLogo from '../img/electron.png';
import moment from 'moment';
import { tz } from 'moment-timezone';

class ToDoList extends Component {
    componentDidMount() {
        console.log(localStorage.getItem('todo'))

        localStorage.clear()

        if(localStorage.getItem('todo')){
            console.log(this.state.tasks)

            this.setState((prevState) => {
                return {
                    tasks: prevState.tasks.concat(JSON.parse(localStorage.getItem('todo'))),
                }
            })
        }
    }

    componentDidUpdate() {
        localStorage.setItem(
            'todo',
            JSON.stringify(this.state.tasks)
        )
    }

    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
            time: [],
        };

        this.addTask = this.addTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    } 

    showDate() {
        let date = new Date();
        let month = date.getMonth(), day = date.getDay(), countDay = date.getDate();
        let monthes = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        return (
            <h2>{days[day]}, {monthes[month]} {countDay}</h2>
        )
    }

    showTime() {
        setInterval(() => {
            this.setState((prevState) => {
                return {
                    time: moment().tz('Asia/Bishkek').format('h:mm:ss'),
                }
            })
        }, 1000);
    }

    addTask(ev) {
        ev.preventDefault();

        if(this._inputTask.value !== "") {
            let newTask = {
                text: this._inputTask.value,
                key: Date.now(),
            };

            this.setState((prevState) => {
                return {
                    tasks: prevState.tasks.concat(newTask),
                }
            });
        }

        this._inputTask.value = '';

        console.log(this.state)
    }

    deleteTask(key) {
        let filteredTasks = this.state.tasks.filter((task) => {
            return( task.key !== key);
        });

        this.setState({
            tasks: filteredTasks,
        })
    }

    render() {
        return (
            <div className='list-main'>
                {/* <p className='logo'>iDo List</p> */}

                <img className="list-logo-react" src={reactLogo} alt="reactGO!"/>
                <img className="list-logo-node" src={nodeLogo} alt="nodeGO!"/>
                <img className="list-logo-electron" src={electronLogo} alt="electronGO!"/>

                <header>
                    <div className="list-main-bg">
                        {this.showDate()}
                        {this.showTime()}

                        <h1>{this.state.time.length > 0 ? this.state.time : <img src={loader} alt='load...'/> }</h1>

                        <img src={bg} alt="bg-img"/>
                    </div>

                    <form onSubmit={this.addTask}>
                        <input ref={(text) => this._inputTask = text} type="text" placeholder="Enter your task..." />
                        <button type="submit">Add</button>
                    </form>
                </header>
                
                <main id='list'>
                    <ToDoTask entries={this.state.tasks} delete={this.deleteTask}/>
                </main>
            </div>
        );
    }
}

export default ToDoList;