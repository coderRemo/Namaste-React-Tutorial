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
    <div className="m-4 p-4 w-[250px] rounded-lg hover:bg-green-500">
      <img
        className="rounded-lg"
        alt="biryani"
        // src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restuarantData.info.cloudinaryImageId}`}
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>⭐ {avgRating} stars</p>
      <h4>{costForTwo}</h4>
      <p>{sla?.slaString}</p>
    </div>
  );
};

export default RestaurantCard;
