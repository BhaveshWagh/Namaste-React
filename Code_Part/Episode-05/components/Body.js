import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/restaurantList";
import { useState } from "react";
const Body = () => {
  // state Variable - Super powerful variable

  const [listOfRest, setListOfRest] = useState(restaurantList);

  

  // Normal JS Variable
  //   let listOfRest = [
  //     {
  //       data: {
  //         id: 334475,
  //         name: "Domino's Pizza",
  //         cloudinaryImageId: "bz9zkh2aqywjhpankb07",
  //         cuisines: ["Pizzas"],
  //         costForTwo: 4000,
  //         deliveryTime: 36,
  //         avgRating: "4.5",
  //       },
  //     },
  //     {
  //       data: {
  //         id: 334475,
  //         name: "Ice CREAM",
  //         cloudinaryImageId: "bz9zkh2aqywjhpankb07",
  //         cuisines: ["Desserts", "Ice Cream", "Healthy Food"],
  //         costForTwo: 4000,
  //         deliveryTime: 36,
  //         avgRating: "3.5",
  //       },
  //     },
  //     {
  //       data: {
  //         id: 334475,
  //         name: "KFC",
  //         cloudinaryImageId: "bz9zkh2aqywjhpankb07",
  //         cuisines: ["Pizzas"],
  //         costForTwo: 4000,
  //         deliveryTime: 36,
  //         avgRating: "4.2",
  //       },
  //     },
  //   ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            filteredList = listOfRest.filter((res) => res.data.avgRating > 4);
            // console.log(filteredList);
            setListOfRest(filteredList)
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRest.map((res) => (
          <RestaurantCard key={res.data.id} resData={res.data} />
          // or using spread operator{..res.data}
        ))}
      </div>
    </div>
  );
};

export default Body;
