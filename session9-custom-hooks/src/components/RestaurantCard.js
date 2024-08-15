import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { restuarantData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    // sla: { deliveryTime }, // this is how value of key within key is fetched when destructuring - approach 1
    sla, // approach 2
  } = restuarantData?.info;
  return (
    <div className="rest-card" style={{ backgroundColor: "f0f0f0" }}>
      <img
        className="rest-logo"
        alt="biriyani"
        // src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restuarantData.info.cloudinaryImageId}`}
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>⭐ {avgRating} stars</p>
      <h4>{costForTwo}</h4>
      <p>{sla?.slaString}</p>
    </div>
  );
};

export default RestaurantCard;
