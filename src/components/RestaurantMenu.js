import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = () => {
  

  const { resId } = useParams();
  // console.log(params);

  // Custome hook 
  const resInfo = useRestaurantMenu(resId)

  

  if (resInfo === null) return <Shimmer />;

  // const { name, cuisines, costForTwoMessage } =
  //   resInfo?.cards[2]?.card?.card?.info;

  // const { itemCards } =
  //   resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="menu">
      <h1>{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
      <p>
        {resInfo?.cards[2]?.card?.card?.info?.cuisines.join(", ")} - {resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - {" Rs."}{item?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
