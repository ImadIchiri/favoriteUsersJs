const fradaList = JSON.parse(localStorage.getItem("favoriteUsers")) || [];
const usersList = document.getElementById("usersList");

const createUserCard = (userObject) => {
  const cardDiv = document.createElement("div");
  cardDiv.className = "card";

  const button = document.createElement("button");
  button.addEventListener("click", () => {
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
  heartIcon.className = "fa-regular fa-heart";
  button.append(heartIcon);

  const img = document.createElement("img");
  img.className = "userImage";
  img.setAttribute("src", userObject.image);

  const fullName = document.createElement("h2");
  fullName.textContent = userObject.fullName;

  const description = document.createElement("p");
  description.textContent = userObject.description;

  cardDiv.append(img);
  cardDiv.append(fullName);
  cardDiv.append(description);

  return cardDiv;
};

fradaList.map((frida) => usersList.append(createUserCard(frida)));
