//Component for testing

import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from '../context'

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem 1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '.5rem',
    animation: 'slideInLeft 1s ease-in-left',
  },
  input: {
    marginRight: '1rem'
  }
}

function TodoItem(props) {
  const { onRemoveToggle } = useContext(Context)
  const classes = []

  if (props.item.complete) {
    classes.push('done')
  }

  return (
    <li style={styles.li}>
      <span className={classes.join(' ')}>
        <input
          type='checkbox'
          checked={props.item.completed}
          style={styles.input}
          onChange={() => props.onChange(props.item.id)}
        />
        <strong>{props.index + 1}</strong>
        &nbsp;
        {props.item.title}
      </span>

      <button className='rm' onClick={onRemoveToggle.bind(null, props.item.id)}>
        &times;
      </button>
    </li>
  )
}

TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired
}

export default TodoItem
