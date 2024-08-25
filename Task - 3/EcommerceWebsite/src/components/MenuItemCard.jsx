import React from 'react';
import { MENU_IMG_URL } from '../config';
import PLUS from "../assets/img/plus.png"
import NONVEG from '../assets/img/nonveg-icon.png';
import VEG from '../assets/img/veg-icon.png';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/redux-store/cartSlice';

const MenuItemCard = (props) => {
    const { description, finalPrice, name, inStock, isVeg, imageId, btnVal } = props;
    const dispatch = useDispatch();
    {console.log(btnVal)}


    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }
    
    return (
        <div className='menu-item'>
            <div className='menu-item-data'>
                <div className='menu-item-img'>
                    <img  src={MENU_IMG_URL+imageId}/>
                </div>
                <div className='menu-item-info'>
                    <h2>{name}</h2>
                    <h3>{finalPrice}</h3>    
                    <h5 className='menu-item-h5'>{isVeg? <img className='veg-nonveg-icon' src={VEG} /> : <img className='veg-nonveg-icon' src={NONVEG}/>} | {inStock? "instock" : "out of stock"}</h5>
                    <p>{description}</p>
                </div>
            </div>
            <div className='menu-item-btn'>
                <button className='menu-item-btn' onClick={() => handleAddItem(props)} >{ btnVal } <img className='plus-icon' src={PLUS} /></button>
            </div>
        </div>
        
    )
}

export default MenuItemCard;

