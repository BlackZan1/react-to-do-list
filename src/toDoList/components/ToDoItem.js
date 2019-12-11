import React from 'react';
import PropTypes from 'prop-types';
import Context from '../context.js';

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        border: '1px solid #ccc',
        borderRadius: '20px',
        fontSize: '16px',
        width: '100%',
        height: 50,
        margin: '15px 0px 20px 0px',
        textAlign: 'left',
        animationName: 'slideInLeft',
        animationDuration: '.7s',
        animationTimingFunction: 'ease-in-out',
    },
    div: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    xbtn: {
        color: 'white',
        borderRadius: 10,
        width: '30px',
        height: '30px',
        alignSelf: 'center',
    },
    checkbox: {
        background: '#fff',
        border: '1px solid #dcdcdc',
        borderRadius: '10px', 
    },
    p: {
        margin: '0px 10px 0px 10px',
    }
};

function ToDoItem(props) {
    const { onRemoveToggle } = React.useContext(Context);
    const classes = [];

    if(props.item.complete) classes.push('done');

    return (
        <li key={props.id} style={styles.li} className={classes.join(' ')}>
            <div style={styles.div}>

                <input className='checkbox' type="checkbox" onChange={() => props.onChange(props.item.id)}
                checked={props.item.complete}/>
                &nbsp;

                <h2>{props.index + 1}</h2>

                <p style={styles.p}>
                    {props.item.title}
                </p>
            </div>

            <div>
                <button className='del-button' onClick={onRemoveToggle.bind(null, props.item.id)} style={styles.xbtn}>&times;</button>
            </div>
            
        </li>
    );
};

ToDoItem.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired,
}

export default ToDoItem;