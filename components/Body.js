import RestaurantCard from "./RestaurantCard";
// import restaurantList from "../utils/restaurantList";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  // state Variable - Super powerful variable
  const [listOfRest, setListOfRest] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();  
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // console.log(json.data.cards[3].card.card.gridElements.infoWithStyle.restaurants)
    // Optional Chaining
    setListOfRest(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

  // console.log("Body rendered")

  const filterData = (searchText, listOfRest) => {
    const filteredData = listOfRest.filter((res) =>
      res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filteredData;
  };

  const handleTopRated = () => {
    filteredList = listOfRest.filter((res) => res?.info?.avgRating > 4);
    console.log(filteredList);
    setListOfRest(filteredList);
  };

  if(listOfRest.length === 0){
    return <Shimmer/>
  }

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={handleTopRated}>
          Top Rated Restaurant
        </button>
      </div>

      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search restaurant name here"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, listOfRest);
            setListOfRest(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="res-container">
        {listOfRest.map((res) => (
          <RestaurantCard key={res.info.id} resData={res.info} />
          // or using spread operator{..res.data}
        ))}
      </div>
    </div>
  );
};

export default Body;

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
