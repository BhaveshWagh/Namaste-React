import { LOGO_URL } from "../constants";

const ItemsList = ({ items }) => {
  // console.log(items);
  return (
    <div>
      {items?.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-gray-200 text-left flex"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-semibold">{item.card.info.name}</span>
              <span>
                {" "}
                - ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button className="px-2 p-1 mx-8  rounded-lg bg-white text-center shadow-xl text-green-600 font-semibold">
                ADD +
              </button>
            </div>
            <img src={LOGO_URL + item.card.info.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
