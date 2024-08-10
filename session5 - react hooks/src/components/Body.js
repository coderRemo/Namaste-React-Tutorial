import RestaurantCard from "./ReataurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
  // Local State Variable
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  // normal JS varaible
  /*
  let listOfRestaurants = [
    {
      info: {
        id: "774062",
        name: "Food Peddler Sandwiches",
        cloudinaryImageId: "4f549c836372838d45994ed844bb8f32",
        areaName: "Ruby Area",
        costForTwo: "₹150 for two",
        cuisines: [
          "Continental",
          "Beverages",
          "Snacks",
          "Salads",
          "Healthy Food",
          "Burgers",
        ],
        avgRating: 4.6,
        parentId: "81834",
        avgRatingString: "4.6",
        sla: {
          deliveryTime: 35,
        },
      },
    },
    {
      info: {
        id: "305031",
        name: "Kela Patta",
        cloudinaryImageId: "nwmmylxcg48mmi8puxzd",
        areaName: "Picnic Garden",
        costForTwo: "₹100 for two",
        cuisines: ["South Indian"],
        avgRating: 4.3,
        veg: true,
        parentId: "116355",
        avgRatingString: "4.3",
        sla: {
          deliveryTime: 23,
        },
      },
    },
  ];
  */

  return (
    <div className="body">
      <div className="filer">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="rest-container">
        {/* before destructuring */}
        {/* <RestaurantCard resName="Burger King" cuisine="Burger, Fast Food" />  */}

        {/* while using destructuring */}
        {/* <RestaurantCard restuarantData={resObj[0]} />
          <RestaurantCard restuarantData={resObj[1]} />
          <RestaurantCard restuarantData={resObj[2]} />  */}

        {/* looping through array */}
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            restuarantData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
