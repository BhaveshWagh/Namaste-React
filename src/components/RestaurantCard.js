import { LOGO_URL } from "../constants";

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
    <div className="m-4 p-4 w-[250px] shadow-lg rounded-xl text-center">
      <div className="img-container">
        <img
          className="res-logo rounded-lg"
          src={LOGO_URL + cloudinaryImageId}
          alt="Food Images"
        />
      </div>
      <h2 className="font-bold py-4 text-lg">{name}</h2>
      <h3>Cuisines: {cuisines.join(", ")}</h3>
      <h4>Area : {areaName}</h4>
      <h4>Price : {costForTwo} </h4>
      <h4>Delivery : {sla?.slaString} </h4>
      <h4>Rating : {avgRating} ⭐</h4>
    </div>
  );
};

// Higher Order Component

// Take input - RestaurantCard ==> RestaurantCardPromoted
// and return a inhanced component ont the top of it

export const withPromotedLabel = (RestaurantCard) => {
  // New Component
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
