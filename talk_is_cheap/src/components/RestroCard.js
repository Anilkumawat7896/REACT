import { CDN_URL } from "../utils/constant";

const RestroCard = ({
  name,
  cuisines,
  area,
  avgRating,
  lastMileTravelString,
  costForTwoString,
  cloudinaryImageId,
}) => {
  return (
    <div className="restro-card">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="card-image"
        title="here will be the image title or its name"
      />
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{area}</h4>
      <span>
        <h4>
          <i className="fa-solid fa-star"></i>
          {avgRating}
        </h4>
        <h4>{lastMileTravelString}</h4>
        <h4>{costForTwoString}</h4>
      </span>
    </div>
  );
};

export default RestroCard;
