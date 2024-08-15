import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constant";

// Custom Hook - will be used in restaurantMenu component
const useRestaurantMenu = (resId) => {
  const [restaurantDetail, setRestaurantDetail] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    // console.log(json);
    setRestaurantDetail(json.data);
  };

  return restaurantDetail;
};

export default useRestaurantMenu;
