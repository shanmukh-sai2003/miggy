import ItemWithCategory from "./ItemWithCategory";
import ItemWithoutCategory from "./ItemWithoutCategory";

function RestaurantMenuCard(props) {
    const menuCard = props.menuCard.filter((card) => {
        return card?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" || card?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    });

    return (
        <div className="menu-card">
            {menuCard.map((card) => {
                if(card.card.card.categories) {
                    return <ItemWithCategory card={card.card.card}/>
                } else {
                    return <ItemWithoutCategory card={card.card.card}/>
                }
            })}
        </div>
    );
}

export default RestaurantMenuCard;