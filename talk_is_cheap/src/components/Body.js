import { restaurantList } from "../@mock/RestroData";
import RestroCard from "./RestroCard";
import { useState } from "react";

//*****************************imports finished******************************************

const Body = () => {
  const [restrorentList, setRestrorentList] = useState(restaurantList);

  // *************************** Filter *****************************************
  const filterHandler = () => {
    const filteredList = restaurantList.filter(
      (restro) => restro.data.avgRating > 4
    );
    setRestrorentList(filteredList);
  };

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={filterHandler}>
          Top Rated Rastrorents
        </button>
      </div>
      <div className="restro-container">
        {restrorentList.map((restaurant) => (
          <RestroCard key={restaurant.data.id} {...restaurant.data} />
        ))}
      </div>
    </div>
  );
};

export default Body;
