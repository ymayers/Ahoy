/**
 * The entry point
 */

const APIKEY = `17251237-ace6a816706b339ed6426cdb5`;
const url = `https://pixabay.com/api/?key=${APIKEY}&q=ships&page=1&per_page=60`;
const shipHolder = document.querySelector(".image-section");
const modalHolder = document.querySelector("#modal");

//makes API call to obtain array of data
async function getData() {
  let response = await fetch(`${url}`);
  let data = await response.json();
  const ships = data.hits;


  //loops through data array to obtain photo urls and display in browser
  for (let i = 0; i < ships.length; i += 1) {
    let thumbnail = ships[i].previewURL;
    let photo = ships[i].largeImageURL;

    //displays all images
    let ship = document.createElement("img");
    ship.setAttribute("src", `${thumbnail}`);
    ship.setAttribute("height", 150);
    ship.setAttribute("width", 150);
    ship.classList.add("ship");
    ship.setAttribute("alt", "ship");
    document.querySelector(".image-section").append(ship);

    //displays single image as modal
    let bigShip = document.createElement("img");
    bigShip.setAttribute("src", `${photo}`);
    bigShip.setAttribute("id", "big");
    bigShip.classList.add("big-ship");

    let images = document.querySelectorAll("img.ship");
    images[i].onclick = function () {
      document.querySelector("#modal").style.display = "block";
      document.querySelector("#modal").append(bigShip);
    };

    bigShip.onclick = function () {
      let element = document.querySelector("#modal").append(bigShip);
      document.querySelector("#modal").style.display = "none";
    };
  }
}

getData();
