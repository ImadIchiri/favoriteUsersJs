import { usersData } from "./usersData.js";

const usersList = document.getElementById("usersList");
let favoriteUsers = JSON.parse(localStorage.getItem("favoriteUsers")) || [];

const addToLocalStorage = (arr) => {
  localStorage.setItem("favoriteUsers", JSON.stringify(arr));
};

const createUserCard = (userObject) => {
  const cardDiv = document.createElement("div");
  cardDiv.className = "card";

  const button = document.createElement("button");
  button.addEventListener("click", () => {
    if (heartIcon.className === "fa-regular fa-heart") {
      heartIcon.className = "fa-solid fa-heart";
    } else {
      heartIcon.className = "fa-regular fa-heart";
    }
    const userExist = favoriteUsers.some((user) => user.id === userObject.id);

    if (userExist) {
      const newArray = favoriteUsers.filter(
        (user) => user.id !== userObject.id
      );

      favoriteUsers = newArray;
    }

    if (!userExist) {
      favoriteUsers.push(userObject);
    }

    addToLocalStorage(favoriteUsers);
  });

  const heartIcon = document.createElement("i");
  const userFound = favoriteUsers.some((user) => user.id === userObject.id);
  heartIcon.className = userFound ? "fa-solid fa-heart" : "fa-regular fa-heart";
  button.append(heartIcon);

  const img = document.createElement("img");
  img.className = "userImage";
  img.setAttribute("src", userObject.image);

  const fullName = document.createElement("h2");
  fullName.textContent = userObject.fullName;

  const description = document.createElement("p");
  description.textContent = userObject.description;

  cardDiv.append(button);
  cardDiv.append(img);
  cardDiv.append(fullName);
  cardDiv.append(description);

  return cardDiv;
};

usersData.map((user) => usersList.append(createUserCard(user)));
