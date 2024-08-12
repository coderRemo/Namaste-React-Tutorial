import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constant";

const RestaurantMenu = () => {
  const [restaurantDetail, setRestaurantDetail] = useState(null);
  const { resId } = useParams();
  console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    // console.log(json);
    setRestaurantDetail(json.data);
  };

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
