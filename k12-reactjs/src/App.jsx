import React, { useState } from 'react'
import InputAddNew from './components/Day40/InputAddNew'
import List from './components/Day40/List'
import ClearAll from './components/Day40/ClearAll'
import './App.css'

const App = () => {
    const [listToDo, setListToDo] = useState([]);

    const handleSaveListTodo = (item) => {
        setListToDo([...listToDo, item]);
    }

    return (
        <>
            <div className="content">
                <h2>Todo App</h2>
                <div className="content-body">
                    <InputAddNew handleSave={ handleSaveListTodo } />
                    <List list={ listToDo } />
                </div>
                <div className="content-footer">
                    <ClearAll list={ listToDo } />
                </div>
            </div>
        </>
    )
}

export default App