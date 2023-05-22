import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  let isOnline = useOnline();
  if (!isOnline) {
    return <h1>🛑 Offline, Please check your internet connection</h1>;
  }

  if (listOfRestaurants.length === 0 && allRestaurants.length > 0)
    return <h1>No restaurants match for the given filter</h1>;

  return allRestaurants.length === 0 ? (
    <ShimmerUI />
  ) : (
    <>
      <div className="body pb-4">
        <div className="search-container px-5 py-5 bg-pink-50">
          <input
            type="text"
            className="py-2 px-4 mr-4"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            className="px-4 py-2 bg-pink-800 text-white rounded-sm hover:scale-[1.01] active:scale-100"
            onClick={() => {
              const data = filterData(searchText, allRestaurants);
              setListOfRestaurants(data);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter">
          <button
            className="mx-5 py-2 mt-7 px-2 inline-block bg-pink-800 text-white rounded-sm hover:scale-[1.01] active:scale-100"
            onClick={() => {
              filteredList = allRestaurants.filter(
                (res) => +res.data.avgRating > 4
              );
              setListOfRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="px-5 mt-7 flex flex-wrap gap-8">
          {listOfRestaurants.map((restaurant) => (
            <Link
              key={restaurant.data.id}
              to={`/restaurant/${restaurant.data.id}`}
            >
              {" "}
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
