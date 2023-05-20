import { CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime } =
    resData?.data;
  const baseURL = "";
  return (
    <div className="res-card" style={styleCard}>
      <img className="res-img" src={`${CDN_URL}/${cloudinaryImageId}`}></img>
      <h3 className="card-text">{name}</h3>
      <h4 className="card-text">{cuisines.join(", ")}</h4>
      <h4 className="card-text">{avgRating} stars</h4>
      <h4 className="card-text">{deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
