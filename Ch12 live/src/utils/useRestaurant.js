// @params restaurant id

import { useState, useEffect } from "react";

// @return restaurant for that id
const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  // Function to find a given object value in a deeply nested object
  // @args searchObject, propertyName needed to be searched inside the object
  // @returns null
  // Sets the value variable to the value corresponding to the given key from the nested object
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

  console.log("HOOK");

  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}&submitAction=ENTER`
    );
    const json = await data.json();
    // console.log(json);
    findProperty(json, "itemCards");
    setMenu(value);
    setRestaurant(json?.data?.cards[0]?.card?.card?.info);
  }

  return [restaurant, menu];
};

export default useRestaurant;
