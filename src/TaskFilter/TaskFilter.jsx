import React from "react";
import './taskFilter.css'

const TaskFilter = () => {
    return (
        <div className='task-filter-container'>
            <p>Filters:</p>
            <div>
                <input type="radio" id="all" name="filter" value="all" />
                <label htmlFor="all">All</label>
            </div>
            <div>
                <input type="radio" id="completed" name="filter" value="completed" />
                <label htmlFor="completed">Completed</label>
            </div>
            <div>
                <input type="radio" id="uncompleted" name="filter" value="uncompleted" />
                <label htmlFor="uncompleted">Uncompleted</label>
            </div>
        </div>
    )
}

export default TaskFilter;