import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import ShimmerUI from "./ShimmerUI";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { id } = useParams();

  const [restaurant, menu] = useRestaurant(id);

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
