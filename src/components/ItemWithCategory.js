import ItemCategory from "./ItemCategory";

function ItemWithCategory({card}) {
    return (
        <div className="menu-with-category">
            <h2>{card.title}</h2>
            {card.categories.map((category) => {
                return <ItemCategory key={category.title} category={category}/>
            })}
            <hr className="category-separator"></hr>
        </div>
    )
}

export default ItemWithCategory;