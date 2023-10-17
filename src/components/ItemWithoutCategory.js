import { useState } from "react";
import ItemList from "./ItemList";

function ItemWithoutCategory({card}) {
    const [itemsOpened, setItemsOpened] = useState(false);

    function handleOpenClick() {
        setItemsOpened(!itemsOpened);
    }

    return (
        <div className="menu-without-category" >
            <div className="category-title" onClick={handleOpenClick}>
                <h2>{card.title} ({card.itemCards.length})</h2>
                <p>{itemsOpened ? "👆" : "👇"}</p>
            </div>
            
            {itemsOpened && <ItemList items={card.itemCards}/>}
            <hr className="category-separator"></hr>
        </div>
    )
}

export default ItemWithoutCategory;