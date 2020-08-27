import React from 'react';
import './Course.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRunning } from '@fortawesome/free-solid-svg-icons'

const Course = (props) => {
    const {title, price} = props.course;
    return (
        <div className="items">
            <h4> {title} </h4> 
            <p>Course Price : {price}</p>
            <button className="btn btn-outline-success" onClick={() => props.handleAddCourse(props.course)}><FontAwesomeIcon icon={faRunning} /> <strong>Enroll Now</strong> </button>
        </div>
    );
};

export default Course;