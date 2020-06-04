import React from "react";
import './manager.css'

const Manager = () => {
    return (
        <div className='manager-container'>
            <div>
                <label className="manager-label" htmlFor="create-new-task">Title</label>
                <input type="text" id="task-title" name="create-new-task" />
            </div>
            <div>
                <label htmlFor="create-new-task">Description</label>
                <input type="text" id="task-description" name="create-new-task" />
            </div>
            <div>
                <input type="submit" id="task-create" name="create-new-task"/>
            </div>
        </div>
    )
}

export default Manager;