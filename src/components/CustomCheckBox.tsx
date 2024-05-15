import { NONAME } from 'dns';
import React, { useState } from 'react'
import todoService from '../todoServices';
import TodoTypes from '../todo';

interface prototype {
    todo: TodoTypes
}
function CustomCheckBox({ todo }: prototype) {
    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        const updatedTodo = todoService.updateTodo(todo);
        updatedTodo.Done = !checked;

        setChecked(!checked);
    };

    return (
        <span className="custom-checkbox m-auto my-1" onClick={handleCheckboxChange}>
            {checked && <div className="checkmark"></div>}
        </span>
    );
}

export default CustomCheckBox