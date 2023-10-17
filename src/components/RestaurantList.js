import {React, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

function RestaurantList(props) {
    const {temRestaurantList, handleTopRated} = props;
    const onlineStatus = useOnlineStatus();

    if(!onlineStatus) {
        return <div>sorry your offline...</div>
    }
    return (
        <div className="card-list">
            <div className="filters">
                <button className="top-rated" onClick={() => {handleTopRated()}}>Rating 4.0+</button>
            </div>
            {temRestaurantList?.length === 0 ? [1, 2, 3, 4, 5, 6, 7, 8, 9].map((res) => <Shimmer key={res}/>) : 
            (temRestaurantList?.map((restaurant) => {
                   return <Link key = {restaurant.info.id} to = {"/restaurant/" + restaurant.info.id} >
                   <RestaurantCard
                        key = {restaurant.info.id}
                        imgUrl = {restaurant.info.cloudinaryImageId} 
                        resName = {restaurant.info.name}
                        avgRating = {restaurant.info.avgRating}
                        location = {restaurant.info.areaName}
                        cuisines = {restaurant.info.cuisines}    
                    >
                    </RestaurantCard></Link>
                })
            )}
        </div>
    )
}

export default RestaurantList;