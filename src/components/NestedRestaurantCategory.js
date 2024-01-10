import { useState } from "react";

const NestedRestaurantCategory = ({ nestItems }) => {
  console.log("ITemsNest", nestItems);

  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    // console.log("Clicked!");
    setShowItems(true);
  };
  return (
    <div>
      {/* <h1>Nested Restaurant Category</h1> */}
      {nestItems?.map((item) => (
        <div>
          <div
            className="p-2 m-2 flex justify-around cursor-pointer"
            onClick={handleClick}
          >
            <span className="font-semibold">
              {item.title} ({item.itemCards.length})
            </span>
            <span>⏬</span>
          </div>
          <div>
            {item.itemCards.map((item) => (
              <div>
                <div>{item.card.info.name}</div>
                <div className="p-2 m-2 border-b-2 border-gray-200">
                  {item.card.info.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NestedRestaurantCategory;
