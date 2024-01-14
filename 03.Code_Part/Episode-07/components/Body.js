import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const Body = () => {
  ``;
  // state Variable - Super powerful variable
  const [listOfRest, setListOfRest] = useState([]);
  const [listOfFilterRest, setListOfFilterRest] = useState([]);

  const [searchText, setSearchText] = useState("");

  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // Optional Chaining
    setListOfRest(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfFilterRest(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(
    //   json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
  };

  const handleTopRated = () => {
    filteredList = listOfRest.filter((res) => res?.info?.avgRating > 4.2);
    setListOfRest(filteredList);
  };

  const handleSearch = () => {
    const filteredList = listOfRest.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setListOfFilterRest(filteredList);
  };

  // Conditional Rendering

  return listOfRest?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div>
          <button className="filter-btn" onClick={handleTopRated}>
            Top Rated Restaurants
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
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      <div className="res-container">
        {listOfFilterRest?.map((res) => (
          <Link  to={"/restaurants/" + res.info.id} key={res.info.id}>
            <RestaurantCard resData={res.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;


// 
<Link  to={"/restaurants/" + res.info.id} key={res.info.id}>
</Link>

// Conditional rendering
// if(listOfRest.length === 0){
//   return <Shimmer/>
// }

// Below used ternary operator

// Syntax : condition ? true : false

// console.log("Body rendered")

// const filterData = (searchText, listOfRest) => {
//   const filteredData = listOfRest.filter((res) =>
//     res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
//   );
//   return filteredData;
// };
// const data = filterData(searchText, listOfRest);
// setListOfRest(data);

// search logic for text
// const filteredList = listOfRest.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
// setListOfRest(filteredList)

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
