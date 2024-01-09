import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // state Variable - Super powerful variable
  const [listOfRest, setListOfRest] = useState([]);
  const [listOfFilterRest, setListOfFilterRest] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json?.data);

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

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline! Please check your internet connection...
      </h1>
    );

  // MENU API

  // Conditional Rendering

  return listOfRest?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex justify-center">
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={handleTopRated}
          >
            Top Rated Restaurants
          </button>
        </div>

        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black rounded-xl"
            placeholder="Search restaurant name"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-1 bg-green-200 m-4 rounded-lg"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        {listOfFilterRest?.map((res) => (
          <Link to={"/restaurants/" + res.info.id} key={res.info.id}>
            {
              /** if the restaurant is promoted then add a promoted label to it*/
              res.info.promoted ? (
                <RestaurantCardPromoted resData={res.info} />
              ) : (
                <RestaurantCard resData={res.info} />
              )
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
