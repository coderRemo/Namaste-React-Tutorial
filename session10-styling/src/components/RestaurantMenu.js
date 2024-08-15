import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);

  // calling Custom Hook component
  const restaurantDetail = useRestaurantMenu(resId);

  if (restaurantDetail === null) return <Shimmer />;

  // destructuring
  const { name, cuisines, costForTwoMessage } =
    restaurantDetail?.cards[2]?.card?.card?.info;

  // fetching menu
  const { itemCards } =
    restaurantDetail?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]
      ?.card?.card;

  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}: {item.card.info.price / 100 + "/-"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
