import React from 'react';

const Cart = (props) => {
    return (
        <div className='p-5'>
            <h2>{props.userCount.length} Friends Added</h2>
            <h2>Total Salary : $ {props.totalSalary}</h2>
        </div>
    );
};

export default Cart;