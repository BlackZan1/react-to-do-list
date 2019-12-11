import React, { useEffect } from 'react';
import ToDoList from './components/toDoList.jsx';
import Context from './context.js';
import Loader from './components/Loader.js';
import '../index.scss';
import Modal from './Modal/Modal.jsx';

const Add = React.lazy(() => new Promise(resolve => {
    setTimeout(() => {
        resolve(import('./components/AddToDo.jsx'))
    }, 1000)
}))

const App = (props) => {
    let [todos, setTodos] = React.useState([]);
    let [loading, setLoading] = React.useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(res => res.json())
        .then(todo => {

            setTimeout(() => {
                let inf = [
                    {id: 999, complete: false, title: 'Научиться React JS и Redux + Node JS'},
                    {id: 998, complete: false, title: 'Улыбаться'},
                    {id: 997, complete: false, title: 'Спорт'},
                ];

                setTodos(todos => todos.concat(inf));
                setTodos( todos => todos.concat(todo));
                setLoading(false);
            }, 1500)
            
        })
    }, [])

    const onChangeToggle = (id) => {
        setTodos(
            todos.map(todo => {
                if(id === todo.id) todo.complete = !todo.complete;

                return todo;
            })
        )
    }

    const onRemoveToggle = (id) => {
        setTodos(
            todos.filter((todo) => todo.id !== id)
        )
    }

    const addToggle = (value) => {
        setTodos(
            todos.concat([{
                id: Date.now(),
                title: value,
                complete: false,
            }])
        )
    }

    return (
        <Context.Provider value={ {onRemoveToggle} }>
            <div className='App-Wrapper'>

                <div className='App-Logo'>
                    <i className="fab fa-react"></i>
                    <h1>React toDo List</h1>

                    <Modal />
                </div>

                <React.Suspense fallback={ <Loader/> }>
                    <Add addToggle={addToggle}/>
                </React.Suspense>            

                {loading && <Loader/>}
                {todos.length ? <ToDoList todos={todos} onChangeToggle={onChangeToggle}/> : loading ? null : <h2>No tasks...</h2>}
                
            </div>
        </Context.Provider>
    );
}

export default App;