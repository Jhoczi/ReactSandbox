import React from 'react';
import PropTypes from 'prop-types';
import Task from "./Task";

const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
        <>
            {/*Idk why I should use standard brackets not Pilsudski's Mustache in map func.*/}
            {tasks.map((task, index)=>
                (<Task key={index} task={task} onDelete={onDelete} onToggle={onToggle}/>
            ))}
        </>
        );
};

Tasks.propTypes = {
    tasks:PropTypes.array
};

export default Tasks;
