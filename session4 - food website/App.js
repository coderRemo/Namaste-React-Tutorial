import React from "react";
import ReactDOM from "react-dom/client";

/**
 * LOW-LEVEL PLANNING :-
 * - Header
 *    - Logo
 *    - Nav Items
 * - Body
 *    - Search
 *    - Restaurant Container
 *       - Reatsurant Card
 *          - Dish Name
 * - Footer
 *    - Copyright
 *    - Links
 *    - Address
 *    - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://live.staticflickr.com/5051/5436211137_afbc75734a_b.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { restuarantData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla: { deliveryTime }, // this is how value of key within key is fetched when destructuring
  } = restuarantData?.info;
  return (
    <div className="rest-card" style={{ backgroundColor: "f0f0f0" }}>
      <img
        className="rest-logo"
        alt="biriyani"
        // src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restuarantData.info.cloudinaryImageId}`}
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>⭐ {avgRating} stars</p>
      <h4>{costForTwo}</h4>
      <p>{deliveryTime} minutes</p>
    </div>
  );
};

// working with object
/*
const resObj = {
  type: "restaurants",
  info: {
    id: "774062",
    name: "Food Peddler Sandwiches",
    cloudinaryImageId: "4f549c836372838d45994ed844bb8f32",
    locality: "VIP Nagar Colony",
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
    totalRatingsString: "500+",
    sla: {
      deliveryTime: 35,
      lastMileTravel: 2.4,
      serviceability: "SERVICEABLE",
      slaString: "35-40 mins",
      lastMileTravelString: "2.4 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-08-08 03:30:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹100 OFF",
      subHeader: "ABOVE ₹249",
      discountTag: "FLAT DEAL",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  analytics: {
    context: "seo-data-a98521dd-f19c-4c56-be10-38ade05f711d",
  },
  cta: {
    link: "https://www.swiggy.com/restaurants/food-peddler-sandwiches-vip-nagar-colony-ruby-area-kolkata-774062",
    text: "RESTAURANT_MENU",
    type: "WEBLINK",
  },
  widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
};
*/

// working with array
const resList = [
  {
    info: {
      id: "774062",
      name: "Food Peddler Sandwiches",
      cloudinaryImageId: "4f549c836372838d45994ed844bb8f32",
      locality: "VIP Nagar Colony",
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
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-08-08 03:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-a98521dd-f19c-4c56-be10-38ade05f711d",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/food-peddler-sandwiches-vip-nagar-colony-ruby-area-kolkata-774062",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
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
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 2,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-08-07 21:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹120",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-a98521dd-f19c-4c56-be10-38ade05f711d",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/kela-patta-picnic-garden-kolkata-305031",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "33209",
      name: "Wasabee",
      cloudinaryImageId: "gz25kb0bqqsg94mcgzhl",
      locality: "Kalikapur",
      areaName: "Kalikapur",
      costForTwo: "₹1000 for two",
      cuisines: [
        "Asian",
        "Japanese",
        "Thai",
        "Chinese",
        "Korean",
        "Sushi",
        "Pan-Asian",
      ],
      avgRating: 4.4,
      parentId: "225329",
      avgRatingString: "4.4",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-08-07 22:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹125",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.2",
          ratingCount: "1K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-a98521dd-f19c-4c56-be10-38ade05f711d",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/wasabee-kalikapur-kolkata-33209",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "4905",
      name: "Paris Cafe-Ballygunge",
      cloudinaryImageId: "kewiz2bu7fooqtlryks1",
      locality: "Gariahat",
      areaName: "Central Kolkata",
      costForTwo: "₹800 for two",
      cuisines: [
        "Cakes",
        "Cakes & Pastries",
        "Bakery",
        "Waffle",
        "Confectionery",
        "Desserts",
      ],
      avgRating: 4.4,
      parentId: "706",
      avgRatingString: "4.4",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-08-08 00:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-a98521dd-f19c-4c56-be10-38ade05f711d",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/paris-cafe-ballygunge-gariahat-central-kolkata-kolkata-4905",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "8049",
      name: "Eagle Bites Pizza",
      cloudinaryImageId: "u4lfxcq2lihky6nn3wkz",
      locality: "Sarada Pally Road",
      areaName: "Kasba",
      costForTwo: "₹350 for two",
      cuisines: ["Italian", "Pizzas"],
      avgRating: 4.3,
      parentId: "75697",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-08-07 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹45",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.2",
          ratingCount: "1K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-a98521dd-f19c-4c56-be10-38ade05f711d",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/eagle-bites-pizza-sarada-pally-road-kasba-kolkata-8049",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "5251",
      name: "Bachan's Dhaba",
      cloudinaryImageId: "ggez5y5emtvp50kbtd8s",
      locality: "Near Kalighat Metro, Rash Behari Avenue",
      areaName: "Kalighat",
      costForTwo: "₹250 for two",
      cuisines: ["North Indian", "Chinese", "Biryani", "Beverages"],
      avgRating: 4.6,
      parentId: "6136",
      avgRatingString: "4.6",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 4.1,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-08-07 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-a98521dd-f19c-4c56-be10-38ade05f711d",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/bachans-dhaba-near-metro-rash-behari-avenue-kalighat-kolkata-5251",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "444357",
      name: "Wah Thali - Meals & Combos",
      cloudinaryImageId: "xc5bzfiuekzmwed3wznw",
      locality: "Ruby Area",
      areaName: "KASBA",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "North Indian", "Thalis"],
      avgRating: 4.2,
      parentId: "267460",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 1.1,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-08-08 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹75",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-a98521dd-f19c-4c56-be10-38ade05f711d",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/wah-thali-meals-and-combos-ruby-area-kasba-kolkata-444357",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="rest-container">
        {/* before destructuring */}
        {/* <RestaurantCard resName="Burger King" cuisine="Burger, Fast Food" />  */}

        {/* while using destructuring */}
        {/* <RestaurantCard restuarantData={resObj[0]} />
        <RestaurantCard restuarantData={resObj[1]} />
        <RestaurantCard restuarantData={resObj[2]} />  */}

        {/* looping through array */}
        {resList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            restuarantData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
