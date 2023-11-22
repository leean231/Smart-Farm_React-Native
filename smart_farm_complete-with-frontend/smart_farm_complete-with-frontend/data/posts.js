import { USERS } from "./users";

//to make data for the posts for the user 
export const POSTS = [
  {
    imageUrl:
      "https://images.pexels.com/photos/14699275/pexels-photo-14699275.jpeg",
    user: USERS[0].user,
    likes: 100,
    caption:
      "We had plently of fresh strawberries this year. This is one of the freshely packed packet of strawberries 🍓🍓🍓🍓",
    profile_picture: USERS[0].image,
    comments: [
      {
        user: "GreenThumbGary",
        comment:
          "There's something special about seeing where your food comes from, especially with strawberries🍓😋."
      },
      {
        user: "Alice_garden",
        comment:
          "I can never get enough of strawberries - they're so versatile and delicious😋😋😋 in so many different ways!"
      }
    ]
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/5273080/pexels-photo-5273080.jpeg",
    user: USERS[1].user,
    likes: 211,
    caption: "We are doing a sale of fresh organic vegetables🍅🥑🥦🥬🥒.",
    profile_picture: USERS[1].image,
    comments: [
      {
        user: "FarmerJohn",
        comment: "Where do ypu plan on selling the goods❓❓"
      },
      {
        user: "CropCrate",
        comment: "WOW 👏👏👏"
      }
    ]
  }
];