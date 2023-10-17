import React, { useEffect, useState } from "react";
import RestaurantList from "./RestaurantList";
import SearchBar from "./SearchBar";
import { API_URL } from "../utils/constants";

function Body() {
    const [restaurantList, setRestaurantList] = useState([]);
    const [filterButton, setFilterButton] = useState(false);
    const [temRestaurantList, setTemRestaurantList] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        filterRestaurants();
    }, [filterButton]);

    async function fetchData() {
        const data = await fetch(API_URL);
        const dataJson = await data.json();
        let i = 0;
        while(! (dataJson?.data?.cards[i]?.card?.card?.id === "restaurant_grid_listing")) {
            i++;
        }
        setRestaurantList(dataJson?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setTemRestaurantList(dataJson?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    function handleSearchText(e) {
        setSearchText(e.target.value);
    }

    function handleTopRated() {
        setFilterButton((prev) => !prev);
    }

    function filterRestaurants() {
        if(filterButton) {
            setTemRestaurantList(restaurantList.filter((ele) => ele.info.avgRating >= 4));
        } else {
            setTemRestaurantList(restaurantList);
        }
    }

    function handleSearchRequest() {
        setTemRestaurantList(restaurantList.filter((restaurant) => 
            restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
        ));
    }

    return (
        <main className="body">
            <SearchBar text = {searchText} onTextChange = {handleSearchText} searchRequest = {handleSearchRequest}></SearchBar>
            <RestaurantList temRestaurantList = {temRestaurantList} handleTopRated = {handleTopRated}></RestaurantList>
        </main>
    )
}

export default Body;