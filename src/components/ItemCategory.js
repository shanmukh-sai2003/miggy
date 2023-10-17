import { useState } from "react";
import ItemList from "./ItemList";

function ItemCategory({category}) {
    const [categoryOpened, setCategoryOpened] = useState(false);
    function handleOpenClick() {
        setCategoryOpened(!categoryOpened);
    }
    return (
        <div className="menu-item-category">
            <div className="category-title" onClick={handleOpenClick}>
                <p >{category.title} ({category.itemCards.length})</p>
                <p>{categoryOpened ? "👆" : "👇"}</p>
            </div>
            
            {categoryOpened && <ItemList items={category.itemCards}/>}
        </div>
    );
}

export default ItemCategory;