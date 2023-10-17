function RestaurantDetails(props) {
    const {name, cuisines, avgRating, sla, areaName} = props;
    return (
        <div className="restaurant-details">
            <h2>{name}</h2>
            <div className="details">
                <div>
                    <p className="detail">{cuisines.join()}</p>
                    <p className="detail">{areaName}, {sla.lastMileTravel} Km</p>
                </div>
                <div className="rating">
                    <p>⭐ {avgRating}</p>
                    <p className="detail">rating</p>
                </div>
            </div> 
            <hr></hr>
        </div>
    )
}

export default RestaurantDetails;