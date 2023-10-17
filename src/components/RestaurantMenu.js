import {useParams} from "react-router-dom";
import RestaurantDetails from "./RestaurantDetails";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuCard from "./RestaurantMenuCard";

function RestaurantMenu() {
    
    const {resId} = useParams();
    const restaurantMenuData = useRestaurantMenu(resId);

    if(restaurantMenuData.length === 0) {
        return (<div>loading....</div>)
    }

    const {name, cuisines, avgRating, sla, areaName} = restaurantMenuData[0]?.card?.card?.info;
    return (
        <div className="restaurant-menu">
            <div className="menu-card">
                <RestaurantDetails name={name} cuisines={cuisines} avgRating={avgRating} sla={sla} areaName={areaName}/>
                <RestaurantMenuCard menuCard={restaurantMenuData[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards}/>
            </div>
        </div>  
    )
}

export default RestaurantMenu;

//restaurant menu
    //restaurant - details
        //name
        //cuisines
        //rating
        //address
    // restaurant - menu-card
        // title
            // catogery
                // items
                    // name
                    // cost
                    // image
                    // description

