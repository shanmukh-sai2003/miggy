import {IMG_URL} from "../utils/constants";
import {useDispatch} from "react-redux";
import {addItem, removeItem} from "../utils/store/cartSlice";
import { useState } from "react";

function ItemCard({item}) {
    const info = item.card.info;
    const [quantity, setQuantity] = useState(0);
    const dispatch = useDispatch();

    function handleAddItem() {
        dispatch(addItem(info));
        setQuantity((prev) => prev + 1);
    }

    function handleRemoveItem() {
        dispatch(removeItem(info));
        setQuantity(prev => prev - 1);
    }

    return (
        <div className="menu-item-card">
            <div>
                <p className="item-name">{info.name}</p>
                <p className="item-price">Rs. {info.price  ? info.price / 100 : info.defaultPrice / 100}</p>
                <p className="item-description">{info.description}</p>
            </div>
            <div className="item-right">
                {info.imageId && <img className="item-image" src={IMG_URL + info.imageId} ></img>}
                {quantity == 0 ? <button className="add-btn" onClick={handleAddItem}>ADD</button> : 
                    <div className="cart-btns">
                        <button onClick={handleRemoveItem} className="remove-btn">-</button>
                        <button>{quantity}</button>
                        <button onClick={handleAddItem} className="plus-btn">+</button>
                    </div> 
                }
            </div>
        </div>
    );
}

export default ItemCard;