import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import ShimmerUI from "./ShimmerUI";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { id } = useParams();

  const [restaurant, menu] = useRestaurant(id);

  // REDUX
  const dispatch = useDispatch();
  // const handleAddItem = () => {
  //   dispatch(addItem("Grapes"));
  // };

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <ShimmerUI />
  ) : (
    <div className="restaurant-menu-container m-8">
      <div className="flex gap-8 items-center">
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
        <div className="h-1/2 overflow-y-scroll-scroll  shadow-md">
          <h2 className="text-3xl">MENU :</h2>
          <ul className="flex h-96 flex-col gap-4 p-2 overflow-y-scroll">
            {menu?.map((item, i) => {
              return (
                <li key={item?.card?.info?.id}>
                  {item?.card?.info?.name}
                  {" - "}
                  <button
                    className="py-0.5 px-1 rounded-sm bg-pink-900 text-white text-sm"
                    onClick={() => addFoodItem(item)}
                  >
                    Add item
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
