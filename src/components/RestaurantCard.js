import React, { useEffect, useState } from "react";
import { IMG_URL } from "../utils/constants";

function RestaurantCard(props) {
    const {resName, avgRating, location, cuisines, imgUrl} = props;
    return (
        <div className="card">
            <div className="resturant-img">
                <img src={IMG_URL + imgUrl} alt="resutrant-img"></img>
            </div>
            <div className="resturant-desc">
                <h3>{resName.length > 27 ? resName.slice(0, 28) + "..." : resName}</h3>
                <p className="rating">⭐{avgRating}</p>
                <p>{cuisines.join(", ").length > 32 ? cuisines.join(", ").slice(0, 33) + "...": cuisines.join(", ")}</p>
                <p>{location}</p>
            </div>
        </div>
    )
}

export default RestaurantCard;