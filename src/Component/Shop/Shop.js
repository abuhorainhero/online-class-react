import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Shop.css'
import data from '../../FackData/fackData'
import Course from '../Course/Course';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [courses, setCourses] = useState(data);

    const [cart, setCart] = useState([]);

    const handleAddCourse = (course) => {
        const newCart = [...cart, course];
        return setCart(newCart);
    }

    return (
        <div className="container d-flex">
            <div className="info-container">
                {
                    courses.map(cla => <Course key={cla.id} course={cla} handleAddCourse={handleAddCourse}></Course>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;