import { LOGO_URL } from "../src/constants";

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    areaName,
    costForTwo,
    sla,
    avgRating,
  } = resData;
  return (
    <div className="res-card">
      <div className="img-container">
        <img
          className="res-logo"
          src={LOGO_URL + cloudinaryImageId}
          alt="Food Images"
        />
      </div>
      <h2>{name}</h2>
      <h3>Cuisines: {cuisines.join(", ")}</h3>
      <h4>Area : {areaName}</h4>
      <h4>Price : {costForTwo} </h4>
      <h4>Delivery : {sla?.slaString} </h4>
      <h4>Rating : {avgRating} ⭐</h4>
    </div>
  );
};

export default RestaurantCard;
