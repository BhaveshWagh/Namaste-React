import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
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

    console.log(json);

    // Optional Chaining
    setListOfRest(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfFilterRest(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
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

  // Check online or not

  const onlineStatus = useOnlineStatus()
  if(onlineStatus === false) return (
    <h1>Looks like you're offline! Please check your internet connection...</h1>
  )

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
          <Link to={"/restaurants/" + res.info.id} key={res.info.id}>
            <RestaurantCard resData={res.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
