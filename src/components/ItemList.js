import ItemCard from "./ItemCard";

function ItemList({items}) {
    return (
        <div className="menu-item-cards">
            {items.map((item) => {
                return <ItemCard item={item}/>
            })}
        </div>
    );
}

export default ItemList;