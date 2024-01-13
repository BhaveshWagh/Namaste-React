import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import { LOGO_URL } from "../constants";

const RestaurantMenu = () => {
  const { resId } = useParams();

  // Custome hook used here
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (cat) =>
        cat.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );
    
  // console.log("***Resinfo", resInfo);
  // console.log(
  //   "***",
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  // );

  return (
    <div className="menu text-center">
      <h1 className="font-bold my-6 text-2xl">
        {resInfo?.cards[0]?.card?.card?.info?.name}
      </h1>
      {/* <img src={LOGO_URL + resInfo?.cards[0]?.card?.card?.info?.cloudinaryImageId} className="text-" /> */}
      <p className="font-bold text-lg">
        {resInfo?.cards[0]?.card?.card?.info?.cuisines.join(", ")} -{" "}
        {resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}
      </p>
      {/* {Categories accordions} */}
      {categories?.map((category, index) => (
        // Controlled Component
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;

// const { name, cuisines, costForTwoMessage } =
//   resInfo?.cards[2]?.card?.card?.info;

// const { itemCards } =
//   resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

// console.log(resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
// 

// || cat.card?.["card"]?.["@type"] ===
// "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"