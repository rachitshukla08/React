const filterData = (searchText, allRestaurants) => {
  return allRestaurants.filter((restaurant) =>
    restaurant?.data?.name?.toUpperCase().includes(searchText.toUpperCase())
  );
};

export { filterData };
