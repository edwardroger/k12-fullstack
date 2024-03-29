import React from 'react'
import './List.css'

const List = (props) => {

    const handleRemoveTodo = (index) => {
        props.removeTodo(index);
    }

    return (
        <>
            <div className="list">
                { props.list && props.list.map((item, key) => {
                    return (
                        <div className="list-element_child">
                            <p>{ key+1 }. { item.name }</p>
                            <button onClick={ () => handleRemoveTodo(key) } className="btn-delete">X</button>
                        </div>
                    )
                })}
                {/* for (let key = 0; key < array.length; i++) {
                    const element = array[key];
                } */}
            </div>
        </>
    )
}

export default List