import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime } =
    resData?.data;
  return (
    <div className="w-[200px] pb-2 shadow-md hover:shadow-lg  h-full rounded-md overflow-hidden hover:scale-[1.01] transition-all">
      <img className="res-img" src={`${CDN_URL}/${cloudinaryImageId}`}></img>
      <div className="mt-4 mb-2 mx-4">
        <h3 className="font-bold text-lg mb-2">{name}</h3>
        <h4 className="card-text">{cuisines.join(", ")}</h4>
        <h4 className="card-text">{avgRating} stars</h4>
        <h4 className="card-text">{deliveryTime} mins</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
