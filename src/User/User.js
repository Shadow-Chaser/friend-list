import React from 'react';
import './User.css'

const User = (props) => {

    return (
        <div className='user'>
            
            <img src={props.user.image} alt=""/>
            <div>
                <h3>Name : {props.user.name}</h3>
                <h5>Email : {props.user.email}</h5>
                <h5>Website : {props.user.website}</h5>
                <h5>City : {props.user.address.city}</h5>
                <h5>Company : {props.user.company.name}</h5>
                <h5>Salary : $ {props.user.salary}</h5>
                <button onClick={()=>props.handleAddFriend(props.user)} >Add Friend</button>
            </div>

        </div>
    );
};

export default User;