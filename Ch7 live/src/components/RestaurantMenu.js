import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import ShimmerUI from "./ShimmerUI";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  // Function to find a given object value in a deeply nested object
  // @args searchObject, propertyName needed to be searched inside the object
  // @returns null
  // Sets the value variable to the value corresponding to the given key from the nested object
  // Written by me ;) without google :) 20/05/2023
  let found = false;
  let value = null;
  const findProperty = (searchObject, property) => {
    if (found === true) return;
    if (Array.isArray(searchObject)) {
      searchObject.forEach((arrElement) => {
        if (typeof searchObject !== "object") return;

        findProperty(arrElement, property);
      });
    } else if (typeof searchObject === "object") {
      for (let key of Object.keys(searchObject)) {
        if (key === property) {
          found = true;
          value = searchObject[key];
          return;
        } else {
          if (typeof searchObject[key] === "object") {
            findProperty(searchObject[key], property);
          }
        }
      }
    } else return;
  };

  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${id}&submitAction=ENTER`
    );
    const json = await data.json();
    console.log(json);
    findProperty(json, "itemCards");
    setMenu(value);
    setRestaurant(json?.data?.cards[0]?.card?.card?.info);
  }

  return !restaurant ? (
    <ShimmerUI />
  ) : (
    <div className="restaurant-menu-container">
      <div className="res-layout">
        <div>
          <h1>Restaurant id: {restaurant.id}</h1>
          <h2>Restaurant Name: {restaurant.name}</h2>
          <img
            src={`${CDN_URL}/${restaurant.cloudinaryImageId}`}
            className="menu-img"
          ></img>
          <h3>Area: {restaurant.areaName}</h3>
          <h3>City: {restaurant.city}</h3>
          <h3>Rating: {restaurant.avgRating}</h3>
        </div>
        <div className="res-menu">
          {menu?.map((item) => {
            return <h4 key={item?.card?.info?.id}>{item?.card?.info?.name}</h4>;
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
