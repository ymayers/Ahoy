/**
 * The entry point
 */

import App from "./components/app";
// import axios from 'axios';
import "regenerator-runtime/runtime.js";
import "babel-polyfill";

// window.addEventListener("load", async () => {
const app = new App(document.getElementById("app"));
const APIKEY = `17251237-ace6a816706b339ed6426cdb5`;
const url = `https://pixabay.com/api/?key=${APIKEY}&q=ships`;
//   let response = await axios.get(`https://pixabay.com/api/?key=APIKEY&q=ships`);
// const ships = response.data;
// console.log(ships);

// async function getData() {
//   const ships = await fetch(`${url}`, {
//     method: "GET",
//     mode: "no-cors",
//   }).then((response) => {
//   return response.json();
// })
// .then((ships) => {
//   console.log(ships);
// })
// .catch((err) => {
//   console.error(err);
// });
const shipHolder = document.querySelector(".image-section");

async function getData() {
  let response = await fetch(`${url}`);
  let data = await response.json();
  const ships = data.hits;
  console.log(ships)
  console.log(ships[0])
  console.log(ships[0].previewURL)
  

  for (let i = 0; i < ships.length; i += 1) {
    let thumbnail = ships[i].previewURL;
    let photo = ships[i].webformatURL;
    // let shipList = [{ small: `${thumbnail}`, large: `${photo}` }];
    const ship = document.createElement("img");
    ship.innerHTML = thumbnail;
    ship.setAttribute("src", `${thumbnail}`);
    document.querySelector(".image-section").append(ship);
    console.log(thumbnail)
  }
}

getData();

// const renderList = function (shipArr) {
//   let thumbnail = data.hits.previewUrl;
//   let photo = data.hits.webUrl;
//   let shipList = [{ small: `${thumbnail}`, large: `${photo}` }];

//   for (let i = 0; i < shipArr.length; i += 1) {
//     const ship = document.createElement("img");
//     ship.innerHTML = shipList[i].small;
//     ship.setAttribute("src", `${thumbnail}`);
//     shipHolder.append(ship);
//   }
// };

// renderList()
// const myData = getData().then((data) => renderList(data.hits));

// console.log(myData);

// const renderList = function (shipArr) {
//   let thumbnail = myData.previewUrl;
//   let photo = myData.webUrl;
//   let shipList = [{ small: `${thumbnail}`, large: `${photo}` }];

//   for (let i = 0; i < shipArr.length; i += 1) {
//     const ship = document.createElement("img");
//     ship.innerHTML = shipList[i].small;
//     ship.setAttribute("src", `${thumbnail}`);
//     shipHolder.append(ship);
//   }
// }

// const myData = getData().then((data) => console.log(data.hits));

// myData.forEach((e) => {
//   let thumbnail = myData.previewUrl;
//   console.log(thumbnail);
//   let photo = myData.webUrl;
//   let shipList = [{ small: `${thumbnail}`, large: `${photo}` }];
//   const ship = document.createElement("img");
//   ship.setAttribute("src", `${thumbnail}`);
//   ship.innerHTML = shipList.small;
//   shipHolder.append(ship);
// });

// renderList(myData);

// const myData = getData().then((data) => console.log(data.hits));

// let thumbnail = myData.previewUrl;
// let photo = myData.webUrl;
// let shipList = [{ small: `${thumbnail}`, large: `${photo}` }];

// const renderList = function (shipArr) {
//   for (let i = 0; i < shipArr.length; i += 1) {
//     const ship = document.createElement("img");
//     ship.innerHTML = shipList[i].small;
//     ship.setAttribute("src", `${thumbnail}`);
//     shipHolder.append(ship);
//   }
// };
// renderList(shipList);

// .catch((err) => {
//   console.error(err);
// });

// A very simple component setup
// app.render();

// Render the time every 1s
//   setInterval(() => {
//     app.render();
//   }, 1000);

// });
