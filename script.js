
/* Getting the birthday card elements from HTML */
const birthdayCard = document.getElementById("birthdayCard");
const cardFront = document.querySelector(".card-front");
const beginButton = document.getElementById("beginButton");

/* Getting the welcome and universe sections */
const welcomeSection = document.getElementById("welcome");
const universeSection = document.getElementById("universe");

/* Getting the carousel buttons and cards */
const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");
const worldCards = document.querySelectorAll(".world-card");

/* Keeping track of the selected world */
let currentWorld = 0;

/* Opening the birthday card when the front is clicked */
cardFront.addEventListener("click", function () {
    birthdayCard.classList.add("open");
});

/* Displaying the universe after pressing Begin */
beginButton.addEventListener("click", function () {
    welcomeSection.classList.add("hidden");
    universeSection.classList.remove("hidden");

    showWorld();
});

/* Displaying the currently selected world */
function showWorld() {

    worldCards.forEach(function (card, index) {

        /* Removing the active class from other cards */
        card.classList.remove("active");

        /* Highlighting the selected card */
        if (index === currentWorld) {
            card.classList.add("active");
        }

    });

}

/* Moving to the next world */
nextButton.addEventListener("click", function () {

    currentWorld++;

    /* Returning to the first world after the last */
    if (currentWorld >= worldCards.length) {
        currentWorld = 0;
    }

    showWorld();

});

/* Moving to the previous world */
previousButton.addEventListener("click", function () {

    currentWorld--;

    /* Returning to the last world when moving backwards */
    if (currentWorld < 0) {
        currentWorld = worldCards.length - 1;
    }

    showWorld();

});

/* Showing the first world when the page loads */
showWorld();
