import React from 'react';

const FromInputToValue = (defValue = '') => {
    const [value, setValue] = React.useState(defValue);

    return {
        bind: {
            value,
            onChange: ev => setValue(ev.target.value),
        },
        clear: () => setValue(''),
        value: () => value,
    }
}

const AddToDo = (props) => {
    const input = FromInputToValue();

    const eventHandler = (ev) => {
        ev.preventDefault();

        if(input.value().trim()) {
            props.addToggle(input.value());
            input.clear();
        }
    }

    return (
        <form onSubmit={(ev) => eventHandler(ev)} className='form'>
            <input placeholder={'Tap, tap, tap here...'} className='form-input' type="text" {...input.bind}/>
            <button className='form-button'>Добавить</button>
        </form>
    );
};

export default AddToDo;