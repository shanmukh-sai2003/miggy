import {IMG_URL} from "../utils/constants";
import {useDispatch} from "react-redux";
import {addItem, removeItem} from "../utils/store/cartSlice";
import { useState } from "react";

function CartItem(props) {
    const {info, count} = props;
    const dispatch = useDispatch();

    function handleAddItem() {
        dispatch(addItem(info));
    }

    function handleRemoveItem() {
        dispatch(removeItem(info));
    }

    return (
        <div id="cart-item" className="menu-item-card">
            <div>
                <p className="item-name">{info.name}</p>
                <p className="item-price">Rs. {info.price  ? info.price / 100 : info.defaultPrice / 100}</p>
                <p className="item-description">{info.description}</p>
            </div>
            <div className="item-right">
                {info.imageId && <img className="item-image" src={IMG_URL + info.imageId} ></img>}
                {count == 0 ? <button className="add-btn" onClick={handleAddItem}>ADD</button> : 
                    <div className="cart-btns">
                        <button onClick={handleRemoveItem} className="remove-btn">-</button>
                        <button>{count}</button>
                        <button onClick={handleAddItem} className="plus-btn">+</button>
                    </div> 
                }
            </div>
        </div>
    );
}

export default CartItem;