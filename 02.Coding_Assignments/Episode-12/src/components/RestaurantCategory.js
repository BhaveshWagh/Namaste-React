import ItemsList from "./ItemsList";
import NestedRestaurantCategory from "./NestedRestaurantCategory";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // By default close

  const handleClick = () => {
    setShowIndex();
    console.log("resMenuClicked")
  };

  console.log("Data", data);
  return (
    <div>
      {/* { Accordion Header } */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">{data.title}</span>
          <span>🔽</span>
        </div>
        {/* { Accordion Body } */}
        {/* {showItems && <ItemsList items={data.categories} />} */}
        {showItems && <NestedRestaurantCategory nestItems={data.categories} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
