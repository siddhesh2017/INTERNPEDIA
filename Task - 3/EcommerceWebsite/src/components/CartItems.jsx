import React from 'react';
import { useSelector } from 'react-redux';
import MenuItemCard from './MenuItemCard';
import { useState } from 'react';

const CartItems = ()=>{

    const cardItems = useSelector(store => store.cart.items);
    // const [btnValue, setBtnValue] = useState(''); 
    // setBtnValue(btnValue);
    // console.log(cardItems);
    return(
        <div className='menu-list'>
            <h1>Cart</h1>
            {cardItems?.map((item, index) => <MenuItemCard key={index*2+9} btnval={"Remove"}  {...item} />)}
        </div>
    )
}

export default CartItems;