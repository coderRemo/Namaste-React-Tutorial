import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  // Local State Variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  // whenever state variables update, react triggers a reconcialation cycle(re-renders the component)
  console.log("body rendered");

  // fetch data using useEffect()
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // when CORS is not used use below API:-
    // https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

    // optional chaining
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // conditional rendering
  /*
  if (listOfRestaurants.length === 0) {
    // condition
    // return <h1>Loading...</h1>; // spinner or loading = old practice
    // using Shimmer UI/fake reload webpage = latest practice
    return <Shimmer />; // rendering
  } */

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

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // Filter the restaurant cards and update the UI
              // searchText
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
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
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard restuarantData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
