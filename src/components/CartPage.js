import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import EmptyCartPage from "./EmptyCartPage";

function CartPage() {
    const items = useSelector((store) => store.cart.items);
    const itemList = [];
    for(let i in items) {
        itemList.push(items[i]);
    }

    return (
        <div className="cart-page">
            {itemList.length === 0 ? <EmptyCartPage/> : 
                <div className="cart-with-items">
                    {itemList.map((item) => {
                        return <CartItem key={item.id} info={item[0]} count={item[1]}></CartItem>
                    })}
                </div>
            }
        </div>
    );
}

export default CartPage;