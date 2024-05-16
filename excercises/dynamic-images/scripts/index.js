"use strict";
//data
// variable imageFiles gets declared and assigned an array []
// which contains objects representing an image file
let imageFiles = [
  {
    id: "1",
    path: "https://placehold.co/300x300",
    description: "placeholder 1",
  },
  {
    id: "2",
    path: "https://placehold.co/300x300",
    description: "placeholder 2",
  },
  {
    id: "3",
    path: "https://placehold.co/300x300",
    description: "placeholder 3",
  },
  {
    id: "4",
    path: "https://placehold.co/300x300",
    description: "placeholder 4",
  },
  {
    id: "5",
    path: "https://placehold.co/300x300",
    description: "placeholder 5",
  },
  {
    id: "6",
    path: "https://placehold.co/300x300",
    description: "placeholder 6",
  },
  {
    id: "7",
    path: "https://placehold.co/300x300",
    description: "placeholder 7",
  },
  {
    id: "8",
    path: "https://placehold.co/300x300",
    description: "placeholder 8",
  },
  {
    id: "9",
    path: "https://placehold.co/300x300",
    description: "placeholder 9",
  },

  {
    id: "10",
    path: "https://placehold.co/300x300",
    description: "placeholder 10",
  },
];

window.onload = function () {
  //get all html elements into variables
  let imageContainer = document.querySelector("#imageContainer");
  let addImageButton = document.querySelector("#addImageButton");
  let clearImageButton = document.querySelector("#clearImageButton");
  let imageList = document.querySelector("#imageList");
  let imgDisplay = document.querySelector("#imgDisplay");
  //define  your functions

  function setImage() {
    for (const imageFile of imageFiles) {
      let imageOption = document.createElement("option");
      imageOption.value = imageFile.id;
      imageOption.innerText = imageFile.description;
      imageList.appendChild(imageOption);
    }
  }
  function addImage() {
    const id = imageList.value;
    for (const imageFile of imageFiles) {
      if (imageFile.id == id) {
        let image = document.createElement("img");
        image.src = imageFile.path;
        image.alt = imageFile.description;
        imgDisplay.appendChild(image);
      }
    }
  }
  function removeImages() {
    imgDisplay.innerHTML = "";
  }

  function removeImage() {
    imgDisplay.innerHTML = "";
  }
  addImageButton.onclick = addImage;
  clearImageButton.onclick = removeImage;
  //associate your functions with html element events
  setImage();
};
