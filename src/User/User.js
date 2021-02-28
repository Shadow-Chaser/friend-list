import React from 'react';
import './User.css'
const User = (props) => {

    return (
        <div className='user'>
            
            <img src={props.user.image} alt=""/>
            <div>
                <h3>Name : {props.user.name}</h3>
                <h5>Email : {props.user.email}</h5>
                <h5>Salary : $ {props.user.salary}</h5>
            </div>

        </div>
    );
};

export default User;