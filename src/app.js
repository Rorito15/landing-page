const openSideBarButton = document.getElementById("open-side-bar-button");
const closeSideBarButton = document.getElementById("close-side-bar-button");
const sideBar = document.getElementById("side-bar");

const signUpButton = document.getElementById("sign-up-button");
const closeSignUpModalButton = document.getElementById("close-modal-button");
// const signUpModalContainer = document.getElementById("sign-up-modal-container");
const signUpModal = document.getElementById("sign-up-modal-container");

function openSideBar(event) {
  event.preventDefault();
  sideBar.classList.add("show");
}

function closeSideBar(event) {
  event.preventDefault();
  sideBar.classList.remove("show");
}

function openSignUpModal(event) {
  event.preventDefault();
  signUpModal.classList.add("show");
}

function closeSignUpModal(event) {
  event.preventDefault();
  signUpModal.classList.remove("show");
}

// function handleSignUpModalContainerClick(event) {
//   event.preventDefault();
//   if (event.target === signUpModalContainer) {
//     closeSignUpModal(event);
//   }
// }

// Event Listeners

openSideBarButton.addEventListener("click", openSideBar);
closeSideBarButton.addEventListener("click", closeSideBar);

signUpButton.addEventListener("click", openSignUpModal);
closeSignUpModalButton.addEventListener("click", closeSignUpModal);
// signUpModalContainer.addEventListener("click", handleSignUpModalContainerClick);
