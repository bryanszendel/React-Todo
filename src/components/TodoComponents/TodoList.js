import React from 'react'
import Todo from './Todo';

const TodoList = props => {
  return (
    <div>
      {props.tasks.map( item => (
        <Todo key={item.id} item={item} toggleItem={props.toggleItem}/>
      ))}
      <button className="clear-btn" onClick={props.clearCompleted}>
        Clear Completed  😃
      </button>
    </div>
  )
}

export default TodoList;