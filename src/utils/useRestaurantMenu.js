import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";

function useRestaurantMenu(resId) {
    const [restaurantMenu, setRestaurantMenu] = useState([])
    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const data = await fetch(MENU_API_URL + resId);
        const dataJson = await data.json();
        setRestaurantMenu(dataJson?.data?.cards);
    }

    return restaurantMenu;
}

export default useRestaurantMenu;