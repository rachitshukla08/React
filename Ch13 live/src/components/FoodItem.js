import { CDN_URL } from "../utils/constants";

const FoodItem = ({ name, imageId, price }) => {
  return (
    <div className="w-[200px] pb-2 shadow-md hover:shadow-lg  h-full rounded-md overflow-hidden hover:scale-[1.01] transition-all">
      <img className="res-img" src={`${CDN_URL}/${imageId}`}></img>
      <div className="px-2 pt-4">
        <h2>{name}</h2>
        <h2>Price: {price / 100}</h2>
      </div>
    </div>
  );
};

export default FoodItem;
